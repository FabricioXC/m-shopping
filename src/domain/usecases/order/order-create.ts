import { ProductInfoShoppingCart } from "@/domain/models/products";

import { GenericPost } from "../generic";

export type CreateOrder = GenericPost<UpdateOrderDTO, any>;

export type UpdateOrderDTO = { order: ProductInfoShoppingCart[] };
