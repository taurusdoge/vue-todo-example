export interface Store {
  todos: Array<Todo>;
}

export interface Todo {
  id: number;
  subject: string;
}
