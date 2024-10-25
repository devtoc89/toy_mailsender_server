# NestJS 리뷰 관리 시스템 Backend

이 프로젝트는 NestJS를 사용하여 구축된 리뷰 관리 시스템입니다. 
Airtable을 데이터베이스로 사용하고 이메일 알림 기능을 포함하고 있습니다.

## 프로젝트 구조

src/
├── global/
│ ├── config/
│ │ └── app.config.ts
│ ├── modules/
│ │ ├── airtable/
│ │ │ ├── airtable.module.ts
│ │ │ └── airtable.service.ts
│ │ └── mails/
│ │ ├── mail.module.ts
│ │ └── mail.service.ts
│ └── response/
│ └── Response.ts
├── reviews/
│ ├── dto/
│ │ └── create-review.dto.ts
│ ├── interfaces/
│ │ └── review.interface.ts
│ ├── reviews.controller.ts
│ ├── reviews.module.ts
│ └── reviews.service.ts
├── app.module.ts
└── main.ts

## 주요 라이브러리

- NestJS: ^10.3.2
- @nestjs/config: ^3.3.0
- airtable: ^0.12.2
- nodemailer: ^6.9.15

## 설치 방법

1. 프로젝트를 클론합니다:
   ```
   git clone [[[[repository-url]]()]()](https://github.com/devtoc89/fordeullee)
   ```

2. 의존성을 설치합니다:
   ```
   npm install
   ```


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

프로덕션 모드로 실행:
  ```
  export AIRTABLE_API_KEY=your_airtable_api_key
  export AIRTABLE_BASE_ID=your_airtable_base_id
  export MAIL_SENDER_ID=your_email_id
  export MAIL_SENDER_PW=your_email_password
  npm run build
  npm run start:prod
  ```

## 주요 기능

1. 리뷰 생성: POST `/review` 엔드포인트를 통해 새로운 리뷰를 생성할 수 있습니다.
2. Airtable 연동: 생성된 리뷰는 Airtable에 자동으로 저장됩니다.
3. 이메일 알림: 새로운 리뷰가 생성되면 지정된 이메일 주소로 알림이 발송됩니다.

## 설정
`app.config.ts` 파일에서 Airtable과 이메일 설정을 관리합니다:
