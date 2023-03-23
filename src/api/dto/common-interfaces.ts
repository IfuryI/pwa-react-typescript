export type SeverityCode = 'ERROR' | 'SUCCESS' | 'INTERNAL_SERVER_ERROR'

export interface HttpResponseStatus {
  severityCode: SeverityCode
  statusCode: number
  statusCodeDescription: string
}

export interface HttpResponse<T> {
  status: HttpResponseStatus
  response: T
  httpStatus: 'OK' | 'NOT OK'
}
