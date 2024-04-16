import React from "react";
import AddTodo from "./components/AddTodo";
import { useSelector} from "react-redux";
import Todos from "./components/Todos";
import './App.css'

function App() {
  const todos = useSelector((state) => state.todos);
 
  return (
    <div className="min-h-screen bg-[#DCF2F1] xl:py-8 py-4 ">
      <div className="font-bold text-2xl text-center xl:text-3xl text-[#0F1035] shadow-lg xl:h-16">Manage Your Todos</div>
      <div className="w-full md:max-w-[80vw] mx-auto xl:mt-6 mt-1 lg:mt-2  shadow-lg rounded-lg xl:px-44 py-3 px-2 max-w-[100vw]">
      
      {/* current todo starts  */}
        <div className="text-xl heading md:text-2xl lg:text-3xl text-center mb-4 lg:mb-8 mt-2 ">
          Planned Stage
        </div>
        <div className="mb-4">
          {/* AddTodo form goes here and passing props from where it's called*/}
          <AddTodo where="current" />
        </div>
        
           <div className="flex flex-wrap gap-y-3">
            {/* Looping todos from the array of todos getting each element key is required while loopin html  */}
              {todos.map((todo) => (
                <div key={todo.id} className={`${todo.currentTodo?("w-full"):("h-0")}`}>
                  {
                    todo.currentTodo ? (<Todos todo={todo} />):(null)
                  }
                   
                </div>
               ))}
          </div>
       {/* current todo ends  */}

       {/* Upcoming todo starts  */}
       <div className="text-xl heading md:text-2xl lg:text-3xl text-center mb-8 mt-2 ">
          Upcoming Stage
        </div>
        <div className="mb-4 ">
          {/* Todo form goes here */}
          <AddTodo where="upcoming" />
          
        </div>
           <div className="flex flex-wrap gap-y-3">
            {/* Looping todos from the array of todos getting each element key is required while loopin html  */}
           {todos.map((todo) => (
                <div key={todo.id} className={`${todo.upcoming?("w-full"):("h-0")}`}>
                  {/* if todo is upcoming then show here  */}
                  {
                    todo.upcoming ? (<Todos todo={todo} />):(null)
                  }
                </div>
               ))}
          </div>
       {/* Upcoming todo ends */}


       {/* completed todo starts  */}
       <div className="text-xl heading md:text-2xl lg:text-3xl text-center mb-8 mt-2 ">
          Completed Stage
        </div>
        <div className="mb-4">
          {/* Todo form goes here */}
          <AddTodo where="completed" />
          
        </div>
           <div className="flex flex-wrap gap-y-3">
            {/* Looping todos from the array of todos getting each element key is required while loopin html  */}
           {todos.map((todo) => (
                <div key={todo.id} className={`${todo.completed?("w-full"):("h-0")}`}>
                  {/* if todo is completed then show here  */}
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
