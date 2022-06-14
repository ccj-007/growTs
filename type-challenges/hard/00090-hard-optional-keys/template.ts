// 你的答案
type OptionalKeys<T> = keyof {
  [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K];
};