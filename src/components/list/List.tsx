// import React from 'react';
import { Item } from "../item/Item";
import "./List.css";
import { ListProps } from "../../models/Types";

const handleOnDrop = (location: string) => {
    console.log(location);
}

const handleOnDragOver = (e : React.DragEvent) => {
    e.preventDefault();
}

export const List = (props: ListProps) => {
    console.log(`List: ${props.title}`);
    return (
        <>
            <div className="container">
                <div className="card list-column">
                    <div className="card-header p-1">
                        <h3 className="list-header">
                            { props.title }
                        </h3>
                    </div>
                    <div className="card-body" onDrop={() => handleOnDrop(props.title)} onDragOver={handleOnDragOver}>
                        <Item />
                        <Item />
                    </div>
                </div>
            </div>
        </>
    )
}