import useLocalStorage from '../hooks/useLocalStorage'

import AddTodo from '../components/AddTodo'
import TodoItem from '../components/TodoItem'
import { iTodo } from '../interfaces/ITodo'
import { useEffect, useState } from 'react'
import AppHeader from '../components/AppHeader'


export default function Dashboard() {
  const { get, set } = useLocalStorage();
  const [todos, setTodos] = useState<iTodo[]>(get())
  
  useEffect(() => {
    set(todos.filter((t: iTodo) => !t.isDone))
  }, [todos])

  const addNewTodo = (t: iTodo) => {
    setTodos([t, ...todos])
  }

  const toggleTodo = (todo: iTodo) => {
    setTodos((currentTodos: iTodo[]) =>
      currentTodos.map((t: iTodo) => {
        if (t.id === todo.id) return { ...t, isDone: !t.isDone }
        return t
      }),
    )
  }

  const removeTodo = (todo: iTodo) => {
    setTodos((currentTodos: iTodo[]) => currentTodos.filter((t: iTodo) => t.id !== todo.id))
  }

  // TODO: when you click on a todo, it should be marked as done
  // TODO: after 3s the todo should be removed from the list
  // TODO: keep track of the todo's in localstorage

  // TODO: settings

  return (
    <main className="px-12">
      <AppHeader todoCount={todos.filter((t: iTodo) => !t.isDone).length} />
      <AddTodo handleNewTodo={addNewTodo} />
      <ul className="flex flex-col align-middle justify-center gap-y-4">
        {todos.map((todo: iTodo) => (
          <TodoItem key={todo.id} todo={todo} toggle={toggleTodo} remove={removeTodo} />
        ))}
      </ul>
    </main>
  )
}
