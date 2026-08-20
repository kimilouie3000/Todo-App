function TodoItem({ todo, onToggle, onDelete }) {
  // We keep the logic for standard guide requirements, but move style control to CSS
  // and minimal conditional class logic[cite: 1].
  return (
    <li>
      <span
        style={{
          textDecoration: todo.done ? "line-through" : "none",
          cursor: "pointer",
          opacity: todo.done ? 0.5 : 1 // Minor visual change in JS[cite: 1]
        }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;