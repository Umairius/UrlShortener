# Use the official Node.js LTS as base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy your Node.js backend code into the container
COPY . .

# Expose the port your Node.js backend is listening on
EXPOSE 3000

# Command to start your Node.js backend
CMD ["npm", "start"]
