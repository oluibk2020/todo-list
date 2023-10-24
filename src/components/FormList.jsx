import Todo from "./Todo";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";

function FormList() {
  const {deleteHandler, todos} = useContext(TodoContext)
  return (
    <AnimatePresence>
      <div>
        {todos.map((todo) => {
          return (
            <motion.div
              key={todo.id}
              transition={{ duration: 3 }}
              exit={{ opacity: 0 }}
              layout
            >
              <Todo deleteHandler={deleteHandler} key={todo.id} todo={todo} />
            </motion.div>
          );
        })}
      </div>
    </AnimatePresence>
  );
}
export default FormList;
