FROM node:24

WORKDIR /backend_node

COPY package.json .

RUN yarn config set network-timeout 3000000

RUN yarn install

COPY . .

EXPOSE 8800

CMD [ "node","index.js" ]