FROM node:12

WORKDIR /app

ADD /package.*json /app



RUN yarn
# ADD / /app

COPY . /app
#RUN yarn build
#RUN npm install -g serve
EXPOSE 80

#CMD [ "serve", "-s", "build" ]