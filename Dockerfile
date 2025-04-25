FROM node:latest As builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

ARG BUILD_ENV

RUN npm run build:${BUILD_ENV}

FROM nginx:latest

COPY --from=builder /usr/src/app/dist/mr-public-web/ /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000