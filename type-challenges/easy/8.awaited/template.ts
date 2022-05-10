type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X> ? X extends Promise<unknown> ? MyAwaited<X> : X : never

//infer有获取的对应类型的作用，在条件类型中使用， 设置未知数和变量