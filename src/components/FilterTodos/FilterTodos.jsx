
export const FilterTodos = ({ onChange, value }) => {
    return (
        <label>
            Filter by value
            <input
                type="text"
                value={value}
                onChange={onChange}
            />
         </label>
     )
}