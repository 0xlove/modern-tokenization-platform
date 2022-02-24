FROM node:14.17.1-alpine

ENV PORT=8080

ENV NODE_ENV=development

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn add lodash.throttle

RUN yarn install

COPY . .

CMD ["yarn", "dev"]
