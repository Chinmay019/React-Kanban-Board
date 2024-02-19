import { Item } from "../item/Item";
import "./List.css";
import { ItemProps } from "../../models/Types";
import { Droppable } from "react-beautiful-dnd";

interface BoardProps {
    title: string,
    category: string,
    items: ItemProps[],
    index?: number
}


export const List = (props: BoardProps) => {
    let classCSS : string = '';
    switch (props.category) {
        case "1": classCSS = "to-do-column";
                    break;
        case "2": classCSS = "doing-column";
                    break;
        case "3": classCSS = "done-column";
                    break;
        default: break;
    }

    console.log()
    console.log("props: ", props)
    return (
            <div className={`container `}>
                <div className="card list-column">
                    <div className="card-header p-1">
                        <h3 className="list-header text-2xl">
                            { props.title }
                        </h3>
                    </div>
                    <div className={`card-body ${classCSS}`}>
                        <Droppable droppableId={ props.category } >
                            { (provided, snapshot) => {
                                return (
                                    <div
                                        ref={ provided.innerRef }
                                        style={{minHeight: '200px' }}
                                        { ...provided.droppableProps }
                                    // isdraggingover={ snapshot.isDraggingOver.toString() }
                                    >
                                        { props.items?.map((task, index) => (
                                            <Item key={ index } item={ task } />
                                        )) }
                                        { provided.placeholder }
                                    </div>
                                )
                            } }
                        </Droppable>
                    </div>
                </div>
            </div>
    )
}