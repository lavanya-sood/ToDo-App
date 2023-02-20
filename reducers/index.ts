// import task from '../App';

import { task } from "../App";
 

const initialTaskList: task[] = [
  {
    id: 1,
    reminder: 'Study for exam',
    status: false,
    time: '2023-01-24T00:09:07.112Z',
  },
  {
    id: 2,
    reminder: 'Clean Room',
    status: false,
    time: '2023-01-24T00:09:07.112Z',
  },
  {
    id: 3,
    reminder: 'Pickup groceries',
    status: true,
    time: '2023-01-19T00:09:07.112Z',
  },
];

const taskReducers = (state = initialTaskList, action: any) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state,action.payload]
    case "UPDATE_TASK":
      return state.map(task => {
        if (task.id === action.payload.id) {
          task.status = !task.status;
        } 
          return task;
        
      });
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload.id);

    default:
      return state;
  }
};

export default taskReducers;