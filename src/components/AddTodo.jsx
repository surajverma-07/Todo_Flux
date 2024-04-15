import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';

function AddTodo({ where }) {
    const dispatch = useDispatch();
    const [date, setDate] = useState("");
    const [text, setText] = useState("");
    const [currentTodo, setCurrentTodo] = useState(false);
    const [upcoming, setUpcoming] = useState(false);
    const [completed,setCompleted] = useState(false);
    const [error ,setError] = useState(false)

    useEffect(() => {
        if (where === "upcoming") {
            setCurrentTodo(false);
            setCompleted(false)
            setUpcoming(true);
        } else if(where === "current") {
            setUpcoming(false);
            setCompleted(false);
            setCurrentTodo(true);
        }else if(where === "completed"){
            setCurrentTodo(false);
            setUpcoming(false);
            setCompleted(true);
        }else{
            setCompleted(false)
            setUpcoming(false)
            setCurrentTodo(false)
        }
    }, [where]);
    // console.log(currentTodo)

    const addTodoHandler = (e) => {
        e.preventDefault();
        if(text.length > 0 && date.length > 0){
            setError(false)
            dispatch(addTodo({ text, date, currentTodo, upcoming ,completed}));
        }else{
            setError(true);
        }
        setText("")
        setDate("")
    };

    return (
        <div>

        <form onSubmit={addTodoHandler} className='w-full h-fit bg-slate-500 flex justify-center gap-x-10 mx-auto py-1  '>
            <input
                type="text"
                className='text-white bg-slate-800 rounded-lg text-center'
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Enter Task to be done'
                />
            <input
                type="date"
                className='text-white text-center rounded-lg bg-slate-800'
                value={date}
                onChange={(e) => setDate(e.target.value)}
                />
            <button
                type='submit'
                className='border bg-slate-900 text-white rounded-lg p-2'
                >Create Task</button>

        </form>
        {error && <p className='text-red-600 text-center font-semibold'>Please Enter Task and Due Date Properly </p> }
    </div>
    );
}

export default AddTodo;
