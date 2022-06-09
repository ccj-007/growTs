type Copy1<T> = {
  [P in keyof T]: T[P]
}

type PartialByKeys<T, K = keyof T> = Copy1<Omit<T, K & keyof T> & {
  [P in K & keyof T]?: T[P]
}>