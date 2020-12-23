FROM node:15-alpine

RUN mkdir -p /opt/app
RUN apk add --no-cache libc6-compat curl

WORKDIR /opt/app

# Install dependencies
COPY package.json /opt/app
COPY yarn.lock /opt/app

RUN yarn install

COPY . /opt/app

# Set config variables
ENV NODE_ENV production
ENV PORT 3000

# Arguments for frontend build
ARG NEXT_PUBLIC_ENDPOINT

ENV NEXT_PUBLIC_ENDPOINT "$NEXT_PUBLIC_ENDPOINT"

# Build app
RUN yarn build

RUN npx next telemetry disable

EXPOSE 3000

HEALTHCHECK CMD curl --fail http://localhost:3000 || exit 1

CMD [ "yarn", "start" ]
