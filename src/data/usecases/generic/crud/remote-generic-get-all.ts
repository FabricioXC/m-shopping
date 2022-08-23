import { HttpClient } from "@/data/interfaces";
// import { AccessDeniedError, UnexpectedError } from '@/domain/errors';
import { GenericGetAllOptions } from "@/domain/helpers/query-params";
import { GenericGetAll } from "@/domain/usecases";

export class RemoteGenericGetAll<ResultType>
  implements GenericGetAll<ResultType>
{
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<ResultType[]>
  ) {}

  async getAll(options: GenericGetAllOptions): Promise<ResultType[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "GET",
      params: options.params,
      query: {
        ...options.query,
        _page: options.page,
      },
    });

    switch (httpResponse.statusCode) {
      case 200:
        return httpResponse.body;
      case 204:
        return [];
      case 403:
        break;
      // throw new AccessDeniedError();
      default:
        break;
      // throw new UnexpectedError();
    }
  }
}
