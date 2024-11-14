FROM node:alpine

RUN apk update && apk add make && rm -rf /var/cache/apk/*

WORKDIR /code
COPY roman-numerals/package.json .
COPY roman-numerals/package-lock.json .
RUN npm install
RUN rm package.json package-lock.json

USER node
VOLUME ["/code", "/code/node_modules"]
RUN npm config set update-notifier false

