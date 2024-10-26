import { Body, Controller, Post } from '@nestjs/common'
import { ApiCreatedResponse, ApiOperation } from '@nestjs/swagger'
import {
  Response,
  makeFailResponse,
  makeSuccessResponse,
} from 'src/global/response/Response'
import { CreateReviewDto } from 'src/reviews/dto/create-review.dto'
import { ReviewsService } from 'src/reviews/reviews.service'

@Controller('review')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  @ApiOperation({
    summary: '리뷰 작성 API',
    description:
      '폼에서 제공한 리뷰 데이터를 airtable에 저장 및 mail 발송한다.',
  })
  @ApiCreatedResponse({
    description:
      '폼에서 제공한 리뷰 데이터를 airtable에 저장 및 mail 발송한다.',
    type: Response,
  })
  async create(@Body() createReviewDto: CreateReviewDto) {
    if (await this.reviewsService.create(createReviewDto)) {
      return makeSuccessResponse()
    } else {
      return makeFailResponse()
    }
  }
}
