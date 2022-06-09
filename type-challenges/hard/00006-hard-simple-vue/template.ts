type GetComputed<C> = C extends Record<string, (...args: any[]) => any>
   ? { [S in keyof C]: ReturnType<C[S]>} :never

declare function SimpleVue<D, C, M>(options: {
  options: {
    data: () => D,
    computed: C,
    methods: M,
  } & ThisType<D & M & GetComputed<C>>
}): any


//thisType可以获取到对应的this的类型， getComputed内部不是方法，需要返回对应的计算出来的值