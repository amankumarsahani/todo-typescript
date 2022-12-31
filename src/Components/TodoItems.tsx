const TodoItems: React.FC<{ text: string }> = (props) => {
    return (
        <li className="list-group-item">{props.text}</li>
    )
}

export default TodoItems
