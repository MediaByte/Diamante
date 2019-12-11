FROM node:12

WORKDIR /usr/src/diamante

COPY ./package.json ./package.json
COPY ./build ./build
COPY ./src/client ./client
COPY ./keys ./keys

RUN npm install

CMD ["/bin/bash"]