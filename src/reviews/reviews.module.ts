import { Module } from '@nestjs/common'
import { AirtableModule } from 'src/global/modules/airtable/airtable.module'
import { MailModule } from 'src/global/modules/mails/mail.module'
import { ReviewsController } from 'src/reviews/reviews.controller'
import { ReviewsService } from 'src/reviews/reviews.service'

@Module({
  imports: [AirtableModule, MailModule],
  controllers: [ReviewsController],
  providers: [ReviewsService],
})
export class ReviewModule {}
