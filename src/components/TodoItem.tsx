import { CheckCircle2, Circle } from 'lucide-react'
import '../assets/styles/components/todo-item.scss'
import { iTodo } from '../interfaces/ITodo'


export default ({todo} : {todo: iTodo})  => {
    // TODO: i want props here
    // description, category, isDone, id
    
    return(
        <li className="c-todo-item">
            <input className='c-todo-item__input' type="checkbox" id='check1' checked={todo.isDone} readOnly/>
            <label htmlFor="check1"><CheckCircle2/> <Circle/> {todo.name}</label>
            <p>{todo.category}</p>
        </li>
    )
}