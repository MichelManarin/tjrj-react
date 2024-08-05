FROM node:16.20.2 AS development

ENV NODE_ENV development

WORKDIR /usr/src/bookmanager

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "server.js"]