# Stage 1: Build the Angular application
FROM node:18 as build-step
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:alpine
COPY --from=build-step /app/dist/heyimgarret /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80

# Build: docker build -t heyimgarret .
# Run: docker run -d -p 4200:80 heyimgarret 