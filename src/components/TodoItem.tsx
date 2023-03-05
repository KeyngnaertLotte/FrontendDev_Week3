import { CheckCircle2, Circle } from 'lucide-react'
import { useState } from 'react';
import '../assets/styles/components/todo-item.scss'
import { iTodo } from '../interfaces/ITodo'


export default ({todo} : {todo: iTodo})  => {
    // TODO: i want props here
    // description, category, isDone, id
    let iconStart = todo.isDone ? <CheckCircle2 className='c-todo-item__check c-todo-item__check--done'/> : <Circle className='c-todo-item__check c-todo-item__check--undone'/>;

    const [icon, setIcon] = useState(iconStart);
    

    const checkStatus = () => {
        console.log('checkStatus')
        todo.isDone = !todo.isDone
        console.log(todo)
        if (todo.isDone) {
            setIcon(<CheckCircle2 className='c-todo-item__check c-todo-item__check--done'/>)
        } else {
            setIcon(<Circle className='c-todo-item__check c-todo-item__check--undone'/>)
        }

    }

    return(
        <li className="c-todo-item">
            <input className='c-todo-item__input' type="checkbox" id={todo.id} onChange={checkStatus}/>
            <label className='c-todo-item__label' htmlFor={todo.id}>{icon} </label>
            <div className='c-todo-item__text'>
                <label htmlFor={todo.id}>{todo.name}</label>
                <p>{todo.category}</p>
            </div>
        </li>
    )
}