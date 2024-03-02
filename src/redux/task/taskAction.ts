import { ADD_TO_DO_TASK, ADD_DOING_TASK, ADD_DONE_TASK } from "./taskTypes";

const addTask = (category: string) => {
    console.log(category);
    let ADD_TASK = '';
    if(category == "1") ADD_TASK = ADD_TO_DO_TASK;
    else if(category == "2") ADD_TASK = ADD_DOING_TASK
    else if(category == "3") ADD_TASK = ADD_DONE_TASK

    return {
        type: ADD_TASK
    }
}