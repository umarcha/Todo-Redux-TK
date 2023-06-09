
export interface Todo {
  title: string;
  status: boolean;
  _id: string;
}

export interface TodoIF {
  todos: Todo[]
}

export interface AddTodoPropsIF {
  setLoading: (state: boolean) => void
}

export interface StatusIF {
  id: string,
  status: boolean
}

export interface TodoCardProps {
  item: Todo;
  setLoading: (state: boolean) => void
}