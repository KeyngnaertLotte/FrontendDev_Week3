import { useState } from "react";

import '../assets/styles/components/header.scss'

export default () => {
    const [user, setUser] = useState('userName');
    const [todoCount, setTodoCount]  = useState(14);

    const printAmountOfTodos = () => {
        if (todoCount === 0) {
            return 'Good job, no todo\'s!'
        } else if (todoCount === 1){
            return 'You have 1 todo. Better start doing it!'
        }
        return `You have ${todoCount} todo's. Better start doing them!`
    }

    return(
        <header className="c-header">
            <h1 className="c-header__title">Hello, {user}</h1>
            <p className="c-header__subtitle">{printAmountOfTodos()}</p>
        </header>
    )
}

