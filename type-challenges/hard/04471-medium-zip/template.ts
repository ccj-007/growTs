type Zip<T extends any[], U extends any[], R extends any[] = []> = T extends [infer TL, ...infer TR] ? U extends [infer UL, ...infer UR] ? Zip<TR, UR, [...R, [TL, UL]]> : R : R
