import { deteleTodo, updateStatusReducer } from "../store/Reducer/TodoReducer";
import { TodoCardProps } from "../types";
import { useAppDispatch } from "../hook/hook"

const TodoCard = ({ item, setLoading }: TodoCardProps) => {

  const dispatch = useAppDispatch();

  // Update the Status When user click on checkbox
  const updateStatus = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const status = e.target.checked;
    setLoading(true)
    await dispatch(updateStatusReducer({ id: item._id, status: status }))
    setLoading(false)
  }


  // Delete the TodoCard when user click on Delete_Button
  const handleDelete = async () => {
    setLoading(true)
    await dispatch(deteleTodo(item._id))
    setLoading(false)
    // deleteMutation.mutate(item._id)
  }

  return (
    <div className="px-4 py-6 rounded-md bg-white shadow-md">
      <div className="flex gap-3 justify-between items-center">
        <h5 className={`${item.status && 'line-through text-gray-400'}`}>{item.title}</h5>
        <input type="checkbox" checked={item.status} className="cursor-pointer"
          onChange={updateStatus}
        />
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handleDelete}
          className="bg-red-600 rounded-md px-3 py-2 text-xs text-white">
          {/* {deleteMutation.isLoading ? "Deleting" : "Delete"} */}
          Delete
        </button>
      </div>
    </div>
  )
}

export default TodoCard