# Build stage
FROM node:18.15.0-alpine3.17 as build-stage
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
# Run stage
FROM node:18.15.0-alpine3.17
WORKDIR /app
COPY --from=build-stage /app/package.json /app/package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY --from=build-stage /app/dist /app/dist
RUN npm install pm2 -g
EXPOSE 80
CMD ["pm2-runtime","dist/main/index.js"]
