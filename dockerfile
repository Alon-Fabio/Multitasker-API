FROM node:15.8.0
# FROM node:12.13.0

WORKDIR /usr/src/Multitasker-api

COPY ./ ./

RUN npm install

CMD ["sh"]