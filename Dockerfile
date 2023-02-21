FROM node:lts-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install -g @angular/cli 

COPY package.json .
COPY package-lock.json .
RUN npm install

CMD ["npm", "run", "serve"]