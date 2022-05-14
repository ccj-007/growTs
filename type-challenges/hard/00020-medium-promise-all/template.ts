// 你的答案
declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{[P in keyof T] : T[P] extends Promise<infer R>? R : T[P]}>


//泛型用于处理多种不同类型的参数，同时可以获取对应的参数，对比infer
