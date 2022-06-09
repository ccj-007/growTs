type MyCapitalize<S extends string> = S extends `${infer T}${infer R}` ? `${T}${Uppercase<R>}` : S;

type a = MyCapitalize<'fooo'>

//infer有选择第一个