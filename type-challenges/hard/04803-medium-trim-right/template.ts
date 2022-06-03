// your answers
type SpaceChar = " " | "\n" | "\t";
type TrimRight<S extends string> = S extends `${infer Rest}${SpaceChar}` ? TrimRight<Rest> : S;