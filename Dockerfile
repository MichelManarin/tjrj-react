FROM node:16.20.2

WORKDIR /usr/src/bookmanager

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["node", "server.js"]