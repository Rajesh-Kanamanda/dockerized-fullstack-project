# Stage 1: Build the frontend
FROM node:18-alpine AS build
WORKDIR /app

# Copy package.json and package-lock.json first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend source code
COPY . .

# Build the frontend app for production
RUN npm run build

# Stage 2: Serve using Nginx
FROM nginx:alpine

# Copy build output to nginx HTML folder
COPY --from=build /app/dist /usr/share/nginx/html

# Copy a custom nginx configuration (optional)
#COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
