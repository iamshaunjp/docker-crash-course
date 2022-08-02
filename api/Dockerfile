FROM node:17-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4000
# required for docker desktop port mapping

CMD ["node", "app.js"]