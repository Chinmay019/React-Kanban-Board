// import React from 'react';
import { Item } from "../item/Item";
import "./List.css";
import { ItemProps } from "../../models/Types";

type BoardProps = {
    title: string,
    category: string
}

const ItemList: Array<ItemProps> = [
    {
        id: "1",
        title: "Item 1",
        description: "Description 1",
        category: "1"
    },
    {
        id: "2",
        title: "Item 2",
        description: "Description 2",
        category: "2"
    },
    {
        id: "3",
        title: "Item 3",
        description: "Description 3",
        category: "3"
    },
    {
        id: "4",
        title: "Item 4",
        description: "Description 4",
        category: "1"
    },
];

const fetchFilteredTasks = (cat: string): ItemProps[] => {
    const items = ItemList.filter(item => {
        if (item.category == cat) {
            return item;
        }
    });
    return items;
}

const handleOnDrag = (e: React.DragEvent, id: string)  => {
    console.log("dragging started");
    console.log(id);
    e.dataTransfer.setData("id", id);
}

const handleOnDrop = (e: React.DragEvent, targetCategory: string) => {
    const data = e.dataTransfer.getData("id") as string;
    console.log(data);
    console.log("dragging stopped");
    console.log(targetCategory);
}

const handleOnDragOver = (e: React.DragEvent) => {
    e.preventDefault();
}

export const List = (props: BoardProps) => {
    const todoTasks = fetchFilteredTasks("1");
    const doingTasks = fetchFilteredTasks("2");
    const doneTasks = fetchFilteredTasks("3");
    return (
        <>
            <div className="container" draggable onDrop={(e) => handleOnDrop(e, props.category)}>
                <div className="card list-column">
                    <div className="card-header p-1">
                        <h3 className="list-header text-2xl">
                            { props.title }
                        </h3>
                    </div>
                    <div className="card-body">
                        { props.category == "1" && todoTasks.map(task => (
                            <div onDragStart={(e) => handleOnDrag(e, task.id)} onDragOver={ handleOnDragOver }>
                                <Item key={ task.id } id={ task.id } title={ task.title } description={ task.description } category={ task.category } />
                            </div>
                        )) }
                        { props.category == "2" && doingTasks.map(task => (
                            <div onDragStart={(e) => handleOnDrag(e, task.id)} onDragOver={handleOnDragOver}>
                                <Item key={ task.id } id={ task.id } title={ task.title } description={ task.description } category={ task.category } />
                            </div>
                        )) }
                        { props.category == "3" && doneTasks.map(task => (
                            <div onDragStart={(e) => handleOnDrag(e, task.id)} onDragOver={handleOnDragOver}>
                                <Item key={ task.id } id={ task.id } title={ task.title } description={ task.description } category={ task.category } />
                            </div>
                        )) }
                    </div>
                </div>
            </div>
        </>
    )
}