import { useState, useEffect } from "react";
import { List } from "../list/List";
import { ItemProps } from "../../models/Types";
import "./Board.css";
import { DragDropContext } from 'react-beautiful-dnd';
import { deleteItemById, findItemByID } from '../../utils/helper';

const initial: Array<ItemProps> = [
    {
        index: 1,
        id: "1",
        title: "Item 1",
        description: "Description 1",
        category: "1",
    },
    {
        index: 3,
        id: "2",
        title: "Item 2",
        description: "Description 2",
        category: "2",
    },
    {
        index: 4,
        id: "3",
        title: "Item 3",
        description: "Description 3",
        category: "3",
    },
    {
        index: 2,
        id: "4",
        title: "Item 4",
        description: "Description 4",
        category: "1",
    },
];
export default function Board () {
    // const [ItemList, setItemList] = useState<ItemProps[]>(initial);
    const [todoTasks, setTodoTasks] = useState<ItemProps[]>([]);
    const [doingTasks, setDoingTasks] = useState<ItemProps[]>([]);
    const [doneTasks, setDoneTasks] = useState<ItemProps[]>([]);

    useEffect(() => {
        setTodoTasks(() => {
            return initial.filter(task => task.category === "1");
        })
        setDoingTasks(() => {
            return initial.filter(task => task.category === "2");
        })
        setDoneTasks(() => {
            return initial.filter(task => task.category === "3");
        })
    }, [])

    const handleDragEnd = (result: any) => {
        const { source, destination, draggableId } = result;
        if (destination.droppableId === source.droppableId) return;

        //  remove from existing list

        // remove from to-do list
        if (source.droppableId == "1") {
            setTodoTasks(deleteItemById(draggableId, todoTasks));
        }
        // remove from doing list
        if (source.droppableId == "2") {
            setDoingTasks(deleteItemById(draggableId, doingTasks));
        }
        // remove from done list 
        if (source.droppableId == "3") {
            setDoneTasks(deleteItemById(draggableId, doneTasks));
        }

        // get particular task that is modified
        const modifiedTask = findItemByID(draggableId, [...todoTasks, ...doingTasks, ...doneTasks]);

        // add new item to destination list

        // add into to-do list 
        if (destination.droppableId === '1') {
            setTodoTasks([...todoTasks, { ...modifiedTask, category: destination.droppableId }]);
        }
        // add into doing list
        if (destination.droppableId === "2") {
            setDoingTasks([...doingTasks, { ...modifiedTask, category: destination.droppableId }])
        }
        //  add into done list
        if (destination.droppableId === "3") {
            setDoneTasks([...doneTasks, { ...modifiedTask, category: destination.droppableId }])
        }


    }

    return (
        <DragDropContext onDragEnd={ handleDragEnd }>
            <div className="container m-4 grid gap-2 sm:grid-cols-3 box-border">
                <div className="min-h-[100px] rounded-lg min-w-[150px]">
                    <List title="To-Do" category="1" items={ todoTasks } />
                </div>
                <div className="min-h-[100px] rounded-lg min-w-[150px]">
                    <List title="Doing" category="2" items={ doingTasks } />
                </div>
                <div className="min-h-[100px] rounded-lg min-w-[150px]">
                    <List title="Done" category="3" items={ doneTasks } />
                </div>
            </div>
        </DragDropContext>
    )
}