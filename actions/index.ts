import { task } from "../App";

export interface Action{
   type: string,
   payload: task 
}

export const AddTask = (payload:task) => ({
  type: 'ADD_TASK',
  payload,
});

export const UpdateTask = (payload:task) => ({
  type: 'UPDATE_TASK',
  payload,
});

export const DeleteTask = (payload:task) => ({
  type: 'DELETE_TASK',
  payload,
});
