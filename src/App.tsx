import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { TodoContainer } from "./components/TodoContainer";
import { useTodo } from "./hooks/useTodo"

function App() {

  const { addTodo, toggleTodoCompleted, filteredTodos, clearCompleted, setFilter, filter, removeTodo } = useTodo();

  return (
    <>
      <TodoContainer>
        <TodoForm addTodo={addTodo}></TodoForm>
        <TodoList todoList={filteredTodos} toggleTodoCompleted={toggleTodoCompleted} setFilter={setFilter} filter={filter} clearCompleted={clearCompleted} removeTodo={removeTodo}> </TodoList>
      </TodoContainer>
    </>
  )
}

export default App
