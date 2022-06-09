type RequiredByKeys<T, K extends any = keyof T> = Omit<Required<Pick<T, K & keyof T>> & Omit<T, K>, never>


// 针对对象
//omit<T, K extends keyof T>从T中构造新的类型，排除K的所有属性
//pick<T, U>  挑选U的类型， U是要的属性   


// 针对类型
//Exclude<T, U>  U我不要的
//Extract<T, U>  U我要的
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
