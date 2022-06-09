type Pop<T extends any[]> = T extends [...infer F, infer R] ? F : never

//[2, 3, 4]  ----->  [2, 3]