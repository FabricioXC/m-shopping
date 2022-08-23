import { HttpClient } from "@/data/interfaces";
// import { AccessDeniedError, UnexpectedError } from '@/domain/errors';
import { GenericUpdate } from "@/domain/usecases";

export class RemoteGenericPartialUpdate<DTO, ResultType>
  implements GenericUpdate<DTO, ResultType>
{
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<ResultType>
  ) {}

  async update(id: string, params: DTO = null): Promise<ResultType> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "PATCH",
      params: { id },
      body: params,
    });

    switch (httpResponse.statusCode) {
      case 200:
        return httpResponse.body;
      case 403:
        break;
      // throw new AccessDeniedError();
      default:
        break;
      // throw new UnexpectedError();
    }
  }
}
