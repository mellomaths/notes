FROM nginx:latest 

COPY nginx.conf /etc/nginx/nginx.conf

COPY ./site /apps/site
COPY ./api /apps/api
COPY pyproject.toml poetry.lock /apps/api/


RUN pip install poetry==1.8.4



ENV POETRY_NO_INTERACTION=1 \
    POETRY_VIRTUALENVS_IN_PROJECT=1 \
    POETRY_VIRTUALENVS_CREATE=1 \
    POETRY_CACHE_DIR=/tmp/poetry_cache

WORKDIR /app

COPY pyproject.toml poetry.lock ./
RUN touch README.md

RUN --mount=type=cache,target=$POETRY_CACHE_DIR poetry install --without dev --no-root

FROM python:3.11-slim-buster as runtime

ENV VIRTUAL_ENV=/app/.venv \
    PATH="/app/.venv/bin:$PATH"

COPY --from=builder ${VIRTUAL_ENV} ${VIRTUAL_ENV}

COPY annapurna ./annapurna

# ENTRYPOINT ["python", "-m", "src/app.py"]

# docker build -t nginx-example .
# docker run -d -p 8080:8080 nginx-example
