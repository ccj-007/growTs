type Subsequence<T extends any[],Prefix extends any[] = []> = T extends [infer F,...infer R] ? Subsequence<R, Prefix | [...Prefix,F]>:Prefix

//核心通过infer数组的是否判断, 将profix的状态不断更新，递归返回不断新增返回的prefix的union类型