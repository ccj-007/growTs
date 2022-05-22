type ReplaceKeys<
  U extends Record<string, unknown>,
  T extends string,      //需要哪些key
  Y extends Record<string, unknown>  //对应需要key的类型uion
> = {
  [k in keyof U]: k extends T ? (k extends keyof Y ? Y[k] : never) : U[k];
};