type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// keyof 用于将所有接口的key全部返回
//mapped  遍历
//indexed  类似数组取值