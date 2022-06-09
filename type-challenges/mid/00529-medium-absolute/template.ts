// type Absolute<T extends number | string | bigint> = any

//answer
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer R}` ? R : `${T}`


//任何类型都可以通过infer拆开，然后获取