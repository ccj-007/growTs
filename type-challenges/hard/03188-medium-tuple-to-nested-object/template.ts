// type TupleToNestedObject<T, U> = any
type TupleToNestedObject<T extends any[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? {
      [key in Extract<T[number], First>]: TupleToNestedObject<Rest, U>;
    }
  : U;