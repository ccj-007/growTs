type Fibonacci<T extends number, Index extends any[] = [1], P extends any[] = [], C extends any[] = [1]> = Index["length"] extends T ? C["length"] : Fibonacci<T, [...Index, 1], C, [...P, ...C]>;


//number一定是从数组中出来计算, T 代表终止条件， Index代表初始的1，代表下标用来标记终止的位置  P 用来存储上一次的len，  C 用来表示最终的len，也就是最终的结果  C["length"]

//Index["length"] extends T ? C["length"] 此时代表未终止条件，最后得到结果的出口。


/** 根据数值生成指定长度的元组 */
type GenerateTuple<L extends number, T extends number[] = []> =
  T['length'] extends L ? T : GenerateTuple<L, [...T, 0]>;

/** 根据当前数列，计算下一项的值 */
type Calculate<T extends number[]> =
  T extends [...any, infer A, infer B]
  ? [...GenerateTuple<A extends number ? A : never>, ...GenerateTuple<B extends number ? B : never>]['length']
  : T['length'];

type Fibonacci2<T extends number, A extends number[] = [1]> = 
  A['length'] extends T 
  ? 
    A extends [...any, infer E] 
    ? E 
    : never 
  : Fibonacci2<T, [...A, Calculate<A>]>;