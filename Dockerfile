FROM python:3.8
RUN mkdir /app_backend
COPY requirements.txt /app_backend/
WORKDIR /app_backend
RUN pip install -r requirements.txt

COPY . /app_backend/