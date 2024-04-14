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

    useEffect(() => {
        if (where === "upcoming") {
            setCurrentTodo(false);
            setCompleted(false)
            setUpcoming(true);
        } else if(where === "current") {
            setUpcoming(false);
            setCompleted(false);
            setCurrentTodo(true);
        }else{
            setCurrentTodo(false);
            setUpcoming(false);
            setCompleted(true);
        }
    }, [where]);
    // console.log(currentTodo)

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo({ text, date, currentTodo, upcoming ,completed}));
        setText("")
        setDate("")
    };

    return (
        <form onSubmit={addTodoHandler} className='w-full h-12 bg-slate-500 flex justify-center gap-x-10 mx-auto py-1  '>
            <input
                type="text"
                className='text-black'
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Enter Task to be done'
            />
            <input
                type="date"
                className='text-black'
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <button
                type='submit'
                className='border bg-slate-900 text-white rounded-md p-2'
            >Add Todo</button>
        </form>
    );
}

export default AddTodo;
