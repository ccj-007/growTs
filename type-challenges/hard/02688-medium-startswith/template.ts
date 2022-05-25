// type StartsWith<T extends string, U extends string> = T extends `${infer TL}${infer TR}` ? U extends `${infer UL}${infer UR}` ? TL extends UL ? StartsWith<TR, UR> extends any ? U extends '' ? true : false : false : false : false : false


type StartsWith<T extends string, U extends string> = T extends `${U}${infer P}`
  ? true
  : false