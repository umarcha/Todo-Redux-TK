import AddTodo from "./components/AddTodo";
import TodoCard from "./components/TodoCard";
import { useAppDispatch, useAppSelector } from "./hook/hook"
import { useEffect, useState } from "react";
import { getTodo } from "./store/Reducer/TodoReducer";
import { Todo } from "./types";
import Loader from "./components/Loader";

function App() {

  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state?.todo)
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getTodoAsync = async () => {
      setLoading(true);
      await dispatch(getTodo());
      setLoading(false);
    };
    getTodoAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <main className="max-w-4xl mx-auto px-5">
      <AddTodo setLoading={setLoading} />
      <div className="relative">
        <div className="grid grid-cols-2 gap-4 mt-12 place-content-start h-[424px] overflow-y-auto p-2" id="scrollbar">
          {data?.todos?.map((item: Todo, index: number) => <TodoCard key={index} item={item} setLoading={setLoading} />)}
          {isLoading && <Loader />}
        </div>
      </div>
    </main>
  )
}

export default App
