FROM node:alpine
WORKDIR /usr/app

COPY package.json .
COPY . .

RUN yarn 
EXPOSE 3000