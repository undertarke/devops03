FROM node:24

WORKDIR /node_backend

COPY package.json .

RUN yarn config set network-timeout 3000000

RUN yarn install

COPY . . 

EXPOSE 8088

# node server.js 
# CMD ["node","server.js"]
CMD ["yarn","start"]


# docker build . -t img-node
# docker run -d -p 8088:8088 --name cons-node img-node