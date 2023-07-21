import streamlit as st
import pandas as pd
import numpy as np
import plotly.express as px
import math

from typing import List


@st.cache_data
def get_data() -> pd.DataFrame:
    url = 'https://raw.githubusercontent.com/alura-cursos/pandas-conhecendo-a-biblioteca/main/base-de-dados/aluguel.csv'
    df = pd.read_csv(url, sep=";")
    df = df.fillna(0)
    return df


def get_mean(df: pd.DataFrame, column: str) -> float:
    mean = df[column].mean()
    mean = mean if not math.isnan(mean) else 0
    return mean


def get_area_selection_options(df: pd.DataFrame) -> List:
    min_value = df["Area"].min()
    max_value = df["Area"].max()
    
    current_min = min_value

    options = []
    while True:
        current_max = current_min + 50

        options.append(f"{current_min} - {current_max}")
        
        current_min = current_max
        if current_max >= max_value:
            break
    
    return options


st.set_page_config(
    page_title="Projeto Imobiliário",
    page_icon="📊",
    layout="wide",
)

st.title("Projeto Imobiliário")

df_original = get_data()


if "comparison_on" not in st.session_state:
    st.session_state.comparison_on = False

with st.sidebar:
    st.header("Filtros")

    df = df_original.copy()

    district = st.selectbox("Selecione o bairro", np.sort(pd.unique(df["Bairro"])))
    df = df[df["Bairro"] == district]

    st.subheader("Comparação")
    st.checkbox("Comparar", key="comparison_on")
    district_compared = st.selectbox("Compare com o bairro:", np.sort(pd.unique(df_original["Bairro"])), disabled=not st.session_state.comparison_on)
    df_comparison = df_original[df_original["Bairro"] == district_compared]

    property_type = st.selectbox("Selecione o tipo do imóvel", np.sort(pd.unique(df["Tipo"])))
    df = df[df["Tipo"] == property_type]
    df_comparison = df_comparison[df_comparison["Tipo"] == property_type]

    count_rooms = st.selectbox("Quantidade de quartos", np.sort(pd.unique(df["Quartos"])))
    df_comparison = df_comparison[df_comparison["Quartos"] == count_rooms]

    area = st.radio(
        "Área",
        get_area_selection_options(df),
    )
    min_area, max_area = area.split('-')
    min_area = float(min_area.strip())
    max_area = float(max_area.strip())
    df = df[(df["Area"] >= min_area) & (df["Area"] < max_area)]
    df_comparison = df_comparison[(df_comparison["Area"] >= min_area) & (df_comparison["Area"] < max_area)]

    check_suite = st.checkbox('Com suite?')
    if check_suite:
        df = df[df["Suites"] > 0]
        df_comparison = df_comparison[df_comparison["Suites"] > 0]

    check_vaga = st.checkbox('Com vaga na garagem?')
    if check_vaga:
        df = df[df["Vagas"] > 0]
        df_comparison = df_comparison[df_comparison["Vagas"] > 0]

    st.divider()


placeholder = st.empty()
with placeholder.container():
    st.divider()
    st.header("Dados")

    print(df_comparison)

    col1, col2 = st.columns(2)
    with col1:
        st.caption("Valores médios dado os filtros selecionados.")
        st.subheader("")
        sub_col1, sub_col2, sub_col3 = st.columns(3)
        with sub_col1:
            mean_value = get_mean(df=df, column="Valor")
            mean_value_compared = get_mean(df=df_comparison, column="Valor")
            st.metric(
                label="Aluguel",
                value=f"R$ {round(mean_value,2)} ", # ! Use money library to show currency values
                delta=f"{round(mean_value - mean_value_compared,2)}",
                help=f"O valor do aluguel em {district} é em média R$ {round(mean_value - mean_value_compared,2)} maior que em {district_compared} utilizando os mesmos filtros"
            )

        with sub_col2:
            mean_condo = get_mean(df=df, column="Condominio")
            st.metric(
                label="Condominio",
                value=f"R$ {round(mean_condo,2)} ",
            )
        
        with sub_col3:
            mean_iptu = get_mean(df=df, column="IPTU")
            st.metric(
                label="IPTU",
                value=f"R$ {round(mean_iptu,2)} ",
            )

    with col2:
        st._legacy_dataframe(df)
