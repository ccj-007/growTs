type Last<T extends any[]> = T extends [...infer F, infer R] ? R : never
