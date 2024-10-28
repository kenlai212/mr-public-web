#Stage 1: Compile and Build angular codebase
#FROM node:latest as build
#WORKDIR /usr/local/app
#COPY ./ /usr/local/app/
#RUN npm install -g @angular/cli
#RUN npm install
#RUN ng build --prod

# Stage 2: Serve app with nginx server
#FROM nginx:latest
#COPY --from=build /usr/local/app/dist/mr-public-web /usr/share/nginx/html
#COPY nginx.conf /etc/nginx/conf.d/default.conf
#EXPOSE 2000

FROM node:latest As builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:latest

COPY --from=builder /usr/src/app/dist/mr-public-web/ /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000