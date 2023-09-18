import { useState } from "react";
import { useDispatch } from "react-redux";
import { checkAll } from "components/redux/deleteAllTodosSlice/deleteAllTodosSlice";

export const DeleteAllTodos = ({ onDeleteAllTodos }) => {
    const [checkbox, setCheckbox] = useState(false);
    const dispatch = useDispatch();

    const handleCheckbox = () => {
        setCheckbox(!checkbox);
    }
    return (
        <label >
            <input
                type="checkbox"
                onChange={() => {
                    handleCheckbox();
                    dispatch(checkAll(checkbox));
                }}
                checked={checkbox}
            />
            <button
                type="button"
                disabled={!checkbox}
                onClick={() => onDeleteAllTodos()}
            >Delete all</button>
        </label>
    )
}