# 1️⃣ 빌드 단계

FROM node:20.16.0-alpine3.19 as builder

WORKDIR /usr/src/app

COPY package.json  ./

COPY tsconfig.json ./  

RUN npm install

COPY . .

RUN npm run build

# 2️⃣ 실행 단계
FROM node:20.16.0-alpine3.19 as runner

WORKDIR /usr/src/app

# 의존성 복사 (Production only)
COPY package.json package-lock.json ./
COPY tsconfig.json ./  
RUN npm install --omit=dev

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./package.json
# ✅ 환경 변수 복사
COPY --from=builder /usr/src/app/.env ./  


CMD ["npm", "run", "start"]