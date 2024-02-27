import { useState, useEffect } from "react";
import { List } from "../list/List";
import { ItemProps } from "../../models/Types";
import "./Board.css";
import { DragDropContext } from 'react-beautiful-dnd';
import { deleteItemById, findItemByID } from '../../utils/helper';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "../modal/CustomModal";
import CustomModal from "../modal/CustomModal";

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
    const [showAddModal, setShowAddModal] = useState(false);
    const [categoryClicked, setCategoryClicked] = useState('');

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
        if (!result.destination) return;
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
            <div className="main-board">
                <div className="container grid gap-2 sm:grid-cols-3 box-border mt-6">
                    <div className="flex justify-content-center">
                        <button className="btn btn-outline-primary rounded-full" aria-label="Add To-Do Task" title="Add To-Do Task" onClick={ () => {
                            setShowAddModal(true);
                            setCategoryClicked("1");
                        } }>
                            <FontAwesomeIcon icon={ faCirclePlus } />
                        </button>
                    </div>
                    <div className="flex justify-content-center" aria-label="Add Doing Task" title="Add Doing Task">
                        <button className="btn btn-outline-warning rounded-full" onClick={ () => {
                            setShowAddModal(true);
                            setCategoryClicked("2");
                        } }>
                            <FontAwesomeIcon icon={ faCirclePlus } />
                        </button>
                    </div>
                    <div className="flex justify-content-center" aria-label="Add Done Task" title="Add Done Task">
                        <button className="btn btn-outline-success rounded-full" onClick={ () => {
                            setShowAddModal(true);
                            setCategoryClicked("3");
                        } }>
                            <FontAwesomeIcon icon={ faCirclePlus } />
                        </button>
                    </div>
                </div>
                <div className="container grid gap-2 sm:grid-cols-3 box-border px-3 py-6">
                    <div className="min-h-[100px] rounded-lg min-w-[150px]">
                        <List title="To-Do" category="1" items={ todoTasks } index={ 1 } />
                    </div>
                    <div className="min-h-[100px] rounded-lg min-w-[150px]">
                        <List title="Doing" category="2" items={ doingTasks } index={ 2 } />
                    </div>
                    <div className="min-h-[100px] rounded-lg min-w-[150px]">
                        <List title="Done" category="3" items={ doneTasks } index={ 3 } />
                    </div>
                    <CustomModal show={ showAddModal } close={ () => setShowAddModal(false) } category={ categoryClicked } operation="add" />
                </div>
            </div>
        </DragDropContext>
    )
}