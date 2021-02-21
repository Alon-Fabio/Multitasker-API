FROM node:15.8.0
# FROM node:12.13.0

WORKDIR /usr/src/Multitasker-api

COPY package*.json ./

RUN npm install

EXPOSE 80 8080

CMD ["sh"]