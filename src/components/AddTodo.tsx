import { Plus } from 'lucide-react'
import { ChangeEvent, useState } from 'react'
import '../assets/styles/components/add-todo.scss'
import { iTodo } from '../interfaces/ITodo'

export default ({handleNewTodo} : {handleNewTodo: Function}) => {
    const [newTodo, setNewTodo] = useState<iTodo>({ name: '', category: 'work', isDone: false})
    const emptyTodo = () => {
        setNewTodo({ name: '', category: 'work', isDone: false})
    }
    const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!newTodo.name || !newTodo.category) return
        console.log('add todo', newTodo)
        emptyTodo()
        console.log('HUH, welke todo?')
    }
    return(
        <form onSubmit={addTodo} className='c-add-todo'>
            <button className='o-button-reset c-add-todo__button'><Plus className='c-add-todo__icon'/></button>
            <div>
            <input className='c-add-todo__input' type="text" placeholder='Enter new task here' value={newTodo.name} onInput={e => setNewTodo({...newTodo, name: e.currentTarget.value})}/>
            <select className='c-add-todo__select' name="category" id="category" value={newTodo.category} onChange={(e: ChangeEvent<HTMLSelectElement>) => { setNewTodo({...newTodo, category: e.currentTarget.value})}}>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
            </select>
            </div>
        </form>
    )
}