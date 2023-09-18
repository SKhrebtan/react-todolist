import { TodoItem } from "components/TodoItem/TodoItem";
import css from './TodoList.module.css'

export const TodoList = ({ data,onDeleteTodo }) => {
 
    return (
        <ul className={css.list}>
            {data.map(({ todo, id }) => {
                return (
                    <TodoItem key={id} todo={todo} onDeleteTodo={onDeleteTodo} id={id} />
                )
            })}
        </ul>
    )
}