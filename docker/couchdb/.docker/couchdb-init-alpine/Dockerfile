FROM alpine

RUN apk add curl

WORKDIR /

COPY init.sh init.sh

CMD [ "sh", "-c", "./init.sh" ]
