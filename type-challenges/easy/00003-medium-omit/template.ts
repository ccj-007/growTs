// 你的答案
type MyExclude2<T, K> = T extends K ? never : T

type MyOmit<T, K extends keyof T> = {
  [P in MyExclude2<keyof T, K>]: T[P]
}
