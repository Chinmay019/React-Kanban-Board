import { Item } from "../item/Item";
import "./List.css";
import { ItemProps } from "../../models/Types";
import React, { useEffect, useState } from "react";
// import { getTasks } from "../../service/Actions";

type BoardProps = {
    title: string,
    category: string,
    items: ItemProps[],
    // setItemProps: React.Dispatch<React.SetStateAction<any>>,
    setItemProps: (params : unknown) => void
}


export const List = (props: BoardProps) => {
    const ItemList = props.items;
    const [isModified, setIsModified] = useState(false);
    const [todoTasks, setToDoTasks] = useState<ItemProps[] | null>(null);
    const [doingTasks, setDoingTasks] = useState<ItemProps[] | null>(null);
    const [doneTasks, setDoneTasks] = useState<ItemProps[] | null>(null);
    let itemDragged: EventTarget;
    useEffect(() => {
        setToDoTasks(fetchFilteredTasks("1"));
        setDoingTasks(fetchFilteredTasks("2"));
        setDoneTasks(fetchFilteredTasks("3"));
        console.log("inside useEffect");
        console.log(ItemList);
        return () => {
            console.log("inside cleanup");
            setIsModified(false);
        }
    }, [isModified]);

    const removeElement = (id: string) => {
        console.log(id);
        const elem = document.getElementById(id);
        console.log(elem);
        return elem?.parentNode?.removeChild(elem);
    }

    const handleOnDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    }

    const handleOnDrag = (e: React.DragEvent, id: string) => {
        console.log("dragging started");
        console.log(id);
        itemDragged = e.target;
        e.dataTransfer.setData("id", id);
    }

    const handleOnDrop = (e: React.DragEvent, targetCategory: string) => {
        const draggedElementId = e.dataTransfer.getData("id") as string;
        console.log(draggedElementId);
        const classes = e.target.className;
        console.log(classes, typeof classes === "string");
        if (classes.includes("dropzone")) {
            console.log(itemDragged);
            // e.target.appendChild(itemDragged);
            removeElement(draggedElementId);
            setIsModified(true);
        }
        ItemList?.forEach(item => {
            if (item.id == draggedElementId) {
                item.category = targetCategory;
            }
        })
        console.log("dragging stopped");
        console.log(targetCategory);
        console.log(ItemList);
    }

    const fetchFilteredTasks = (cat: string): ItemProps[] | null => {
        const items = ItemList?.filter(item => {
            if (item.category == cat) {
                return item;
            }
        });
        return items;
    }

    return (
        <>
            <div className="container">
                <div className="card list-column">
                    <div className="card-header p-1">
                        <h3 className="list-header text-2xl">
                            { props.title }
                        </h3>
                    </div>
                    <div className="card-body dropzone" onDragOver={ handleOnDragOver } onDrop={ (e) => handleOnDrop(e, props.category) }>
                        { props.category == "1" && todoTasks?.map(task => (
                            <div onDragStart={ (e) => handleOnDrag(e, task.id) } onDragOver={ handleOnDragOver }>
                                <Item key={ task.id } id={ task.id } title={ task.title } description={ task.description } category={ task.category } />
                            </div>
                        )) }
                        { props.category == "2" && doingTasks?.map(task => (
                            <div onDragStart={ (e) => handleOnDrag(e, task.id) } onDragOver={ handleOnDragOver }>
                                <Item key={ task.id } id={ task.id } title={ task.title } description={ task.description } category={ task.category } />
                            </div>
                        )) }
                        { props.category == "3" && doneTasks?.map(task => (
                            <div onDragStart={ (e) => handleOnDrag(e, task.id) } onDragOver={ handleOnDragOver }>
                                <Item key={ task.id } id={ task.id } title={ task.title } description={ task.description } category={ task.category } />
                            </div>
                        )) }
                    </div>
                </div>
            </div>
        </>
    )
}