// your answers
type ConstructTuple<L extends number, T extends any[] = []> = L extends T["length"] ? T : ConstructTuple<L, [...T, unknown]>;