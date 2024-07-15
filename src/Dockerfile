FROM node:latest 

WORKDIR /usr/app

COPY server.js /usr/app/

COPY . /usr/app/

RUN npm i -s express mongoose 

RUN touch .env

RUN npm i --save-dev dotenv nodemon

ENV PORT = 8080

EXPOSE 8080

CMD [ "npm", "run", "devStart" ]