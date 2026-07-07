FROM node:24

WORKDIR /backend_nestjs

COPY package.json .

RUN yarn config set network-timeout 3000000

RUN yarn install

# dành cho version prisma v5
COPY prisma ./prisma/
RUN yarn prisma generate

COPY . . 


RUN yarn run build

EXPOSE 8080

CMD [ "yarn","start:prod" ]