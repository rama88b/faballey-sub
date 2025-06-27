# Use official Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy application source code
COPY . .

# Expose port
EXPOSE 3000

# Run app
CMD ["node", "index.js"]
