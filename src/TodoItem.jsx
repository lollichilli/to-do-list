export function TodoItem(props) {
    const {
        completed, title, id, toggleTodo, deleteTodo
    } = props;
    return (
        <li>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={e => toggleTodo(id, e.target.checked)}  
          />
          {title}
        </label>
        <button
          className="btn btn-delete"

          // if we write onClick={deleteTodo(item.id)}, this means we pass the result of calling the deleteTodo
          // so whenever we click add, it will delete the todo right away 

          onClick={() => deleteTodo(id)}
        >
          Delete
        </button>
      </li>
    )
}