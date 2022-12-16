FROM node:16-alpine
USER node
WORKDIR /app
EXPOSE 8080
# RUN npm install --save-dev webpack-cli
CMD npm run dev


