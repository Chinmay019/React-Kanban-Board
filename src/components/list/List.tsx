import { Item } from "../item/Item";
import "./List.css";
import { ItemProps } from "../../models/Types";
import { Droppable } from "react-beautiful-dnd";
// import { getTasks, deleteTask } from '../../service/Actions';

interface BoardProps {
    title: string,
    category: string,
    items: ItemProps[],
}


export const List = (props: BoardProps) => {
    // const ItemList = props.items;
    // const [isModified, setIsModified] = useState(false);
    // const [todoTasks, setToDoTasks] = useState<ItemProps[] | null>(null);
    // const [doingTasks, setDoingTasks] = useState<ItemProps[] | null>(null);
    // const [doneTasks, setDoneTasks] = useState<ItemProps[] | null>(null);
    // let itemDragged: EventTarget;
    // useEffect(() => {
    //     // setToDoTasks(fetchFilteredTasks("1"));
    //     // setDoingTasks(fetchFilteredTasks("2"));
    //     // setDoneTasks(fetchFilteredTasks("3"));
    //     console.log("inside useEffect");
    //     console.log(ItemList);
    //     return () => {
    //         console.log("inside cleanup");
    //         setIsModified(false);
    //     }
    // }, [isModified]);

    // const removeElement = (id: string) => {
    //     console.log(id);
    //     const elem = document.getElementById(id);
    //     console.log(elem);
    //     return elem?.parentNode?.removeChild(elem);
    // }

    // const handleOnDragOver = (e: React.DragEvent) => {
    //     e.preventDefault();
    // }

    // const handleOnDrag = (e: React.DragEvent, id: string) => {
    //     console.log("dragging started");
    //     console.log(id);
    //     // itemDragged = e.target;
    //     e.dataTransfer.setData("id", id);
    // }

    // const handleOnDrop = (e: React.DragEvent, targetCategory: string) => {
    //     const draggedElementId = e.dataTransfer.getData("id") as string;
    //     ItemList.forEach(item => {
    //         if (item.id == draggedElementId && item.category === targetCategory) {
    //             return;
    //         } else if (item.id == draggedElementId && item.category != targetCategory) {
    //             const classes = e.target.className;
    //             if (classes.includes("dropzone")) {
    //                 item.category = targetCategory;
    //                 removeElement(draggedElementId);
    //                 // setIsModified(true);
    //             }
    //         }
    //     })
    // }

    // const deleteTask = (taskId: string) => {
    //     removeElement(taskId);
    //     // setIsModified(true);
    // }

    // const fetchFilteredTasks = (cat: string): ItemProps[] | null => {
    //     const items = ItemList?.filter(item => {
    //         if (item.category == cat) {
    //             return item;
    //         }
    //     });
    //     return items;
    // }

    return (
        <div className="overflow-auto">
            <div className="container">
                <div className="card list-column">
                    <div className="card-header p-1">
                        <h3 className="list-header text-2xl">
                            { props.title }
                        </h3>
                    </div>
                    <div className="card-body">

                        <Droppable droppableId={ props.category }>
                            { (provided, snapshot) => {
                                return (
                                <div
                                    ref={ provided.innerRef }
                                    { ...provided.droppableProps }
                                    isdraggingover={ snapshot.isDraggingOver.toString() }
                                >
                                    { props.items?.map(task => (
                                            <Item key={ task.id } item={ task } />
                                    )) }
                                    { provided.placeholder }
                                </div>
                                )
                            } }
                        </Droppable>
                    </div>
                    {/* <div className="card-body dropzone" onDragOver={ handleOnDragOver } onDrop={ (e) => handleOnDrop(e, props.category) }>
                        { props.items?.map(task => (
                            <div onDragStart={ (e) => handleOnDrag(e, task.id) } onDragOver={ handleOnDragOver }>
                                <Item key={ task.id } item={ task } deleteTask={ deleteTask } />
                            </div>
                        )) }
                        {/* { doingTasks?.map(task => (
                            <div onDragStart={ (e) => handleOnDrag(e, task.id) } onDragOver={ handleOnDragOver }>
                                <Item key={ task.id } item={ task } deleteTask={ deleteTask } />
                            </div>
                        )) }
                        { props.category == "3" && doneTasks?.map(task => (
                            <div onDragStart={ (e) => handleOnDrag(e, task.id) } onDragOver={ handleOnDragOver }>
                                <Item key={ task.id } item={ task } deleteTask={ deleteTask } />
                            </div>
                        )) }
                    </div> */}
                </div>
            </div>
        </div>
    )
}