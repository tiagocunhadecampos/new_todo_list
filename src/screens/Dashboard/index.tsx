import React, { useState } from 'react';
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';

import Empty from '../../assets/clipboard.png';
import { theme } from '../../styles/theme';
import { Header } from '../../components/Header';
import { Task } from '../../components/Task';

type ListTaskProps = {
  id: string,
  nameTask: string,
  isDone: boolean,
}

export function Dashboard() {
  const [nameTask, setNameTask] = useState('');
  const [listTasks, setListTasks] = useState<ListTaskProps[]>([]);

  const initialValue = 0;
  const tasksDone = listTasks.reduce(
    (previousValue, currentValue) => currentValue.isDone ? previousValue + 1 : previousValue + 0,
    initialValue
  );

  function handleAddNewTask() {
    if(!nameTask) {
      return Alert.alert('Nova Tarefa', 'Informe a nova tarefa a ser feita.')
    }
    const tasksInMyList = [...listTasks];

    const min = Math.ceil(1);
    const max = Math.floor(5000);
    const numRandomId =  Math.floor(Math.random() * (max - min)) + min;

    const data ={
      id: numRandomId.toString(),
      nameTask,
      isDone: false,
    } as ListTaskProps

    tasksInMyList.push(data)

    setListTasks(tasksInMyList)
    setNameTask('')
  }

  function handleUpdateCheckedTask(idTask: string) {
    const taskExists = listTasks.find(tasks => tasks.id === idTask)

    if(taskExists) {
      taskExists.isDone = !taskExists.isDone;

      setListTasks([...listTasks])
    }
  }

  function handleDeleteTask(idTask: string) {
    Alert.alert(
      "Excluir tarefa",
      "Deseja realmente excluir essa tarefa ?",
      [
        {
          text: "Não",
          onPress: () => {},
          style: "cancel"
        },
        { text: "Sim", 
          onPress: () => {
            setListTasks(listTasks.filter(tasks => tasks.id !== idTask))
          }
        }
      ]
    )
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <View style={styles.wrapperInput}>
          <TextInput 
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={theme.colors.gray300}
            onChangeText={setNameTask}
            value={nameTask}
          />
          <TouchableOpacity style={styles.buttonAdd} onPress={handleAddNewTask}>
            <MaterialIcons 
              name="add-circle-outline" 
              size={16} 
              color={theme.colors.gray100} 
            />
          </TouchableOpacity>
        </View>

        <View style={styles.rowInfoTask}>
          <View style={styles.wrapperInfoTask}>
            <Text style={styles.textTaskCreate}>
              Criadas
            </Text>
            <View style={styles.wrapperCounter}>
              <Text style={styles.textCounter}>
                {listTasks.length}
              </Text>
            </View>
          </View>

          <View style={styles.wrapperInfoTask}>
            <Text style={styles.textTaskDone}>
              Concluidas
            </Text>
            <View style={styles.wrapperCounter}>
              <Text style={styles.textCounter}>
                {tasksDone}
              </Text>
            </View>
          </View>

        </View>

        <FlatList 
          data={listTasks}
          keyExtractor={ item => item.id }
          renderItem={({ item }) => 
            <Task 
              nameTask={item.nameTask} 
              done={item.isDone}
              pressChangeTaskChecked={() => handleUpdateCheckedTask(item.id)}
              pressDeleteTask={() => handleDeleteTask(item.id)}
            />
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 25,
          }}
          ListEmptyComponent={(
            <View style={styles.empty}>
              <Image source={Empty} style={{ marginBottom: 16 }} />
              <Text style={styles.textEmptyBold}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.textEmpty}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}