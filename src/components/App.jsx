import { useEffect, useState, useMemo } from "react";
import { Form } from "./Form/Form";
import { TodoList } from "./TodoList/TodoList";
import { FilterTodos } from "./FilterTodos/FilterTodos";
import { DeleteAllTodos } from "./DeleteAllTodos/DeleteAllTodos";
import { nanoid } from "nanoid";

function useLocalStorage(key, defaultValue ) {
  const [state, setState] = useState(() => JSON.parse(window.localStorage.getItem(key)) ?? defaultValue);

  useEffect(() => {
    return window.localStorage.setItem(key, JSON.stringify(state))
  }, [state, key])
  return [state, setState]
}

export const App = () => {
  const [todoList, setTodoList] = useLocalStorage("todos", []);
  const [filter, setFilter] = useState("");
  
  const addTodo = todo => {
    const newTodo = {
      todo,
      id: nanoid()
    }
    setTodoList([...todoList, newTodo])
  }

  const onDeleteTodo = id => {
    setTodoList(todoList.filter( item => item.id !== id))
  }

  const handleFilter = e => {
    setFilter(e.target.value)
  }

  const normalizedFilter = filter.toLowerCase().trim();

  const filteredTodos = useMemo(() => {
    return todoList.filter( item => item.todo.toLowerCase().includes(normalizedFilter))
  }, [normalizedFilter, todoList])

  const deleteAllTodos = () => {
    setTodoList([]);
  }
  return (
    <div>
      <Form onSubmit={addTodo} />
      <FilterTodos onChange={handleFilter} value={filter} />
      <TodoList data={filteredTodos} onDeleteTodo={onDeleteTodo} />
      {todoList.length > 0 && <DeleteAllTodos onDeleteAllTodos={deleteAllTodos} />}
    </div>
  );
};
