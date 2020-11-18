FROM node:15-alpine

RUN apk update && apk add make && rm -rf /var/cache/apk/*

WORKDIR /opt/project
ADD fizz-buzz/package.json /opt/project
ADD fizz-buzz/package-lock.json /opt/project
RUN npm install

