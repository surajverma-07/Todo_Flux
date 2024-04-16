import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo, removeTodo, toggleCompleted } from '../features/todoSlice';
import { current } from '@reduxjs/toolkit';

function Todos({ todo }) {
    console.log(todo);
    const dispatch = useDispatch();
    const [editable, setEditable] = useState(todo.editable);
    const [text, setText] = useState(todo.text);
    const [completed,setCompleted] = useState(todo.completed)
    const [date,setDate] = useState(todo.date)

    
    const editTodo = () => {
        dispatch(updateTodo(todo.id, text));
        setEditable(false); // Assuming you want to exit edit mode after updating
    };

 
        const toggleComplete = () => {
            dispatch(toggleCompleted({ id: todo.id, completed: !completed }));
            
        };
        
    
   console.log(completed)
   // Function to format date from "YYYY-MM-DD" to "DD Month YYYY"
   useEffect(()=>{
    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }
    
    // Example usage
    const formattedDate = formatDate(todo.date);
    setDate(formattedDate); // Output: "18 Apr 2024"
   },[date])


    return (
        <div
            className={`flex border border-black/10 rounded-lg font-medium  md:px-6 py-1.5 gap-x-1   px-2 shadow-sm text-sm md:text-lg shadow-white/50 duration-300  text-[#0F1035] ${
                completed ? "bg-[#365486] text-[#7FC7D9]" : "bg-[#7FC7D9] text-black"
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
                className={`border outline-none w-full glow bg-transparent rounded-lg ${
                    editable ? "border-black/10 px-2" : "border-transparent"
                } ${completed ? "line-through" : ""}`}
                value={text}
                onChange={(e) => setText(e.target.value)}
                readOnly={!editable}
            />
            {/* Edit, Save Button */}
            <div className=' w-full glow'>Due Date : {date}</div>
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 lg:mr-2 hover:bg-gray-100 shrink-0 disabled:opacity-50"
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
