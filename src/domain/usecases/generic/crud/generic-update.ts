export interface GenericUpdate<DTO, ResultType> {
  update: (id: String, params: DTO) => Promise<ResultType>;
}
