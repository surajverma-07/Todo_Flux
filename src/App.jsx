import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import { useSelector } from "react-redux";
import Todos from "./components/Todos";


function App() {
  const todos = useSelector((state) => state.todos);
  console.log(todos)


  
  return (
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
      
      {/* current todo starts  */}
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Current Todo 
        </h1>
        <div className="mb-4">
          {/* Todo form goes here */}
          <AddTodo where="current" />
          
        </div>
        
           <div className="flex flex-wrap gap-y-3">
              {todos.map((todo) => (
                <div key={todo.id} className="w-full">
                  {
                    todo.currentTodo ? (<Todos todo={todo} />):("")
                  }
                   
                </div>
               ))}
          </div>
       {/* current todo ends  */}

       {/* pending todo starts  */}
       <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Upcoming Todo 
        </h1>
        <div className="mb-4">
          {/* Todo form goes here */}
          <AddTodo where="upcoming" />
          
        </div>
           <div className="flex flex-wrap gap-y-3">
           {todos.map((todo) => (
                <div key={todo.id} className="w-full">
                  {
                    todo.upcoming ? (<Todos todo={todo} />):(null)
                  }
                   
                </div>
               ))}
          </div>
       {/* pending todo ends */}


       {/* completed todo starts  */}
       <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Completed Todo 
        </h1>
        <div className="mb-4">
          {/* Todo form goes here */}
          <AddTodo where="completed" />
          
        </div>
           <div className="flex flex-wrap gap-y-3">
           {todos.map((todo) => (
                <div key={todo.id} className="w-full">
                  {
                    todo.completed ? (<Todos todo={todo} />):(null)
                  }
                   
                </div>
               ))}
          </div>
       {/* pending todo ends */}

      </div>
    </div>
  );
}

export default App;
