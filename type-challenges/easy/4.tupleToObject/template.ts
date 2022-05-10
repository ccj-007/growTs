const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const


type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P
}

type result = TupleToObject<typeof tuple>


//js ——————> to 转换用typeof
//as const 控制元组内部变量无法修改 , 如果要读取数据用readonly
// as typeof   