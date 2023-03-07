import AddTodo from "../components/AddTodo";
import TodoItem from "../components/TodoItem";
import { iTodo } from "../interfaces/ITodo";
import { useState } from "react"
import AppHeader from "../components/AppHeader";

export default function Dashboard() {
    const [todos, setTodos] = useState<iTodo[]>([
        {id: "1", name: "Learn React", category: "Learning", isDone: false},
        {id: "2", name: "Learn Typescript", category: "Learning", isDone: true},
        {id: "3", name: "Learn Redux", category: "Learning", isDone: false},
      ])
    
      const addNewTodo = (t: iTodo) => {
        setTodos([t, ...todos])
      }


    return (
        <main className="px-12">  
            <AppHeader/>  
            <AddTodo handleNewTodo={addNewTodo}/>
            <ul className="flex flex-col gap-y-4">
                {todos.map((todo: iTodo) => <TodoItem todo={todo}/>)}
            </ul>
        </main>
    );
}