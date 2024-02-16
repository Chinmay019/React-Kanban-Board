import { ItemProps } from "../../models/Types";
import "./Item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
// import { deleteTask } from "../../service/Actions";

export const Item = (props: ItemProps) => {
    const itemName: string = props.title;
    const itemDescription: string = props.description;
    let itemClass: string = '';
    switch (props.category) {
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
        <div id={ props.id } className="task" draggable>
            <div className="flex">
                <div className="action-items">
                    <div className="edit-action">
                        <FontAwesomeIcon icon={ faPen } />
                    </div>
                    <div className="delete-action" onClick={ () => {
                        if(confirm("Are you sure you want to delete?")){
                            console.log("deleting task....")
                        }
                    } }>
                        <FontAwesomeIcon icon={ faTrash } />
                    </div>
                </div>
                <div className="card grow mb-3">
                    <div className={ `${itemClass}` }>
                        <div className="card-header">
                            <h5 className="item-header">
                                { itemName }
                            </h5>
                        </div>
                        <div className="card-body break-words">
                            { itemDescription }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}