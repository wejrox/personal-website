FROM node:12.14.1-alpine

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY build /app
COPY environment/server/server.js  /app/server.js

CMD ["npm", "start"]
