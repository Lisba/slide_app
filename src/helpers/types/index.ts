export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type PrettifyDistributive<T> = T extends infer O
  ? { [K in keyof O]: O[K] }
  : never;
