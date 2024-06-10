FROM node:20

RUN mkdir -p /app

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

ENV PORT=3000

EXPOSE 3000

CMD ["node", "dist/main.js"]
