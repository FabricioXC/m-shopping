import { GenericGetAllOptions } from '@/domain/helpers/query-params';

export interface GenericGetAll<ResultType> {
  getAll: (options: GenericGetAllOptions) => Promise<ResultType[]>;
}
