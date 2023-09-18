import { useState } from "react"

export const Form = ({onSubmit}) => {
    const [todo, setTodo] = useState('');
    const handleInput = (e) => {
        setTodo(e.target.value);
           }
    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(todo);
        reset();
    }
     const reset = () => {
      setTodo('');      
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                New todo
                <input
                    type="text"
                    name="todo"
                    value={todo}
                    onChange={handleInput}
                />
            </label>
            <button type="submit">Add todo</button>
        </form>
    )
}