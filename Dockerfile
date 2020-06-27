FROM node:lts-alpine3.12
WORKDIR /code
COPY . .
EXPOSE 80
EXPOSE 3000
ADD entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
CMD ["sh", "/entrypoint.sh"]