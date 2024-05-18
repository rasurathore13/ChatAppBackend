FROM node:20

WORKDIR /app

COPY . .

RUN npm i

RUN npm run build

ENV PORT=80

EXPOSE 80

EXPOSE 3000

CMD ["node", "dist/main.js"]
