import { ItemProps } from "../../models/Types";
import "./Item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Draggable } from "react-beautiful-dnd";
import CustomModal from "../modal/CustomModal";
import { useState } from "react";

interface ListProps {
    item: ItemProps,
}

export const Item = (props: ListProps) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    console.log(props)
    const itemName: string = props.item.title;
    const itemDescription: string = props.item.description;
    let itemClass: string = '';
    switch (props.item.category) {
        case "1":
            itemClass = "to-do";
            break;
        case "2":
            itemClass = "doing";
            break;
        case "3":
            itemClass = "done";
            break;
        default:
            break;
    }

    return (
        <Draggable draggableId={ props.item.id } index={ props.item.index }>
            { (provided, snapshot) => {
                return (
                    <div
                        ref={ provided.innerRef }
                        { ...provided.draggableProps }
                        { ...provided.dragHandleProps }
                    // isDragging={ snapshot.isDragging }
                    >
                        <div className="flex">
                            <div className="action-items">
                                <div className="edit-action" onClick={() => setShowEditModal(true)}>
                                    <FontAwesomeIcon icon={ faPen } />
                                </div>
                                <div className="delete-action" onClick={ () => setShowDeleteModal(true)
                                }
                                >
                                    <FontAwesomeIcon icon={ faTrash } />
                                </div>
                                <CustomModal show={showDeleteModal} close={() => setShowDeleteModal(false)} item={props.item} operation="delete" />
                                <CustomModal show={showEditModal} close={() => setShowEditModal(false)} item={props.item} operation="edit" />
                            </div>
                            <div className="grow mb-3">
                                <div className={ `${itemClass} rounded-lg` }>
                                    <div className="item-header">
                                        <h5>
                                            { itemName }
                                        </h5>
                                    </div>
                                    <hr></hr>
                                    <div className="task-contents break-words">
                                        { itemDescription }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            } }
        </Draggable>
    )
}