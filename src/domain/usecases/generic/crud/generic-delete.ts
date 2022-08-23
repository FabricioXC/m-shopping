export interface GenericDelete {
  delete: (id: number) => Promise<void>;
}
