import { ApiProperty } from '@nestjs/swagger'

export class CreateReviewDto {
  @ApiProperty({ description: '이름' })
  name: string
  @ApiProperty({ description: '캠프' })
  camp: string
  @ApiProperty({ description: '내용' })
  summary: string
}
