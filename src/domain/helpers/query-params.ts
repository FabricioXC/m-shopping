export type GenericGetOptions<Nested = null> = {
  query?: QueryTypes<Nested>;
  params?: { [key: string]: string | number };
};

export type GenericGetAllOptions<Nested = null> = {
  page: number;
  params?: { [key: string]: string | number };
  query?: QueryTypes<Nested>;
};

type QueryTypes<Nested = null> = {
  [key: string]:
    | BasicTypes
    | { [K in keyof Nested]?: Nested[K] }
    | NestedRelation<Nested>
    | PrismaFilters;
};

type NestedRelation<Nested> = {
  every?: { [K in keyof Nested]?: Nested[K] };
  some?: { [K in keyof Nested]?: Nested[K] };
  none?: { [K in keyof Nested]?: Nested[K] };
};

type PrismaFilters = {
  gte?: BasicTypes;
  gt?: BasicTypes;
  lte?: BasicTypes;
  lt?: BasicTypes;
};

type BasicTypes = string | number | boolean | Date | (string | number)[];
