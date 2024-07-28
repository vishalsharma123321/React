import {creatContext , useContext} from 'react'

export  const TodoContext  = creatContext({
    todos:[
        {
        id:1,
        todo:"todo msg",
        completed:false,
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
});

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Todoprovider;