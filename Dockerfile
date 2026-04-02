# =========================================================
# Stage 1: Build
# =========================================================
FROM node:22-alpine AS builder

WORKDIR /app

# Copy manifests first for layer caching
COPY package.json package-lock.json ./

# Install all deps (devDependencies needed for build)
RUN npm ci --frozen-lockfile

# Copy source
COPY . .

# Build the Astro project
RUN npm run build

# =========================================================
# Stage 2: Production runtime
# =========================================================
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4321

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 astro

# @astrojs/node standalone mode outputs everything needed into dist/
# including a bundled node_modules subset — no npm install required here.
COPY --from=builder --chown=astro:nodejs /app/dist ./dist

USER astro

EXPOSE 4321

CMD ["node", "dist/server/entry.mjs"]
