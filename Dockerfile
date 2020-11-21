FROM node:alpine

RUN apk update && apk add make && rm -rf /var/cache/apk/*

WORKDIR /tmp
ADD fizz-buzz/package.json .
ADD fizz-buzz/package-lock.json .
RUN npm install
RUN rm package.json package-lock.json
RUN mv ./node_modules /node_modules
ENV PATH /node_modules/.bin:$PATH

USER node
WORKDIR /kata
RUN npm config set update-notifier false

