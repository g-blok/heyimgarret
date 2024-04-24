# Use an official base image, e.g., Node for a Node.js application
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source inside Docker image
COPY . .

# Your app's port number
EXPOSE 4200

# Command to run your app
CMD ["npm", "start"]
