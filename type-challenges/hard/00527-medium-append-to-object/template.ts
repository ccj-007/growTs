type AppendToObject<T extends {}, U extends string, V> = {
  [K in (keyof T | U)]: K extends keyof T ? T[K] : V
}

//[K in  可以放入联合类型 的keyof]    T[K 类型]  那么可以找到对应的类型定义
//V 在这里表示值