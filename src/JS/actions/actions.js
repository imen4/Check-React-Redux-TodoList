import { ADD_TODO, CHECK_TODO,EDIT_TODO} from "../actionsTypes/actionsTypes"

export const add=(newTask)=>{
    return {
        type:ADD_TODO,
        payload:{
            id:Math.random(),
            description:newTask,
            isDone:false
        }
    }
}

export const check=(id)=>{
    return {
        type:CHECK_TODO,
        payload:id
    }
}
export const edit=(id,newEdit)=>{
    return {
        type:EDIT_TODO,
        payload:{
            id:id,
            description:newEdit
        }
    }
}

