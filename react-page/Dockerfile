FROM node:12 as builder

WORKDIR /app

ADD /package.*json /app



RUN yarn
# ADD / /app

COPY . /app
RUN yarn build



RUN apt-get update
RUN apt-get install -y nginx
RUN cp -R ./build /var/www/html
RUN rm -f /etc/nginx/sites-enabled/default
ADD ./react-app.conf /etc/nginx/sites-enabled/
RUN service nginx restart
EXPOSE 80
#CMD ["nginx", "-g", "daemon off"]

