import { ADD_TODO, CHECK_TODO, FILTER_NOTDONE,FILTER_DONE} from "../actionsTypes/actionsTypes"

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

export const filter_not=()=>{
    return {
        type:FILTER_NOTDONE,
    }
}
export const filter_done=()=>{
    return {
        type:FILTER_DONE,
    }
}