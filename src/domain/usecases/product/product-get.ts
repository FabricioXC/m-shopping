import { GenericGetOptions } from "@/domain/helpers/query-params";
import { ProductInfo } from "@/domain/models/products";

export interface ProductGet {
  get: (options: GenericGetOptions) => Promise<ProductInfo[]>;
}
