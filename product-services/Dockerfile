# Use an official Node.js image
FROM node:16-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY index.js ./index.js

# Expose port 5001 for Product Service
EXPOSE 5001

# Start the service
CMD ["node", "index.js"]
