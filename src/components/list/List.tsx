import { Item } from "../item/Item";
import "./List.css";
import { ItemProps } from "../../models/Types";
import { Droppable } from "react-beautiful-dnd";

interface BoardProps {
    title: string,
    category: string,
    items: ItemProps[],
}


export const List = (props: BoardProps) => {
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
                </div>
            </div>
        </div>
    )
}