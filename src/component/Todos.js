import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
function Todos() {
  const todo = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  return (
    <div className="container mx-auto w-4/6 py-10">
      <ul className="divide-y divide-gray-200 ">
        {todo.map((todoItem) => (
          <div
            key={todoItem.id}
            className="flex items-center justify-between py-3 px-4 my-2 bg-slate-200 rounded-lg"
          >
            <li className="text-lg">{todoItem.text}</li>

            <button
              onClick={() => {
                dispatch(deleteTodo(todoItem.id));
              }}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
