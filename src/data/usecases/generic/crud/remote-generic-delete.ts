import { HttpClient } from "@/data/interfaces";
// import { AccessDeniedError, UnexpectedError } from '@/domain/errors';
import { GenericDelete } from "@/domain/usecases";

export class RemoteGenericDelete implements GenericDelete {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<void>
  ) {}

  async delete(id: number): Promise<void> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "DELETE",
      params: { id },
    });

    switch (httpResponse.statusCode) {
      case 204:
        return;
      case 403:
        break;
      // throw new AccessDeniedError();
      default:
        break;
      // throw new UnexpectedError();
    }
  }
}
