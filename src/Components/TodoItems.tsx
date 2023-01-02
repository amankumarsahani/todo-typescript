const TodoItems: React.FC<{ text: string;removeTodo:()=>void }> = (props) => {
    return (
        <li className="list-group-item" onClick={props.removeTodo}>{props.text}</li>
    )
}

export default TodoItems
