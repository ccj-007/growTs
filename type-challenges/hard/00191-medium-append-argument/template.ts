type AppendArgument<Fn, A> = Fn extends (...args: infer ArgsArray) => infer Return ? (...args: [...ArgsArray, A])=> 
Return : never




type AppendArgument2<Fn, A> = Fn extends (...args: infer ArgsArray) => infer Return ? (...args: [...ArgsArray, A]) => Return : never

//...args获取剩余参数，那么infer获取到的是数组， infer  Return获取返回的数组，