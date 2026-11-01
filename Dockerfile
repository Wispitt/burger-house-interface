# Etapa 1: build
FROM node:20-alpine AS build

WORKDIR /app

# Instala dependências
COPY package*.json ./
RUN npm install

# Copia o restante do projeto
COPY . .

# Build da aplicação
RUN npm run build

# Etapa 2: servidor
FROM nginx:alpine