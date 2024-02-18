import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
function Adding() {
  const dispatch = useDispatch();
  const [Input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Input.trim() !== "") {
      dispatch(addTodo(Input));
      setInput("");
    } else {
      alert("Please enter a Todo");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-1/2 flex justify-center m-auto mt-4"
    >
      <input
        type="text"
        placeholder="Enter todo"
        value={Input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
        className="px-4 py-2 mx-3 bg-black text-white border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 flex-1  "
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none"
      >
        Submit
      </button>
    </form>
  );
}

export default Adding;
