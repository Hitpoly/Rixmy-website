FROM node:16-alpine
RUN mkdir -p /var/www/app
WORKDIR /var/www/app
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]
