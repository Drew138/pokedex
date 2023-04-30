FROM node:16

WORKDIR /usr/src/app

COPY ./src .

RUN npm install

EXPOSE 80

CMD [ "npm", "start" ]
