import "./Item.css";

export const Item = () => {
    const itemName: string = "Card";
    const itemDescription: string = "Description";
    // let type: number = 1;

    return (
        <div className="task" draggable>
            <div className="card mb-3">
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
    )
}