FROM node:8.4.0-alpine

ENV APP_HOME /app

ADD . $APP_HOME

WORKDIR  $APP_HOME

RUN rm -rf node_modules
RUN npm i