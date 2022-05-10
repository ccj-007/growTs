type First2<T extends any[]> = T['length'] extends 0 ? never : T[0]  //通过比较数组内部length属性对比

type First3<T extends any[]> = T extends [] ? never : T[0]     //通过直接比较数组类型

type First4<T extends any[]> = T[0] extends T[number] ? T[0] : never    //通过直接比较数组类型

type First<T extends any[]> = T extends [infer First, ... infer Rest] ? First : never    //通过直接比较数组类型


// type First<T extends any[]> = any
//有三种方式实现
//union 类型  | |
//infer 用法指定对应的  推断