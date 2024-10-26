import { ApiProperty } from '@nestjs/swagger'

export class Response<T> {
  @ApiProperty({
    description: '결과 코드(현재 SUCCESS, FAIL만 사용)',
  })
  code: string
  @ApiProperty({ description: 'response data', required: false })
  data?: T
  @ApiProperty({ description: '메세지', required: false })
  message?: string
}
export class ResponseOption<T> {
  code?: string
  data?: T
  message?: string
}

export function makeResponse<T>(opt?: ResponseOption<T>): Response<T> {
  return {
    // TODO: Define Response Code
    ...opt,
    code: opt.code,
  }
}

export function makeSuccessResponse<T>(opt?: ResponseOption<T>): Response<T> {
  return makeResponse({ ...opt, code: 'SUCCESS' })
}
export function makeFailResponse<T>(opt?: ResponseOption<T>): Response<T> {
  return makeResponse({ ...opt, code: 'FAIL' })
}
