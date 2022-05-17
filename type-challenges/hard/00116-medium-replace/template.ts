type Replace<S extends string, From extends string, To extends string> = S extends `${infer Front}${From}${infer Back}` ? From extends '' ? S : `${Front}${To}${Back}` : S;

//首先不用递归判断，是个替换 那么infer一定要用
//extends 就是条件语句来限制  模板字符串来取值，多个三元实现替换操作