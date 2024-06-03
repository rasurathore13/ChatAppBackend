FROM node:20

RUN mkdir -p /app

WORKDIR /app

COPY . .

RUN npm install > /dev/stdout 2> /dev/stderr

RUN npm run build

ENV PORT=80

EXPOSE 80

CMD ["node", "dist/main.js"]
