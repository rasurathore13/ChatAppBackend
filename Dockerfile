FROM node:20

RUN mkdir -p /app

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

ENV PORT=80

EXPOSE 80

CMD ["node", "dist/main.js"]
