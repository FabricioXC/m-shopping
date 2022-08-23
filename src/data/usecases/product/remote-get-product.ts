import { HttpClient } from "@/data/interfaces";
import { GenericGetOptions } from "@/domain/helpers/query-params";
import { ApiProductInfo, ProductInfo } from "@/domain/models/products";
import { ProductGet } from "@/domain/usecases";

export class RemoteProductGet implements ProductGet {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<ApiProductInfo[]>
  ) {}

  async get(options: GenericGetOptions): Promise<ProductInfo[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "GET",
      query: options.query,
      params: options.params,
    });

    switch (httpResponse.statusCode) {
      case 200:
        let apiResponse: ProductInfo[] = [];

        httpResponse.body.forEach((value) => {
          const productInfo: ProductInfo = {
            id: value.id,
            title: value.title,
            description: value.description,
            image: value.image,
            price: value.price,
          };
          apiResponse.push(productInfo);
        });

        return apiResponse;

      case 204:
        console.log("Unknown Error");
        break;

      case 403:
        console.log("Unknown Error");

        break;
      default:
        console.log("Unknown Error");
        break;
    }
  }
}
