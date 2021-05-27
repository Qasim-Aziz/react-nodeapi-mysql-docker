FROM node:14

WORKDIR /app

ADD /package.*json /app



RUN npm i
RUN npm install @material-ui/icons
RUN npm install @material-ui/core

COPY . /app
#RUN yarn build
#RUN npm install -g serve
EXPOSE 80

#CMD [ "serve", "-s", "build" ]