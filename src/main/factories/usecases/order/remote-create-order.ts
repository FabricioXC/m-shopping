import { RemoteGenericPost } from "@/data/usecases";
import { UpdateOrderDTO } from "@/domain/usecases/order";
import { makeApiUrl, makeAxiosClient } from "@/main/factories/http";

export const makeRemoteCreateOrder = (): RemoteGenericPost<
  UpdateOrderDTO,
  any
> =>
  new RemoteGenericPost<UpdateOrderDTO, any>(
    makeApiUrl("/order"),
    makeAxiosClient()
  );
