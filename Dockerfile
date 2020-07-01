FROM hayd/alpine-deno:latest

EXPOSE 8080

WORKDIR /usr/app

COPY . .

CMD [ "run", "--allow-net", "--allow-env", "--allow-read", "--allow-write", "index.ts" ]
