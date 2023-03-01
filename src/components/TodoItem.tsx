import { CheckCircle2, Circle } from 'lucide-react'
import '../assets/styles/components/todo-item.scss'

export default ({name, category, isDone} : {name: string, category: string, isDone: boolean})  => {
    // TODO: i want props here
    // description, category, isDone, id
    
    return(
        <li className="c-todo-item">
            <input type="checkbox" id='check1'/>
            <label htmlFor="check1"><CheckCircle2/> <Circle/> {name}</label>
            <p>{category}</p>
        </li>
    )
}