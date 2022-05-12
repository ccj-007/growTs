type MyReturnType<T> = T extends (...arg: any[]) => infer P ? P : never
