// type Merge<F, S> = any

// 你的答案
// 你的答案
type Merge<F, S> = {
  [k in keyof F | keyof S]: k extends keyof S ? S[k] : k extends keyof F ? F[k] : never
}

//通过in循环，[]包裹得到K, 双层的三元表达式放入另外一个type中