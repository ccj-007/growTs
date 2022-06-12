type UnionToIntersection<U> = (U extends any ? (arg: U) => any : never) extends ((arg: infer I) => void) ? I : never

type A = 'foo' | 42 | true

type B = A extends any ? (arg: A) => any : never // (arg: A) => any 

type C = B extends ((arg: infer I) => void) ? I : never //  'foo' | 42 | true

type D = 'foo' & 2 & true // never