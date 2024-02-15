import { List } from "../list/List";
import "./Board.css"

export default function Board () {
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
                    <List title="To-Do" category="1" />
                </div>
                <div className="min-h-[100px] rounded-lg min-w-[150px]">
                    <List title="Doing" category="2" />
                </div>
                <div className="min-h-[100px] rounded-lg min-w-[150px]">
                    <List title="Done" category="3" />
                </div>
            </div>
        </>

    )
}