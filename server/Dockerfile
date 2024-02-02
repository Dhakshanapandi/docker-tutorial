FROM node:16

WORKDIR /app

# Copy package.json and package-lock.json (if present)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that your application is running on
EXPOSE 5000

# Command to run your application
CMD ["npm", "start"]
