import { TodoItem } from "./TodoItem";

export function TodoList(props) {
    const {
        todo, toggleTodo, deleteTodo
    } = props;
    return (
        <ul className="list">
        {todo.map(item => {
          return (
            <TodoItem 
                {...item}
                key={item.id}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>
    )
}