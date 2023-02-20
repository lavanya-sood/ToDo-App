import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Task from './Task';
import {task} from '../App';
import {useDispatch, useSelector} from 'react-redux';
import {AddTask, UpdateTask, DeleteTask} from '../actions';
// import {connect} from 'react-redux';

export default function TaskList() {
  const dispatch = useDispatch();

  const data: task[] = useSelector(state => state);
  const [remainingTask, setRemainingTask] = useState(0);

  useEffect(() => {
    let taskLeft = 0;
    data.map(task => {
      if (!task.status) {
        taskLeft++;
      }
    });
    setRemainingTask(taskLeft);
  }, [data]);

  // console.log(data);

  const changeStatus = (taskItem: task) => {
    // console.log('clicked');

    // setTaskList(
    //   taskList.map(todo => {
    //     if (todo.id === id) {
    //       todo.status = !todo.status;
    //     }rr
    //     return todo;
    //   }),
    // );
    dispatch(UpdateTask(taskItem));
  };

  const deleteTask = (taskItem: task) => {
    Alert.alert('Delete Task', 'Are you sure you want to delete this?', [
      {
        text: 'No',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          // setTaskList(
          //   taskList.filter(todo => {
          //     if (todo.id !== id) {
          //       return true;
          //     }
          //   }),
          // );
          dispatch(DeleteTask(taskItem));
        },
      },
    ]);
  };

  return (
    <View style={styles.background}>
      <View style={styles.flatlistArea}>
        <Text style={styles.errorMessage}>
          You have {remainingTask} task(s) left!
        </Text>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <Task
              item={item}
              changeStatus={changeStatus}
              deleteTask={deleteTask}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1,
  },
  flatlistArea: {
    flex: 1,
  },
  createButton: {
    backgroundColor: '#662D76',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonArea: {
    marginBottom: 30,
    marginHorizontal: 10,
    marginTop: 10,
    alignItems: 'flex-end',
  },
  errorMessage: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#eb3434',
  },
});
