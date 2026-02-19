FROM node:20-alpine

WORKDIR /app

# Install deps first (better cache)
COPY package*.json ./
RUN npm install

# App source
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
