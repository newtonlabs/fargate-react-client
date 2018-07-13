FROM node:10-alpine as builder

RUN mkdir /app
WORKDIR /app
COPY . .

RUN npm install --quiet
RUN npm run build

# Copy built app into nginx container
FROM nginx:1.13.5
COPY --from=builder /app/build /usr/share/nginx/html
COPY server.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000
