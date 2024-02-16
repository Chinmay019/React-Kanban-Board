import React, { useState } from "react";
import { List } from "../list/List";
import {ItemProps} from "../../models/Types";
import "./Board.css";

export default function Board () {
    const initial : Array<ItemProps> = [
        {
          id: "1",
          title: "Item 1",
          description: "Description 1",
          category: "1",
        },
        {
          id: "2",
          title: "Item 2",
          description: "Description 2",
          category: "2",
        },
        {
          id: "3",
          title: "Item 3",
          description: "Description 3",
          category: "3",
        },
        {
          id: "4",
          title: "Item 4",
          description: "Description 4",
          category: "1",
        },
      ];
      
    const [ItemList,setItemList] = useState(initial);

    return (
        <>
            {/* <div className="main-board">
                <div className="row">
                    <div className="col m-1" id="todoContainer">
                        <List title="To-Do" category="1" />
                    </div>
                    <div className="col m-1" id="doingContainer">
                        <List title="Doing" category="2" />
                    </div>
                    <div className="col m-1" id="doneContainer">
                        <List title="Done" category="3" />
                    </div>
                </div> */}
            <div className="container m-4 grid gap-2 sm:grid-cols-3 box-border">
                <div className="min-h-[100px] rounded-lg min-w-[150px]">
                    <List title="To-Do" category="1" items={ItemList} setItemList={setItemList}/>
                </div>
                <div className="min-h-[100px] rounded-lg min-w-[150px]">
                    <List title="Doing" category="2" items={ItemList} setItemList={setItemList}/>
                </div>
                <div className="min-h-[100px] rounded-lg min-w-[150px]">
                    <List title="Done" category="3" items={ItemList} setItemList={setItemList}/>
                </div>
            </div>
        </>

    )
}