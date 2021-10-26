import "./App.css";
import {TodoCounter} from "./components/TodoCounter/TodoCounter";
import {TodoSearch}  from "./components/TodoSearch/TodoSearch";
import {TodoList} from "./components/TodoList/TodoList";
import {TodoItem} from "./components/TodoItem/TodoItem";


function App() {
  const todos = [
    { text: "Cortar cebolla", completed: false },
    { text: "Hacer Ejercicio", completed: false },
    { text: "llorar por no entender nada", completed: false },
  ];
  return (
    <>
      <TodoCounter />
   
      <TodoSearch /> 
  
     <TodoList> 
        {todos.map(todo => 
        <TodoItem text={todo.text} />
        )} 
    </TodoList> 

 {/*   <CreateTodoButton />  */}
      <button>+</button>
    </>
  );
}

export default App;
