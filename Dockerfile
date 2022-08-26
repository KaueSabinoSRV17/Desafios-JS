FROM node:12

COPY . .

ENV PORT=500

EXPOSE 8080

CMD ["npm", "start"]