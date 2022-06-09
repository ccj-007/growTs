type trim = ' ' | '\n' | '\t'
type TrimLeft<S extends string> = S extends `${trim}${infer L}` ? TrimLeft<L> : S

//首先有筛选、条件一定要用extends
//infer来推导对应的值，占位的限制只能一次，所以需要递归