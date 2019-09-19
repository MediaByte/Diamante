FROM node:12

WORKDIR /usr/src/diamante

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
COPY ./built ./built
COPY ./dashboard/build ./dashboard/build

RUN npm install

CMD ["/bin/bash"]