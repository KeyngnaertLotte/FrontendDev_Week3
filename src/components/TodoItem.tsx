import { Check, CheckCircle2, Circle } from 'lucide-react'
import { useState } from 'react'
import { iTodo } from '../interfaces/ITodo'

export default ({ todo }: { todo: iTodo }) => {
  // TODO: i want props here
  // description, category, isDone, id
  let iconStart = todo.isDone ? (
    <CheckCircle2 className="" />
  ) : (
    <Circle className="" />
  )

  const [icon, setIcon] = useState(iconStart)

  const checkStatus = () => {
    console.log('checkStatus')
    todo.isDone = !todo.isDone
    console.log(todo)
    if (todo.isDone) {
      setIcon(<CheckCircle2 className="" />)
    } else {
      setIcon(<Circle className="" />)
    }
  }

  return (
    // class sr-only = visually hidden
    <li className="flex flex-row items-start gap-4">
      <input
        className="peer sr-only"
        type="checkbox"
        id={todo.name}
        onChange={checkStatus}
      />
      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-600 bg-neutral-100 ${ todo.isDone ? 'bg-blue-600' : ''}`}>
        <Check className={`stroke-current text-white`} />
      </span>
      {/* <label className='' htmlFor={todo.name}>{icon} </label> */}

      <div className="flex flex-col items-start">
        <label className="text-xl font-semibold" htmlFor={todo.name}>
          {todo.name}
        </label>
        <p className="text-neutral-400">{todo.category}</p>
      </div>
    </li>
  )
}
