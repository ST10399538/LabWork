# Stage 1: Install dependencies
FROM node:22-alpine3.20 AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

# Stage 2: Run the app
FROM node:22-alpine3.20 AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=5000
EXPOSE 5000

# Health check for container
HEALTHCHECK CMD node -e "require('http').get('http://localhost:'+ (process.env.PORT||5000) +'/health',r=>process.exit(r.statusCode===200?0:1)).on('error',()=>process.exit(1))"

# Create non-root user for security
RUN addgroup -S nodegrp && adduser -S nodeuser -G nodegrp
USER nodeuser

# Copy dependencies and app code
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Start the app
CMD ["npm","start"]
