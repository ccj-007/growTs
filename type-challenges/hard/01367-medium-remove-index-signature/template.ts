type RemoveIndexSignature<T> = {
  [K in keyof T as string extends K ? never : K extends number ? never : K]: T[K]
}