type Without<T extends unknown[], U> =
    T extends [infer E, ...infer Rest]
    ? E extends Exclude<T[number], U extends unknown[] ? U[number] : U>    //将U从数组中排除在T中，得到number，如果E是在里面的就是我需要的， Exclude返回的是类型
    ? [E, ...Without<Rest, U>]  //这里是我需要的
    : Without<Rest, U>  //说明这个number是需要排除在T中的
    : T