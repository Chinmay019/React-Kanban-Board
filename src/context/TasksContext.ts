// import React, { Context, ContextType, Dispatch, useReducer } from "react";
// import { tasksReducer, IState } from "./TasksReducer";
// import { ItemProps } from "../models/Types";
// import createContext from "react";

// interface IContextProps {
//   state: IState;
//   dispatch: Dispatch<null>;
// }

// export const TasksProvider = (props: any) => {
//   const TasksContext: any = React.createContext({});

//   const [state, dispatch] = useReducer(tasksReducer, ItemList);
//   const value = { state, dispatch };

//   return (
//     <TasksContext.Provider value={value}>
//       {props.children}
//     </TasksContext.Provider>
//   );
// };

// export const ItemList: Array<ItemProps> = [
//   {
//     id: "1",
//     title: "Item 1",
//     description: "Description 1",
//     category: "1",
//   },
//   {
//     id: "2",
//     title: "Item 2",
//     description: "Description 2",
//     category: "2",
//   },
//   {
//     id: "3",
//     title: "Item 3",
//     description: "Description 3",
//     category: "3",
//   },
//   {
//     id: "4",
//     title: "Item 4",
//     description: "Description 4",
//     category: "1",
//   },
// ];
