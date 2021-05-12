FROM node:14-alpine

WORKDIR /api

ADD /package.*json /api

RUN npm i

ADD / /api

COPY . /api/

EXPOSE 8080

CMD [ "node", "server.js" ]