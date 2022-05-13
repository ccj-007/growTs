// 你的答案
type Simple = string | boolean | number | bigint | symbol | null | undefined | Function

type DeepReadonly<T> = T extends Simple ? T : {
  readonly [K in keyof T]: DeepReadonly<T[K]>
}