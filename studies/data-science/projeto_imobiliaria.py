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


def create_filter(df: pd.DataFrame, filter_field: str, filter_label: str) -> pd.DataFrame:
    filter_value = st.selectbox(filter_label, np.sort(pd.unique(df[filter_field])))
    df = df[df[filter_field] == filter_value]
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

df = get_data()

st.header("Filtros")

col1, col2 = st.columns(2)
with col1:
    df = create_filter(df=df, filter_field="Bairro", filter_label="Selecione o bairro")

    df = create_filter(df=df, filter_field="Tipo", filter_label="Selecione o tipo do imóvel")

with col2:
    df = create_filter(df=df, filter_field="Quartos", filter_label="Quantidade de quartos")

    area = st.radio(
        "Área",
        get_area_selection_options(df),
    )
    min_area, max_area = area.split('-')
    min_area = float(min_area.strip())
    max_area = float(max_area.strip())
    df = df[(df["Area"] >= min_area) & (df["Area"] < max_area)]

    check = st.checkbox('Tem suite?')
    if check:
        df = df[df["Suites"] > 0]


placeholder = st.empty()
with placeholder.container():
    st.header("Dados")

    col1, col2 = st.columns(2)
    with col1:
        st.caption("Valores médios dado os filtros selecionados.")
        sub_col1, sub_col2, sub_col3 = st.columns(3)
        with sub_col1:
            mean_value = get_mean(df=df, column="Valor")
            st.metric(
                label="Aluguel",
                value=f"$ {round(mean_value,2)} ",
            )

        with sub_col2:
            mean_condo = get_mean(df=df, column="Condominio")
            st.metric(
                label="Condominio",
                value=f"$ {round(mean_condo,2)} ",
            )
        
        with sub_col3:
            mean_iptu = get_mean(df=df, column="IPTU")
            st.metric(
                label="IPTU",
                value=f"$ {round(mean_iptu,2)} ",
            )

    with col2:
        st._legacy_dataframe(df)
    
    # col1, col2, col3 = st.columns(3)
    # with
