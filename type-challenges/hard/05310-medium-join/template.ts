type Join<T extends any[], U extends string | number,  R extends string = '' > = T extends [infer F, ...infer L] ?  L['length'] extends 0 ? `${R extends '' ? '' : `${R}${U}`}${F & string}`  :Join<L,U,`${R extends ''?'':`${R}${U}`}${F&string}`>
:R

type Join2<
  T extends any[], 
  U extends string | number,
  R extends string = ''
> = 
  T extends [infer F,...infer L]?
    L['length'] extends 0?
      `${R extends ''?'':`${R}${U}`}${F&string}`
      :Join<L,U,`${R extends ''?'':`${R}${U}`}${F&string}`>
  :R