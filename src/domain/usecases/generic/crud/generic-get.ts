import { GenericGetOptions } from '@/domain/helpers/query-params';

export interface GenericGet<ResultType> {
  get: (options: GenericGetOptions) => Promise<ResultType>;
}
