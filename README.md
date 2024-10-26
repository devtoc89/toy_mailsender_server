# NestJS 리뷰 관리 시스템 Backend

이 프로젝트는 NestJS를 사용하여 구축된 리뷰 관리 시스템입니다. 
Airtable을 데이터베이스로 사용하고 이메일 알림 기능을 포함하고 있습니다.

## 프로젝트 구조

- `src/`: 소스 코드 디렉토리
  - `global/`: 전역 설정 및 모듈
    - `config/`: 애플리케이션 설정
    - `modules/`: Airtable 및 메일 서비스 모듈
    - `response/`: 응답 처리 유틸리티
  - `reviews/`: 리뷰 관련 모듈
  - `app.module.ts`: 메인 애플리케이션 모듈
  - `main.ts`: 애플리케이션 진입점
- `scripts/`: 배포 관련 스크립트
  - `deploy.sh`: 배포 스크립트
  - `remove.sh`: 제거 스크립트
  - `start.sh`: 애플리케이션 시작 스크립트
- `.github/workflows/`: GitHub Actions 워크플로우
  - `deploy.yml`: AWS EC2 배포 워크플로우
- `appspec.yml`: AWS CodeDeploy 설정 파일

## 주요 라이브러리

1. 리뷰 생성
   - POST `/review` 엔드포인트를 통해 새로운 리뷰 생성

2. Airtable 연동
   - 생성된 리뷰를 Airtable에 자동으로 저장

3. 이메일 알림
   - 새로운 리뷰 생성 시 지정된 이메일 주소로 알림 발송

4. Swagger API 문서
   - `/swagger` 엔드포인트에서 API 문서 확인 가능 Swagger UI를 통해 API 문서를 확인하고 테스트할 수 있습니다.


## 배포

이 프로젝트는 GitHub Actions와 AWS CodeDeploy를 사용하여 자동으로 AWS EC2 인스턴스에 배포됩니다.

1. GitHub의 main 브랜치에 푸시하면 배포 프로세스가 시작됩니다.
2. 코드는 S3 버킷에 업로드됩니다.
3. AWS CodeDeploy를 사용하여 EC2 인스턴스에 애플리케이션을 배포합니다.
4. 배포 스크립트는 애플리케이션을 설치하고 실행합니다.

## 개발 환경 설정

1. 저장소를 클론합니다:
   ```
   git clone https://github.com/devtoc89/fordeullee_server
   ```

2. 프로젝트 디렉토리로 이동합니다:
   ```
   cd fordeullee_server
   ```

3. 의존성을 설치합니다:
   ```
   npm install
   ```

4. 환경 변수를 설정합니다:
   `.env` 파일을 생성하고 필요한 환경 변수를 설정합니다.

3. 실행 방법

개발 모드로 실행:
   `.env` 파일을 생성하고 다음 변수들을 설정합니다:
   ```
   AIRTABLE_API_KEY=your_airtable_api_key
   AIRTABLE_BASE_ID=your_airtable_base_id
   MAIL_SENDER_ID=your_email_id
   MAIL_SENDER_PW=your_email_password
   ```
  ```
  npm run start:dev
  ```

## 주요 라이브러리

- NestJS: ^10.3.2
- @nestjs/config: ^3.3.0
- airtable: ^0.12.2
- nodemailer: ^6.9.15

## 설정

`app.config.ts` 파일에서 Airtable과 이메일 설정을 관리합니다.

