type Permutation<T, K = T> = [T] extends [never] ? [] : T extends T ? [T, ...Permutation<Exclude<K, T>>] : never;

//如果传入的泛型never， 那么返回原数组 
