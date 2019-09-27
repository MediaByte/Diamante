FROM node:12

WORKDIR /usr/src/diamante

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
COPY ./dist ./dist
COPY ./keys ./keys
COPY ./lib/client/build ./build

RUN npm install

CMD ["/bin/bash"]