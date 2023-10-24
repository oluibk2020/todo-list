import { useContext } from "react"
import TodoContext from "../context/TodoContext"

function FormStats() {
  const {todos} = useContext(TodoContext)
  
  return (
    <div>Task count: {todos.length}</div>
  )
}
export default FormStats