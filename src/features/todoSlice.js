import { createSlice, nanoid } from "@reduxjs/toolkit";

const  initialState = {
    todos:[{
        id:1,
        text:"Your Todo",
        date:"07-12-2004",
        currentTodo:true,
        upcoming:false,
        completed:false,
    }]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action) => {
          const  todo = {
              id: nanoid(),
              text:action.payload.text,
              date:action.payload.date,
              current:action.payload.current,
              upcoming:action.payload.upcoming,
              completed:action.payload.completed,
          }
          state.todos.push(todo)
        },
        removeTodo:(state,action) => {
           state.todos.filter((todo)=> todo.id !== action.payload.id)
        },
        updateTodo:(state,action) => {
           state.todos.map((todo)=> todo.id === action.payload.id ?(todo.text = action.payload.text):(todo.text = todo.text))
        },
        toggleCompleted:(state,action) => {
           state.todos.map((todo)=> todo.id === action.payload.id ?(todo.completed = !todo.completed):(todo.completed = todo.completed))
            
        },
        toggleCurrent:(state,action)=>{
           state.todos.map((todo)=> todo.id === action.payload.id ?(todo.current = !todo.current):(todo.current = todo.current))

        },
        toggleUpcoming:(state,action) =>{
           state.todos.map((todo)=> todo.id === action.payload.id ?(todo.upcoming = !todo.upcoming):(todo.upcoming = todo.upcoming))

        },
    }
})

export const {addTodo,removeTodo,updateTodo,toggleCompleted,toggleCurrent,toggleUpcoming} = todoSlice.actions
export default todoSlice.reducer 