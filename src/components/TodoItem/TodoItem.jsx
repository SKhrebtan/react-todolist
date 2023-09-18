import { useState } from "react";
import { useSelector } from "react-redux";
import css from './TodoItem.module.css'

export const TodoItem = ({ todo, onDeleteTodo, id }) => {
    const [checkbox, setCheckbox] = useState(false);
    const isAllChecked = useSelector(state => state.deleteTodos.status)
    console.log(isAllChecked)
        const handleCheckbox = e => {
        setCheckbox(!checkbox)
    } 
  
    return (
        <li>
            <p className={checkbox || isAllChecked ? css.textDelete : ''}>{todo}</p>
            <label>
                <input type="checkbox" onChange={handleCheckbox} />
            </label>
            <button
                type="button"
                onClick={() => onDeleteTodo(id)}
                disabled={!checkbox}>Delete</button>
         </li>
     )
}