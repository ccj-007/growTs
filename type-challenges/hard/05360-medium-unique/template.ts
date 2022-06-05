type Unique<T extends unknown[], R extends unknown[] = []> = T extends [
  infer A,
  ...infer Rest
]
  ? Unique<Rest, A extends R[number] ? R : [...R, A]>
  : R;

  //通过infer解构出来然后通过，在空数组通过三元表达式来判断是否push