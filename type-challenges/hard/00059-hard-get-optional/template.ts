type GetOptional<T> = {
  [key in keyof T as {} extends Pick<T, key> ? key : never]: T[key];
};

//{} 代表可选对象，也就是？