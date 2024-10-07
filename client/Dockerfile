# Dockerfile for Nuxt.js Client
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install
# RUN npm install --save-dev @nuxt/types
# RUN npm install --save-dev @nuxt/kit
# RUN npm install nuxt
# RUN npm audit fix



# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Expose the necessary port
EXPOSE 3000

# Start the Nuxt.js application
# CMD ["npm", "run", "start"]
CMD ["node", ".output/server/index.mjs"]
