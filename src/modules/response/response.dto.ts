export interface BaseResponse {
  status: string;
  message: string;
  data: any;
  page?: number;
}
