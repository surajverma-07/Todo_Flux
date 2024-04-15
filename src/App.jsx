import React,{useEffect} from "react";
import AddTodo from "./components/AddTodo";
import { useSelector ,useDispatch} from "react-redux";
import Todos from "./components/Todos";
import { addTodo } from "./features/todoSlice";
// import { loadTodosFromLocalStorage } from "./features/todoSlice";

function App() {
  const todos = useSelector((state) => state.todos);
  console.log(todos)
  const dispatch = useDispatch();

 
 
  return (
    <div className="bg-slate-200 min-h-screen py-8 ">
      <div className="w-full max-w-[80vw] mx-auto shadow-md rounded-lg px-44 py-3 text-black">
      
      {/* current todo starts  */}
        <div className="text-xl  text-center mb-8 mt-2 ">
          <div className="rounded-full w-3 h-3 bg-yellow-500 relative top-5 left-[22rem]"></div>
          Planned Stage
        </div>
        <div className="mb-4">
          {/* Todo form goes here */}
          <AddTodo where="current" />
          
        </div>
        
           <div className="flex flex-wrap gap-y-3">
              {todos.map((todo) => (
                <div key={todo.id} className={`${todo.currentTodo?("w-full"):("h-0")}`}>
                  {
                    todo.currentTodo ? (<Todos todo={todo} />):(null)
                  }
                   
                </div>
               ))}
          </div>
       {/* current todo ends  */}

       {/* pending todo starts  */}
       <div className="text-xl  text-center mb-8 mt-2 ">
          <div className="rounded-full w-3 h-3 bg-blue-500 relative top-5 left-[21rem]"></div>
          Upcoming Stage
        </div>
        <div className="mb-4">
          {/* Todo form goes here */}
          <AddTodo where="upcoming" />
          
        </div>
           <div className="flex flex-wrap gap-y-3">
           {todos.map((todo) => (
                <div key={todo.id} className={`${todo.upcoming?("w-full"):("h-0")}`}>
                  {
                    todo.upcoming ? (<Todos todo={todo} />):(null)
                  }
                   
                </div>
               ))}
          </div>
       {/* pending todo ends */}


       {/* completed todo starts  */}
       <div className="text-xl  text-center mb-8 mt-2 ">
          <div className="rounded-full w-3 h-3 bg-green-500 relative top-5 left-[21rem]"></div>
          Completed Stage
        </div>
        <div className="mb-4">
          {/* Todo form goes here */}
          <AddTodo where="completed" />
          
        </div>
           <div className="flex flex-wrap gap-y-3">
           {todos.map((todo) => (
                <div key={todo.id} className={`${todo.completed?("w-full"):("h-0")}`}>
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
