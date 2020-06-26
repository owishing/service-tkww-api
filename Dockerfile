FROM node:lts-alpine3.12
WORKDIR /code
COPY . .
RUN npm ci
CMD ["node", "src/service.js"]
