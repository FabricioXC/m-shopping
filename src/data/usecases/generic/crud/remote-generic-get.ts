import { HttpClient } from "@/data/interfaces";
// import { AccessDeniedError, UnexpectedError } from '@/domain/errors';
import { GenericGetOptions } from "@/domain/helpers/query-params";
import { GenericGet } from "@/domain/usecases";

export class RemoteGenericGet<ResultType> implements GenericGet<ResultType> {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<ResultType>
  ) {}

  async get(options: GenericGetOptions): Promise<ResultType> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "GET",
      query: options.query,
      params: options.params,
    });

    switch (httpResponse.statusCode) {
      case 200:
        return httpResponse.body;
      case 204:
        return null;
      case 403:
        // throw new AccessDeniedError();
        break;
      default:
        break;
      // throw new UnexpectedError();
    }
  }
}
