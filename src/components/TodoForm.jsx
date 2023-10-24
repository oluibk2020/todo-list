import FormList from "./FormList";
import FormStats from "./FormStats";
import Card from "../shared/Card";
import Button from "../shared/Button";
import { useState } from "react";
import { v4 } from "uuid";
import { motion } from "framer-motion";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";

function TodoForm() {
  const [text, setText] = useState("");
  const { todos, setTodo } = useContext(TodoContext);

  const [typing, setTyping] = useState(false);

  function textHandler(e) {
    setTyping(true);
    setText(e.target.value);
    setTimeout(() => {
      setTyping(false);
    }, 2000);
  }

  function submitHandler(e) {
    e.preventDefault();

    if (text.trim() !== "") {
      let obj = { text: text };
      obj.id = v4();
      setTodo([obj, ...todos]);
      setText("");
    } else {
      alert("Please enter a Task");
    }
  }

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 5,
      },
    },
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <Card>
        <FormStats />

        <form onSubmit={submitHandler}>
          <h2>Create Your Todo Here</h2>
          <div className="input-group">
            <input
              onChange={textHandler}
              type="text"
              placeholder="Write your to do here"
              value={text}
            />
            <Button>Send</Button>
          </div>
          <div>{typing ? "you are typing" : null}</div>
        </form>
      </Card>
      <FormList />
    </motion.div>
  );
}
export default TodoForm;
