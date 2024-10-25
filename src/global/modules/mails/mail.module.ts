import { Module } from '@nestjs/common'
import { MailService } from 'src/global/modules/mails/mail.service'

@Module({
  imports: [],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
