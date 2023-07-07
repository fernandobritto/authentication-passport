FROM node:18-slim

WORKDIR /src

COPY package.json yarn.lock  /src/

RUN yarn install

COPY . .

CMD yarn start
