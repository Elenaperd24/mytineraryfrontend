FROM node:16.11.0
WORKDIR /app
COPY package.json /app/ 
RUN npm install -g
RUN npm install react-scripts --force
COPY  . .
EXPOSE 3000
CMD npm run start