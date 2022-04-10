FROM python:3.10

ENV PYTHONUNBEFFERED 1

WORKDIR /server

COPY requirements.txt /server/requirements.txt

RUN pip install -r requirements.txt

COPY . /server