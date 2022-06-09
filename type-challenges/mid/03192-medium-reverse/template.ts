// your answers
type Reverse<T, R extends any[]=[]> = T extends [infer P, ...infer U]
  ? Reverse<U, [P, ...R]>
  : R

//这里的R代表保存的数据，P的每次等同于push进数据，如果没数据，返回R