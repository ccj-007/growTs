type MinusOne<T extends number, K extends number[] = []> = T extends K['length'] 
  ? K extends [number, ...infer R] 
    ? R['length']
    : never
  : MinusOne<T, [...K, 0]>