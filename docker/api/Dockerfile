FROM node:18-alpine

WORKDIR /app

RUN npm install -g json-server

COPY data.json /app/data.json

EXPOSE 4000

CMD ["json-server", "--watch", "data.json", "--port", "4000"]
