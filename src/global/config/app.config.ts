// app.config.ts
import { registerAs } from '@nestjs/config'

export default registerAs('app', () => ({
  airtable: {
    apiKey: process.env.AIRTABLE_API_KEY,
    baseId: process.env.AIRTABLE_BASE_ID,
  },
  nodemail: {
    auth: {
      id: process.env.MAIL_SENDER_ID,
      pw: process.env.MAIL_SENDER_PW,
    },
  },
}))
