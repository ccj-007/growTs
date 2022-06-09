type Trunc<T extends number | string> = `${T}` extends `${infer N}.${any}` ? N : `${T}`

//numebr如何转string，通过`${T}`