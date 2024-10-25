// "message": "Cannot POST /review%E3%85%81",
// "error": "Not Found",
// "statusCode": 404

export interface Response<T> {
  code: string
  data?: T
  message?: string
}
export interface ResponseOption<T> {
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
