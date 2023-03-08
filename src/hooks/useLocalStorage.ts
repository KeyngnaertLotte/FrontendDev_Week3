import { iTodo } from "../interfaces/ITodo";

export default () => {
    const key = 'todos';
    const get = () => localStorage.getItem(key) ? JSON.parse(localStorage.todos) : [];
    const set = (payload: iTodo[]) => localStorage.setItem(key, JSON.stringify(payload));

    // const remove = () => localStorage.removeItem(key);

    return { get, set };
}