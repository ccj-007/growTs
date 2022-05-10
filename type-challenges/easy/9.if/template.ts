type If<C, T, F> = C extends true ? T : F

type adas = If<null, 'a', 'b'>