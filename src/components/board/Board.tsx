import { List } from "../list/List";
import "./Board.css"

export default function Board () {
    return (
        <div className="main-board">
            <div className="row">
                <div className="col m-1">
                    <List title="To-Do"/>
                </div>
                <div className="col m-1">
                    <List title="Doing"/>
                </div>
                <div className="col m-1">
                    <List title="Done"/>
                </div>
            </div>
            {/* <List title="To-Do"/>
            <List title="Doing"/>
            <List title="Done"/> */}
        </div>
    )
}