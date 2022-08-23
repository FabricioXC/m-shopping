import axios, { AxiosResponse } from "axios";

import { HttpClient, HttpRequest, HttpResponse } from "@/data/interfaces";

export class AxiosClient implements HttpClient {
  async request(httpRequest: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse<any>;

    let parsedUrl = httpRequest.url;

    if (httpRequest.params) {
      for (const [param, value] of Object.entries(httpRequest.params)) {
        parsedUrl = parsedUrl.replace(`{{${param}}}`, value.toString());
      }
    }

    try {
      axiosResponse = await axios.request({
        url: parsedUrl,
        method: httpRequest.method,
        data: httpRequest.body,
        params: httpRequest.query,
        headers: { ...httpRequest?.headers },
      });
      if (axiosResponse.status !== 200) {
        console.log(axiosResponse.data);
      }
    } catch (error) {
      axiosResponse = error.response ? error.response : { status: 500 };
    }
    return { statusCode: axiosResponse.status, body: axiosResponse.data };
  }
}
