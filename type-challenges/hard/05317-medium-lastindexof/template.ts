type LastIndexOf<T extends any[], U> = T extends [...infer I,infer L]? L extends U ? I['length']: LastIndexOf<I,U> : -1;


//只要是数组想获取下标，直接T['length']
//infer的位置及其灵活