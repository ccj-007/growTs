// type DropChar<S extends string, C extends string> = S extends `${infer P}${infer R}`
//   ? P extends C  ? DropChar<R, C>  : `${P}${DropChar<R, C>}` : S

type DropChar<S extends string, C extends string> = S extends `${infer L}${infer R}` ? 
L extends C ? DropChar<R, C> : `${L}${DropChar<R, C>}` : S