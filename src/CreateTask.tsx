import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AddTask, UpdateTask, DeleteTask} from '../actions';
import {task} from '../App';

interface Props {
  addTask: (value: string) => void;
}

export default function CreateTask() {
  const dispatch = useDispatch();
  const data = useSelector(state => state);

  const addTask = (action: string) => {
    // console.log('clicked');

    // setTaskList(
    //   taskList.map(todo => {
    //     if (todo.id === id) {
    //       todo.status = !todo.status;
    //     }rr
    //     return todo;
    //   }),
    // );

    if (action.length > 0) {
      const newTodo = {
        id: data.slice(-1)[0].id + 1,
        reminder: action,
        time: new Date().toString(),
        status: false,
      };

      dispatch(AddTask(newTodo));
    } else {
      Alert.alert(
        'Empty String',
        'You need to enter a task',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
  };

  const [action, setAction] = useState('');

  return (
    <View style={styles.createBox}>
      <Text style={styles.createHeading}> Create A New Task </Text>
      <TextInput
        editable
        maxLength={40}
        onChangeText={text => setAction(text)}
        value={action}
        style={styles.createTextBox}
      />
      <Pressable style={styles.createButton} onPress={() => addTask(action)}>
        <Text>Add Action</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  createBox: {
    backgroundColor: '#662D76',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createHeading: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  createTextBox: {
    backgroundColor: '#ffffff',
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
  },
  createButton: {
    backgroundColor: '#62B946',
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,

    elevation: 5,
  },
});
