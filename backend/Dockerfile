# Use lightweight Node.js base image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json & package-lock.json from backend/
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy Node.js application code from backend/src/main/node/
COPY src/main/node ./src/main/node

# Set environment variable for Node app
# [[IENV NODE_ENV=production

# Expose backend port
EXPOSE 5000

# Start the Node.js server
CMD ["node", "src/main/node/server.js"]
