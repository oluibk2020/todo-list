import { createContext, useState } from "react";
import todoList from "../data/todoList";

const TodoContext = createContext()


export const TodoProvider = ({children}) =>{
     const [todos, setTodo] = useState(todoList);

      function deleteHandler(id) {
        if (window.confirm("Are you sure?")) {
          setTodo(
            todos.filter((item) => {
              return item.id !== id;
            })
          );
        }
      }

      

       


    const contextObj = {
        todos,
        setTodo,
        deleteHandler,
    }


    return (<TodoContext.Provider value={contextObj}>
        {children}
    </TodoContext.Provider>)
}

export default TodoContext