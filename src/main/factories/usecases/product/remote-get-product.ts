import { RemoteProductGet } from "@/data/usecases";
import { makeApiUrl, makeAxiosClient } from "@/main/factories/http";

export const makeRemoteProductGet = (): RemoteProductGet =>
  new RemoteProductGet(makeApiUrl("/product"), makeAxiosClient());
