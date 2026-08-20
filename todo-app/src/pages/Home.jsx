import { useState } from "react";
import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";

function Home({ todos, onAdd, onToggle, onDelete }) {
  const [filter, setFilter] = useState("all");

  const visibleTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.done;
    if (filter === "completed") return todo.done;
    return true;
  });

  return (
    <div>
      <AddTodoForm onAdd={onAdd} />
      {/* We apply class logic to indicate the selected filter[cite: 1] */}
      <div className="filters">
        <button 
          onClick={() => setFilter("all")}
          style={filter === "all" ? { borderColor: "#fff", color: "#fff" } : {}}
        >all</button>
        <button 
          onClick={() => setFilter("active")}
          style={filter === "active" ? { borderColor: "#fff", color: "#fff" } : {}}
        >active</button>
        <button 
          onClick={() => setFilter("completed")}
          style={filter === "completed" ? { borderColor: "#fff", color: "#fff" } : {}}
        >completed</button>
      </div>
      <TodoList
        todos={visibleTodos}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    </div>
  );
}

export default Home;