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
        //asking user from where they want to create a todo either in current position or upcoming and accordingly set the state 
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

    //Adding todo after filling all the entry 
    const addTodoHandler = (e) => {
        e.preventDefault();
        //if there is no text and user want to create todo we restrict user to do that and show them an error
        if(text.length > 0 && date.length > 0){
            setError(false)
            //storing data through reducer addTodo in store of React-Redux
            dispatch(addTodo({ text, date, currentTodo, upcoming ,completed}));
        }else{
            setError(true);
        }
        setText("")
        setDate("")
    };

    return (
        <div>
        {/* Todo Form */}
        <form onSubmit={addTodoHandler} className='w-full h-fit bg-[#365486] flex justify-center gap-x-2 px-1 md:gap-x-16 xl:gap-x-20 py-1 mx-auto rounded-lg  '>
           {/* Text (todo ) input  */}
            <input
                type="text"
                className='text-[#0F1035] bg-[#DCF2F1] rounded-lg text-center border-transparent p-0 lg:h-10 h-8 md:w-36 w-28 lg:w-fit text-md lg:text-lg'
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Enter Task'
                />
            {/* Date Input  */}
            <input
                type="date"
                className='text-[#0F1035] bg-[#DCF2F1] cursor-pointer border-transparent text-center rounded-lg lg:h-10 h-8 placeholder:text-[#0F1035] text-md lg:text-lg'
                value={date}
                onChange={(e) => setDate(e.target.value)}
                />
            <button
                type='submit'
                className=' text-[#0F1035] bg-[#DCF2F1] -pl-10 md:-pl-6 rounded-lg lg:p-2  lg:h-10 h-8  text-sm lg:text-lg '
                >Create Task</button>

        </form>
        {/* if there is a error when user not input task and date then we show them error message */}
        {error && <p className='text-red-600 text-center font-semibold'>Please Enter Task and Due Date Properly </p> }
    </div>
    );
}

export default AddTodo;
