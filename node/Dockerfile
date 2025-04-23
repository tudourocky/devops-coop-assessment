FROM node

LABEL author="Omar Alkersh <omar@agentnoon>"

WORKDIR /node

copy . .
run npm i

EXPOSE 3000

ENTRYPOINT node index.js
