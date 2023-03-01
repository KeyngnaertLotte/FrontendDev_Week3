import { CheckCircle2, Circle } from 'lucide-react'
import '../assets/styles/components/list.scss'

export default () => {
    // TODO: i want props here
    // description, category, isDone, id
    
    return(
    <>
        <li className="c-list">
            <input type="checkbox" id='check1'/>
            <label htmlFor="check1"><CheckCircle2/> <Circle/> Labo bekijken</label>
        </li>
        <li className="c-list">
            <input type="checkbox" id='check2'/>
            <label htmlFor="check2"><CheckCircle2/> <Circle/> Labo bekijken</label>
        </li>
    </>
    )
}