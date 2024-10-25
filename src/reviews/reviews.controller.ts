import { Body, Controller, Post } from '@nestjs/common'
import {
  makeFailResponse,
  makeSuccessResponse,
} from 'src/global/response/Response'
import type { CreateReviewDto } from 'src/reviews/dto/create-review.dto'
import { ReviewsService } from 'src/reviews/reviews.service'

@Controller('review')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}
  @Post('')
  async create(@Body() createReviewDto: CreateReviewDto) {
    if (await this.reviewsService.create(createReviewDto)) {
      return makeSuccessResponse()
    } else {
      return makeFailResponse()
    }
  }
}
