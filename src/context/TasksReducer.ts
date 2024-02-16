// import { ItemProps } from "../models/Types";

// export interface IState {
//     items: ItemProps[]
// }

// interface IAction {
//     type: string,
//     payload?: any
// }

// export const tasksReducer = (state, action: IAction) => {
//     switch (action.type) {
//       case "added": {
//         return [
//           ...state,
//           {
//             id: action.payload.id,
//             text: action.payload.text,
//             done: false,
//           },
//         ];
//       }
//       case "changed": {
//         return state.map((t) => {
//           if (t.id === action.payload.id) {
//             return action;
//           } else {
//             return t;
//           }
//         });
//       }
//       case "deleted": {
//         return state.filter((t) => t.id !== action.payload.id);
//       }
//       default: {
//         throw Error("Unknown action: " + action.type);
//       }
//     }
//   }