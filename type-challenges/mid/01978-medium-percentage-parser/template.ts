// type PercentageParser<A extends string,  B extends any[]> = A extends `${infer L}${infer R}` ? L extends '+' ? PercentageParser<R, [...B, L]> : PercentageParser<R, [...B, '']> : B


//这里有个问题，1，你的infer字符串只能是一个，不能多个。  2.您要定义一个union类型
//字符串是可以用字符占位的

type IsSign<T extends string> = T extends `+${infer R}` ? ['+', R]: T extends `-${infer R}` ? ['-', R] : ['', T]; 

type IsPercent<T extends string> = T extends `${infer R}%` ? [R, '%']: [T, ''];

type PercentageParser<A extends string> = [IsSign<A>[0], ...IsPercent<IsSign<A>[1]>]