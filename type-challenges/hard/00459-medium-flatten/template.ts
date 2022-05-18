type Flatten<T extends any[], U extends any[] = []> = T extends [infer F, ...infer R] 
? F extends any[] ? Flatten<[...F, ...R], U> : Flatten<R, [...U, F]> : U

//通过改变不断递进的R来递归获取结果