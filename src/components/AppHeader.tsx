import { SettingsIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Settings from "../routes/Settings";


export default ({todoCount}: {todoCount: number}) => {
    const [user, setUser] = useState('userName');
    // const [todoCount, setTodoCount]  = useState(14);

    const printAmountOfTodos = () => {
        if (todoCount === 0) {
            return 'Good job, no todo\'s!'
        } else if (todoCount === 1){
            return 'You have 1 todo. Better start doing it!'
        }
        return `You have ${todoCount} todo's. Better start doing them!`
    }

    return(
        <header className="py-12 flex items-center justify-between">
            <div className="flex  flex-col">
            <h1 className="text-4xl font-bold ">Hello{user ? `, ${user}` : ``}</h1>
            <p className=" text-lg text-neutral-500">{printAmountOfTodos()}</p>
            </div>

            <Link to={'/settings'} className="rounded-full bg-neutral-100 p-4 text-neutral-300 hover:text-neutral-600 focus:outline-none focus-visible:ring"> 
                <SettingsIcon/>
            </Link>
        </header>
    )
}

