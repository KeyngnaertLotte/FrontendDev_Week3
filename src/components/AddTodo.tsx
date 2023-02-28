import { Plus } from 'lucide-react'

export default () => {
    return(
        <form>
            <button ><Plus /></button>
            <input type="text" />
            <select name="category" id="category">
                <option value="work">Work</option>
                <option value="personal">Personal</option>
            </select>
        </form>
    )
}