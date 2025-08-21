# NodeJS lightweight image
FROM node:18-alpine

# Çalışma dizini
WORKDIR /app

# Package dosyalarını kopyala ve bağımlılıkları kur
COPY package*.json ./
RUN npm install --include=dev

# Tüm kodu kopyala
COPY . .

# Next.js build al
RUN npm run build

# Container portu
EXPOSE 3000

# Uygulamayı başlat
CMD ["npm", "start"]
