// 你的答案
type ReplaceAll<S extends string, From extends string, To extends string> = From extends '' ? S : S extends `${infer L}${From}${infer R}` ? `${ReplaceAll<L, From, To>}${To}${ReplaceAll<R, From, To>}` : S

//先保证字符串是存在的
//解构赋值拆出infer的值
//然后递归将分两头查找并替换

// type vvv = 'm'
// type aaaa = 'aslmdasdwlmr'
// type ccc = aaaa extends `${infer L}${vvv}${infer R}` ? L : R

//type的infer在循环中会优先映射