import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import {task} from '../App';
// import {actionItem, actionItems} from '../data/sampleData';

function lessTen(val: number) {
  return val < 10 ? '0' + val.toString() : val.toString();
}

// format date javascript
function dateFormater(date: string) {
  const dateVal = new Date(date);
  const day = lessTen(dateVal.getDate());
  const month = lessTen(dateVal.getMonth() + 1);
  const year = lessTen(dateVal.getFullYear());
  const hour = lessTen(dateVal.getHours());
  const minute = lessTen(dateVal.getMinutes());

  return `${day}/${month}/${year} ${hour}:${minute}`;
}

interface Props {
  item: task;
  changeStatus: (value: task) => void;
  deleteTask: (value: task) => void;
}

export default function Task({item, changeStatus, deleteTask}: Props) {
  const time = dateFormater(item.time);

  return (
    <View style={styles.actionItem}>
      <View style={styles.radioButtonArea}>
        <Pressable
          style={item.status ? styles.selectedRadioButton : styles.radioButton}
          onPress={() => changeStatus(item)}>
          {item.status ? <View style={styles.radioSelected} /> : null}
        </Pressable>
      </View>
      <View style={styles.reminderInfo}>
        <Text
          style={
            item.status ? styles.reminderTitleDisable : styles.reminderTitle
          }>
          {item.reminder}
        </Text>
        <View>
          <View style={styles.reminderSubtitle}>
            <Text
              style={
                item.status ? styles.reminderTimeDisable : styles.reminderTime
              }>
              {time}
            </Text>
            <Pressable onPress={() => deleteTask(item)}>
              <EvilIcon name="trash" color="#662D76" size={40} />
            </Pressable>
          </View>
        </View>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  actionItem: {
    backgroundColor: 'white',
    margin: 10,
    padding: 20,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },

  reminderTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  reminderTitleDisable: {
    fontSize: 20,
    fontWeight: '600',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  reminderTime: {},
  reminderTimeDisable: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  reminderInfo: {
    flex: 1,
  },
  reminderSubtitle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  radioButtonArea: {
    marginRight: 10,
  },

  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#662D76',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRadioButton: {
    height: 20,
    width: 20,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#662D76',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    height: 12,
    width: 12,
    borderRadius: 100,
    borderWidth: 2,
    backgroundColor: '#662D76',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
