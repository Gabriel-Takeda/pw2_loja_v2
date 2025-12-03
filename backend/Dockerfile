FROM node:22-trixie-slim AS build
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-trixie-slim AS production
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json .
RUN npm ci omit=dev
COPY --from=build /app/dist ./dist
EXPOSE 6677
CMD [ "npm", "run", "start:prod" ]

FROM node:22-trixie-slim AS development
WORKDIR /app
ENV NODE_ENV=development
EXPOSE 6677
CMD [ "npm", "start"]