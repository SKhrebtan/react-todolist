import { TodoItem } from "components/TodoItem/TodoItem";


export const TodoList = ({ data,onDeleteTodo }) => {
 
    return (
        <ul>
            {data.map(({ todo, id }) => {
                return (
                    <TodoItem key={id} todo={todo} onDeleteTodo={onDeleteTodo} id={id} />
                )
            })}
        </ul>
    )
}