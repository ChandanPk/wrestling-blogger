FROM node:16-alpine

WORKDIR /tindog-client/app

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "yarn", "dev" ]