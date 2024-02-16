import { ItemProps } from "../../models/Types";
import "./Item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
// import { deleteTask } from '../../service/Actions';

interface ListProps {
    item: ItemProps,
    deleteTask: (param: string) => void
}

export const Item = (props: ListProps) => {
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
        <div id={ props.item.id } className="task" draggable>
            <div className="flex">
                <div className="action-items">
                    <div className="edit-action">
                        <FontAwesomeIcon icon={ faPen } />
                    </div>
                    <div className="delete-action" onClick={ () => {
                        if(confirm("Are you sure you want to delete?")){
                            props.deleteTask(props.item.id);
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