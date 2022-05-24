// type PickByType<T, U> = {
//   [K in keyof T Externals<keyof T, U>]: U
// }

// type Externals<TK, U> = TK extends U ? TK : never


type PickByType<T, U> = {
  [P in keyof T as T[P] extends U ? P : never]: T[P]
}


//in后面一定是一个对象，那么可以用断言获取对应的key。  