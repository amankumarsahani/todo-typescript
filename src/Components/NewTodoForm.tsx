import React,{useRef} from 'react'

const NewTodoForm:React.FC<{addNewTodo:(text:string)=>void}>=(props)=> {
  const inputHandler=useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const NewText = inputHandler.current!.value;
    if(NewText.trim().length===0){
      //throw error
      return;
    }
    props.addNewTodo(NewText);
  }


  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='name' className='labelName'>Add New Todo : </label>
      <input type='text' className='input-group mb-2' id='name' ref={inputHandler}/>
      <button className='btn btn-sm  btn-warning '>Add Todo</button>
    </form>
  )
}

export default NewTodoForm 
 