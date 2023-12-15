import {Todo} from "../../types/gloableTypes"; 
const addTo =(todo:Todo)=>{
    console.log(todo)
  return  (
      {  type:"ADD_TODO",
        payload:todo}
  )
  }

    
    const deleteTodo=(todo:Todo)=>(
        {
            type:"DELETE_TODO",
            payload:todo
        }
    )
    
    export {deleteTodo,addTo}