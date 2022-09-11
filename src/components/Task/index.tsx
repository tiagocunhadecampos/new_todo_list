import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

import Check from '../../assets/check.png';
import CheckEmpty from '../../assets/checkEmpty.png';
import IconDelete from '../../assets/iconDelete.png';

type TaskProps = {
  nameTask: string
  done: boolean
  pressDeleteTask: () => void
  pressChangeTaskChecked: () => void
}

export function Task({ 
  nameTask, 
  done = false, 
  pressDeleteTask, 
  pressChangeTaskChecked,
}: TaskProps) {
  const [isDone, setIsDone] = useState(done);

  function handleCheck() {
    setIsDone(!isDone)
    pressChangeTaskChecked()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonCheck} onPress={handleCheck}>
        <Image source={isDone ? Check : CheckEmpty} />
        {isDone
        ?
          <Text style={styles.textDone}>
            {nameTask}
          </Text>
        :
          <Text style={styles.text}>
            {nameTask}
          </Text>
        }
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.buttonDeleteTask} onPress={pressDeleteTask}>
        <Image source={IconDelete} />
      </TouchableOpacity>
    </View>
  );
}