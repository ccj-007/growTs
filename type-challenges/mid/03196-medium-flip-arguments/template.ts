type Reverse2<X extends any[]> = X extends [infer F, ...infer R]
  ? [...Reverse<R>, F]
  : X

type FlipArguments<T> = T extends (...args: [...infer A]) => infer R
  ? (...args: Reverse2<[...A]>) => R
  : never