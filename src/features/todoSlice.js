import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const  initialState = {
    todos:[{
        id:1,
        text:"Your Todo",
        date:"07-12-2004",
        editable:false,
        currentTodo:false,
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
              currentTodo:action.payload.currentTodo,
              upcoming:action.payload.upcoming,
              completed:action.payload.completed,
          }
          state.todos.push(todo)
        },
        removeTodo:(state,action) => {
          state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        updateTodo:(state,action) => {
           state.todos.map((todo)=> todo.id === action.payload.id ?(todo.text = action.payload.text):(todo.text = todo.text))
        },
        toggleCompleted:(state,action) => {
           state.todos.map((todo)=> todo.id === action.payload ?(todo.completed = !todo.completed):(todo.completed = todo.completed))
            
        },
        // setCompleted:(state,action) => {
        //     state.todos.map((todo)=> todo.id === action.payload.id ?(todo.text = action.payload.text):(todo.text = todo.text))
        // }
      
    }
})

export const {addTodo,removeTodo,updateTodo,toggleCompleted} = todoSlice.actions
export default todoSlice.reducer 