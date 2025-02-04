# Use an official Node.js image as the base
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Explicitly copy necessary files instead of using COPY . .
COPY index.js ./index.js
COPY src ./src

# Expose the port your app runs on
EXPOSE 5000

# Command to run the application
CMD ["node", "index.js"]
