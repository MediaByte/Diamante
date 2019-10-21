FROM node:12

WORKDIR /usr/src/diamante

COPY ./package.json ./package.json
COPY ./tsconfig.json ./tsconfig.json
COPY ./src/server ./server
COPY ./src/client/ ./client
COPY ./keys ./keys

RUN npm install && npm install --prefix client && npm run build --prefix client

CMD ["/bin/bash"]