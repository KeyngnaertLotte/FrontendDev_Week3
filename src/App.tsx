import { useState } from "react"
import AddTodo from "./components/AddTodo"
import AppFooter from "./components/AppFooter"
import AppHeader from "./components/AppHeader"
import TodoItem from "./components/TodoItem"
import { iTodo } from "./interfaces/ITodo"



function App() {
  const [todos, setTodos] = useState<iTodo[]>([
    {id: "1", name: "Learn React", category: "Learning", isDone: false},
    {id: "2", name: "Learn Typescript", category: "Learning", isDone: true},
    {id: "3", name: "Learn Redux", category: "Learning", isDone: false},
  ])

  const addNewTodo = (t: iTodo) => {
    setTodos([t, ...todos])
  }



  return (
    <div className="o-container">
    <AppHeader/>
    <AddTodo handleNewTodo={addNewTodo}/>

    <ul>
      {todos.map((todo: iTodo) => <TodoItem todo={todo}/>)}
    </ul>
    <AppFooter/>
    </div>
  )

}

export default App; 
