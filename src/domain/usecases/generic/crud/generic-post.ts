export interface GenericPost<DTO, ResultType> {
  post: (params: DTO) => Promise<ResultType>;
}
