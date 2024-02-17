import { ItemProps } from "../models/Types";

export const updateItemById = (taskID : string, itemsArr: ItemProps[], categoryId: string) => {
    const value = itemsArr.map((task) => {
        if (task.id == taskID) {
            return {
                ...task,
                category: categoryId,
            }
        }
        return task;
    })
    console.log(value);
    return value;
}

export const deleteItemById = (taskId: string, itemsArr: ItemProps[]) :ItemProps[] => {
    const value = itemsArr.filter(task => task.id !== taskId);
    console.log(value);
    return value;
}

export const findItemByID = (taskId: string, itemsArr: ItemProps[]) : ItemProps => {
    const value : ItemProps  = itemsArr.find(task => task.id === taskId)!;
    console.log(value);
    return value;
}