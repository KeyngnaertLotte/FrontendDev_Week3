import { useState } from "react";

export default () => {
    const [user, setUser] = useState('Martyr');
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
        <header>
            <h1>Hello, {user}</h1>
            <p>{printAmountOfTodos()}</p>
        </header>
    )
}