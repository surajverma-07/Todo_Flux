import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const  initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || [{
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
          localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        removeTodo:(state,action) => {
          state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
          localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        updateTodo:(state,action) => {
           state.todos.map((todo)=> todo.id === action.payload.id ?(todo.text = action.payload.text):(todo.text = todo.text))
           localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        toggleCompleted: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    // Toggle completed status
                    const updatedTodo = { ...todo, completed: !todo.completed };
                    // If completed is true, set currentTodo and upcoming to false
                    if (updatedTodo.completed) {
                        updatedTodo.currentTodo = false;
                        updatedTodo.upcoming = false;
                    }
                    return updatedTodo;
                }
                return todo;
            });
        },
        
    }
})

export const {addTodo,removeTodo,updateTodo,toggleCompleted} = todoSlice.actions

export default todoSlice.reducer 