import React, {useEffect, useState} from 'react';
import {Alert, SafeAreaView, StyleSheet, Text} from 'react-native';
import TaskList from './src/TaskList';
import CreateTask from './src/CreateTask';

import {Provider} from 'react-redux';
// import { createStore } from "redux";
import rootReducer from './reducers';
// import {configureStore} from '@reduxjs/toolkit';

// const store = configureStore({reducer: rootReducer});
import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';

const store = createStore(rootReducer, applyMiddleware(logger));

export interface task {
  id: number;
  reminder: string;
  status: boolean;
  time: string;
}

// const initialTaskList: task[] = [
//   {
//     id: 1,
//     reminder: 'Study for exam',
//     status: false,
//     time: '2023-01-24T00:09:07.112Z',
//   },
//   {
//     id: 2,
//     reminder: 'Clean Room',
//     status: false,
//     time: '2023-01-24T00:09:07.112Z',
//   },
//   {
//     id: 3,
//     reminder: 'Pickup groceries',
//     status: true,
//     time: '2023-01-19T00:09:07.112Z',
//   },
// ];

// const taskReducer = (state = initialTaskList, action) => {
//   switch (action.type) {
//     case "ADD_TASK":
//       case
//     case "UPDATE_TASK":
//     case "DELETE_TASK":
//     default:
//       return state;
//   }
// }

export default function App() {
  const [taskList, setTaskList] = useState<task[]>([
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
  ]);

  const addTask = (task: string) => {
    const newTodo = {
      id: taskList.slice(-1)[0].id + 1,
      reminder: task,
      time: new Date().toString(),
      status: false,
    };
    if (task.length > 0) {
      setTaskList([...taskList, newTodo]);
    } else {
      Alert.alert(
        'Empty String',
        'You need to enter a task',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
  };

  return (
    <SafeAreaView style={styles.background}>
      <Text style={styles.heading}> To Do List </Text>

      <Provider store={store}>
        <CreateTask />
        <TaskList />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1,
  },
  heading: {
    fontSize: 40,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  errorMessage: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#eb3434',
  },
});
