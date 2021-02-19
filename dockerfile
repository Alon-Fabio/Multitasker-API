FROM node:15.8.0

WORKDIR /usr/src/Multitasker-api

COPY ./ ./

RUN npm install

EXPOSE 3000 6379

CMD ["sh"]