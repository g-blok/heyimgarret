# Stage 1: Build the Angular app using Node 18
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build --prod

# Stage 2: Setup Nginx to serve the app
FROM nginx:alpine
COPY ./nginx-custom.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/heyimgarret /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Build: docker build -t heyimgarret
# Run: docker run -d -p 8080:80 heyimgarret 