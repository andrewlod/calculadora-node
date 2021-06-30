public.ecr.aws/lambda/nodejs:12
WORKDIR /usr/src/app/calculadora

COPY . .

RUN npm ci --only=production

CMD [ "node", "./src/apps/MainApp.js" ]