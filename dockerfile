FROM node:12.13.0

WORKDIR /usr/src/MULTITASKER-API

COPY ./ ./

RUN npm install

CMD ["sh"]