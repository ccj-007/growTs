type MyExclude3<T, K> = T extends K ? never :  T

// type MyReadonly2<T, K extends keyof T > = {
//   readonly [P in MyExclude3<keyof T, K>]: T[P]
// }


// // 你的答案
type MyReadonly2<T, K extends keyof T = keyof T> = { readonly [P in K]: T[P]} & { [R in Exclude<keyof T, K>]: T[R]}
