type MyReadonly2<T, K> = {
  [K in keyof T]: K
}

//如何遍历一个对象，那么对应如何只读对应的key，就需要不断的遍历。
//对应ts其实就是readonly这个关键字
//union就是联合类型  string | number
