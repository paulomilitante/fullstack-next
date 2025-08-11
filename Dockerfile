# ---------- dev target (hot reload) ----------
FROM node:20-alpine3.19 AS dev
WORKDIR /app
RUN apk upgrade --no-cache
# install deps only once (cached by lockfile)
COPY package.json package-lock.json* ./
RUN npm ci
# no source copy here; we'll mount it in compose
ENV NODE_ENV=development NEXT_TELEMETRY_DISABLED=1
EXPOSE 3000
CMD ["npm", "run", "dev"]

# ---------- build target (prod build) ----------
FROM node:20-alpine3.19 AS build
WORKDIR /app
RUN apk upgrade --no-cache
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---------- runtime target (small prod image) ----------
FROM node:20-alpine3.19 AS runtime
WORKDIR /app
RUN apk upgrade --no-cache
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1
# non-root
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs
USER nextjs
# copy standalone server + static assets only
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]