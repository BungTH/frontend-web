# Stage 1: Build the Angular application
FROM node:20.9.0-alpine
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 4200
CMD [ "npm", "start", "--", "--host", "0.0.0.0" ]