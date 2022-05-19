type LengthOfString<S extends string , A extends any[] = []> = S extends `${infer L}${infer R}` ? LengthOfString<R, [...A, L]> : A['length']



type LengthOfString2<S extends string, A extends any[] = []> = S extends `${infer L}${infer R}` ? LengthOfString<R, [...A, L]> : A['length']

//只能通过数组获取对应的length
//extends 继承后可以给默认类型，同时在函数传参也可以给一个默认的length

//通过递归不断推入A，那么A['length']一直在变化


type LengthOfString3<S extends string, A extends any[] = []> = S extends `${infer L}${infer R}` ? LengthOfString<R, [...A, L]> : A['length']



