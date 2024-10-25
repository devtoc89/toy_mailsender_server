import { Injectable } from '@nestjs/common'
import { AirtableService } from 'src/global/modules/airtable/airtable.service'
import { MailService } from 'src/global/modules/mails/mail.service'
import type { CreateReviewDto } from 'src/reviews/dto/create-review.dto'

function makeSubject(createReviewDto: CreateReviewDto) {
  return `[${createReviewDto.camp}] ${createReviewDto.name}님의 후기 작성`
}

function makeHtmlContent(createReviewDto: CreateReviewDto) {
  return `<h4>요약내용:</h4><p>${createReviewDto.summary}</p>`
}

@Injectable()
export class ReviewsService {
  constructor(
    private readonly airtableService: AirtableService,
    private readonly mailService: MailService,
  ) {}
  async create(createReviewDto: CreateReviewDto): Promise<boolean> {
    try {
      const ps = []
      ps.push(this.airtableService.createRecord('Reviews', createReviewDto))
      ps.push(
        this.mailService.send({
          to: 'devtoc89@gmail.com', // TODO: 대상에게 보냄 / DUMMY / name to email 방법론 필요
          subject: makeSubject(createReviewDto),
          html: makeHtmlContent(createReviewDto),
        }),
      )
      // TODO: 각각의 처리 성공여부 유효성
      await Promise.all(ps)
      return true
    } catch (e) {
      console.error(e.message)
    }
    return false
  }
}
