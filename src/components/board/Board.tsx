import { List } from "../list/List";
import "./Board.css"

export default function Board () {
    return (
        <div className="main-board">
            <div className="row">
                <div className="col m-1">
                    <List title="To-Do" category="1"/>
                </div>
                <div className="col m-1">
                    <List title="Doing" category="2"/>
                </div>
                <div className="col m-1">
                    <List title="Done" category="3"/>
                </div>
            </div>
            {/* <List title="To-Do"/>
            <List title="Doing"/>
            <List title="Done"/> */}
        </div>
    )
}