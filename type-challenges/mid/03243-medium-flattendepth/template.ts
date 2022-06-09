// type FlattenDepth<T extends any[],  A extends any[] = []> = T extends [infer L, ...infer R] ? L extends number[] ? 
// FlattenDepth<R,  [...L, ...A]> : FlattenDepth<R,  [L, ...A]> : A
type FlattenDepth<T, P extends number = 1, A extends any[] = []> = A['length'] extends P
? T
: T extends [infer F, ...infer R]
  ? F extends any[]
    ? [...FlattenDepth<F, P, [0, ...A]>, ...FlattenDepth<R, P, A>]
    : [F, ...FlattenDepth<R, P, A>]
  : T;