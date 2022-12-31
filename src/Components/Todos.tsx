import todo from "../Models/Todo";
import TodoItems from "./TodoItems";

const Todos: React.FC<{ items: todo[] }> = (props) => {
  return (
    <div>
      <ul className="list-group list-group-flush lst mt-3">
        {
          (
            props.items.map((item) => <TodoItems key={item.id} text={item.text} />)
          )}
      </ul>
    </div>
  );
};

export default Todos;
