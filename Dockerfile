# 1. Node.js 이미지를 기반으로 시작
FROM node:16 AS development

WORKDIR /app

# 2. 의존성 파일 복사
COPY package.json package-lock.json ./

# 3. 의존성 설치
RUN npm install

# 4. 소스 파일 복사
COPY . .

# 5. 개발 서버 실행 (react-scripts start)
CMD ["npm", "start"]
