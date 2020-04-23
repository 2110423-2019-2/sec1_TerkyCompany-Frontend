FROM node:12.14

WORKDIR /home/node/app

COPY package*.json yarn.lock ./
RUN npm install

COPY . .

EXPOSE 8080
CMD ["npm", "start"]