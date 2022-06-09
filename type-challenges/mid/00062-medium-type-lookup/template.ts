// type LookUp<U, T> = 
type LookUp<U extends {type: string}, T extends U['type']> = 
U extends {type : T} ? U : never

//extends  可以看做循环，接口的继承还能解构，一般 extends，左侧是个大类型，右侧会收窄类型。