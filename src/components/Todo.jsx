import { useState } from "react";
import Button from "../shared/Button";
import Card from "../shared/Card";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";

function Todo({ todo }) {

  const { deleteHandler, setEditMode, setText, setTextID } = useContext(TodoContext);
  
  //set striker for text
  const [strike, setStrike] = useState(false);

  function strikeHandler() {
    {
      strike ? setStrike(false) : setStrike(true);
    }
  }

  function editHandler(id, text) {
    setText(todo.text)
    setTextID(todo.id)
    setEditMode(true)
  }


  return (
    <Card>
      <div className="small-container">
        <div className={strike ? "strike-through" : null}>{todo.text}</div>
        <Button onClick={strikeHandler} buttonClass="secondary">
          Done
        </Button>
        <Button
          onClick={() => {
            deleteHandler(todo.id, todo.text);
          }}
        >
          Delete
        </Button>
        <Button buttonClass="edit" onClick={editHandler}>Edit</Button>
      </div>
    </Card>
  );
}
export default Todo;
