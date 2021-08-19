FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "server.js" ]
#https://nodejs.org/en/docs/guides/nodejs-docker-webapp/