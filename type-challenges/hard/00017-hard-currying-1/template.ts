type Unshift2<T> = T extends [infer K, ...infer U] ? U : unknown
type Head<T> = T extends [infer K, ...infer U] ? K : unknown

//这里处理当前参数的函数，如果T的length大于1那么继续函数柯里化
type Curried<T, R> = T extends Array<any> ? T['length'] extends 1 ? (args: Head<T>) => R : (args: Head<T>) => Curried<Unshift2<T>, R>

// 不断传入fn，返回fn
declare function Currying<T extends unknown[], R>(fn: (...args: T) => R): Curried<T, R>

