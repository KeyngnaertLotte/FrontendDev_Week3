import { Plus } from 'lucide-react'
import { ChangeEvent, useState } from 'react'
import { iTodo } from '../interfaces/ITodo'

export default ({handleNewTodo} : {handleNewTodo: Function}) => {
    const [newTodo, setNewTodo] = useState<iTodo>({ name: '', category: 'work', isDone: false})
    const emptyTodo = () => {
        setNewTodo({ name: '', category: 'work', isDone: false})
    }
    const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!newTodo.name || !newTodo.category) return
        handleNewTodo(newTodo)
        console.log('add todo', newTodo)
        emptyTodo()
        console.log('HUH, welke todo?')
    }
    return(
        <form onSubmit={addTodo} className='flex items-center mb-8 gap-4 w-full'>
            <button className='shrink-0 w-8 h-8 hover:bg-neutral-100 flex items-center justify-center rounded-full focus:outline-none focus-visible:ring'>
                <Plus className='stroke-current text-neutral-700'/>
            </button>
            <div className='space-y-2 w-full'>
                <input className='p-2  w-full focus:outline-none focus-visible:ring' type="text" placeholder='Enter new task here' value={newTodo.name} onInput={e => setNewTodo({...newTodo, name: e.currentTarget.value})}/>
                <select className='w-full p-2 border border-neutral-200 rounded focus:outline-none focus-visible:ring' name="category" id="category" value={newTodo.category} onChange={(e: ChangeEvent<HTMLSelectElement>) => { setNewTodo({...newTodo, category: e.currentTarget.value})}}>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                </select>
            </div>
        </form>
    )
}