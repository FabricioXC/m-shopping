import { HttpClient } from "@/data/interfaces";

import { GenericPost } from "@/domain/usecases";

export class RemoteGenericPost<DTO, ResultType>
  implements GenericPost<DTO, ResultType>
{
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<ResultType>
  ) {}

  async post(params: DTO): Promise<ResultType> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "POST",
      body: params,
    });
    switch (httpResponse.statusCode) {
      case 200:
        return httpResponse.body;
      case 201:
        return httpResponse.body;
      case 403:
        break;
      case 404:
        return httpResponse.body;
      default:
        break;
    }
  }
}
