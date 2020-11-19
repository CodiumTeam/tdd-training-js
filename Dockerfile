FROM node:alpine

RUN apk update && apk add make && rm -rf /var/cache/apk/*

WORKDIR /node_modules
ADD fizz-buzz/package.json /node_modules
ADD fizz-buzz/package-lock.json /node_modules
RUN npm install --allow-root
ENV PATH /node_modules/.bin:$PATH

WORKDIR /kata
USER node
