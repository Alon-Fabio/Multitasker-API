FROM node:15.8.0
# FROM node:12.13.0

WORKDIR /usr/src/Multitasker-api

COPY ./ ./

RUN npm install --production

EXPOSE 80 433 8080 4433

CMD ["sh"]