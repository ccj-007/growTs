type Shift<T> = T extends [infer A, ...infer B ] ? B : [] 
