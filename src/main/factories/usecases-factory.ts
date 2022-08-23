import { UsecasesContextType } from "@/presentation/contexts";

import { makeRemoteProductGet, makeRemoteCreateOrder } from "./usecases";

export const makeUsecases = (): UsecasesContextType => ({
  getProduct: makeRemoteProductGet(),
  createOrder: makeRemoteCreateOrder(),
});
