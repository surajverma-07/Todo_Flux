import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo, removeTodo, toggleCompleted } from '../features/todoSlice';

function Todos({ todo }) {
    console.log(todo);
    const dispatch = useDispatch();
    const [editable, setEditable] = useState(todo.editable);
    const [text, setText] = useState(todo.text);
    const [completed,setCompleted] = useState(todo.completed)

    const editTodo = () => {
        dispatch(updateTodo(todo.id, text));
        setEditable(false); // Assuming you want to exit edit mode after updating
    };

    const toggleComplete = () => {
        // dispatch(toggleCompleted(todo.id));
        setCompleted((prev)=> !prev)
    };
   console.log(completed)
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                completed ? "bg-[#c6e9a7] " : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={completed}
                onChange={toggleComplete}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    editable ? "border-black/10 px-2" : "border-transparent"
                } ${completed ? "line-through" : ""}`}
                value={text}
                onChange={(e) => setText(e.target.value)}
                readOnly={!editable}
            />
            {/* Edit, Save Button */}
            <div className='text-black w-full'>{todo.date}</div>
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (completed) return;

                    if (editable) {
                        editTodo(); // Call the editTodo function
                    } else setEditable((prev) => !prev);
                }}
                disabled={completed}
            >
                {editable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => dispatch(removeTodo(todo.id))}
            >
                ❌
            </button>
        </div>
    );
}

export default Todos;
