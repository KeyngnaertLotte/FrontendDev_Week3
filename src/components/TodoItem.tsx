import { Check } from 'lucide-react'
import { useState } from 'react'
import { iTodo } from '../interfaces/ITodo'

export default ({
  todo,
  toggle,
  remove,
}: {
  todo: iTodo
  toggle: Function
  remove: Function
}) => {
  // TODO: i want props here
  // description, category, isDone, id
  const [timeOutId, setTimeOutId] = useState<number | undefined>()

  const handleToggle = () => {
    if (timeOutId) clearTimeout(timeOutId)
    toggle(todo)

    if (!todo.isDone) {
      const id = setTimeout(() => {
        remove(todo)
        setTimeOutId(undefined) //better safe than sorry
      }, 3000)

      setTimeOutId(id)
    }
  }

  return (
    // class sr-only = visually hidden
    <li>
      
      <label
        htmlFor={todo.id}
        className="flex items-center gap-4 transition-opacity duration-200 peer-checked:opacity-30 "
      >
        <input
        className="peer sr-only"
        type="checkbox"
        id={todo.id}
        onChange={handleToggle}
        defaultChecked={todo.isDone}
      />
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-600  ${
            todo.isDone ? 'bg-blue-600' : 'bg-neutral-100'
          } peer-focus-visible:ring`}
        >
          <Check className={`stroke-current text-neutral-100`} />
        </span>

        <div className="flex flex-col items-start">
          <p className="text-xl font-semibold">{todo.name}</p>
          <p className="text-neutral-400">{todo.category}</p>
        </div>
      </label>
    </li>
  )
}
