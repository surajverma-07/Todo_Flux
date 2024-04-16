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

        <form onSubmit={addTodoHandler} className='w-full h-fit bg-[#365486] flex justify-center gap-x-4 md:gap-x-16 xl:gap-x-20 py-1 mx-auto rounded-lg  '>
            <input
                type="text"
                className='text-[#0F1035] bg-[#DCF2F1] rounded-lg text-center border-transparent p-0 lg:h-10 h-8 w-36 lg:w-fit text-sm lg:text-lg'
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Enter Task'
                />
            <input
                type="date"
                className='text-[#0F1035] bg-[#DCF2F1] cursor-pointer border-transparent text-center rounded-lg lg:h-10 h-8  text-sm lg:text-lg'
                value={date}
                onChange={(e) => setDate(e.target.value)}
                />
            <button
                type='submit'
                className=' text-[#0F1035] bg-[#DCF2F1] p-0 rounded-lg lg:p-2  lg:h-10 h-8  text-[10px] lg:text-lg '
                >Create Task</button>

        </form>
        {error && <p className='text-red-600 text-center font-semibold'>Please Enter Task and Due Date Properly </p> }
    </div>
    );
}

export default AddTodo;
