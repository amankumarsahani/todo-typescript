import todo from "../Models/Todo";
import TodoItems from "./TodoItems";

const Todos: React.FC<{ items: todo[];removeTodo:(id:string)=>void }> = (props) => {
  return (
    <div>
      <ul className="list-group list-group-flush lst mt-3">
        {
          (
            props.items.map((item) => <TodoItems key={item.id} text={item.text} removeTodo={props.removeTodo.bind(null,item.id)}/>)
          )}
      </ul>
    </div>
  );
};

export default Todos;
