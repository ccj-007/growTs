type AnyOf<T extends any[]> = 
  T[number] extends 0 | '' | false | [] | {[key: string]: never}
  ? false
  : true


  //数组的循环 T[number] extends  