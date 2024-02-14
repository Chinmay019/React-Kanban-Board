import { ItemProps } from "../../models/Types";
import "./Item.css";

export const Item = (props: ItemProps) => {
    console.log(props);
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
        <div className="task" draggable>
            <div className="card mb-3">
                <div className={ `${itemClass}` }>
                    <div className="card-header">
                        <h5 className="item-header">
                            { itemName }
                        </h5>
                    </div>
                    <div className="card-body">
                        { itemDescription }
                    </div>
                </div>
            </div>
        </div>
    )
}