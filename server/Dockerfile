FROM node:16-alpine

WORKDIR /server/app

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 8001

CMD [ "yarn", "start" ]