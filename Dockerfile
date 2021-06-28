FROM node:13.12.0-alpine3.10
WORKDIR /usr/src/app/calculadora

COPY . .

COPY package*.json ./
RUN npm ci --only=production

CMD [ "node", "./src/apps/MainApp.js" ]