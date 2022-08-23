export interface HttpClient<ResponseBodyType = any> {
  request: (
    httpRequest: HttpRequest
  ) => Promise<HttpResponse<ResponseBodyType>>;
}

export type HttpRequest = {
  url: string;
  method: HttpMethod;
  body?: any;
  query?: Record<string, any>;
  params?: Record<string, string | number>;
  headers?: Record<string, string>;
};

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export type HttpResponse<ResponseBodyType = any> = {
  statusCode: number;
  body?: ResponseBodyType;
};
