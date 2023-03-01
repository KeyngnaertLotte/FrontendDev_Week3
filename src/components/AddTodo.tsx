import { Plus } from 'lucide-react'
import '../assets/styles/components/form.scss'

export default () => {
    return(
        <form className='c-form'>
            <button className='o-button-reset'><Plus /></button>
            <input className='c-input' type="text" placeholder='Enter new task here' />
            <select className='c-select' name="category" id="category">
                <option value="work">Work</option>
                <option value="personal">Personal</option>
            </select>
        </form>
    )
}