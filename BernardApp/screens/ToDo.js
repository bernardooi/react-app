import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
} from 'react-native';

const styles = StyleSheet.create({
  toDoMain: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 50,
  },
  textInput: {
    width: 300,
    height: 50,
    borderWidth: 2,
    fontSize: 20,
  },
  toDoButton: {
    width: 125,
    height: 40,
  },
  todoItem: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
  },
});

const ToDo = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const STORAGE_KEY = 'todos';

  const _storeData = async todos => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
      console.error('Error saving data', error);
    }
  };

  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);
      if (value !== null) {
        // We have data!!
        setTodos(JSON.parse(value));
      }
    } catch (error) {
      console.error('Error retrieving data', error);
    }
  };

  useEffect(() => {
    _retrieveData();
  }, []);

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      setTodos([]);
      alert('Storage successfully cleared!');
    } catch (e) {
      alert('Failed to clear the async storage.');
    }
  };

  const onChangeText = value => setInput(value);

  const onSubmitEditing = () => {
    if (!input) return;

    const newTodo = {todo: input};
    const updatedTodos = [...todos, newTodo];

    _storeData(updatedTodos);
    setTodos(updatedTodos);
    setInput('');
  };

  return (
    <View style={{borderWidth: 2}}>
      <View style={styles.toDoMain}>
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          value={input}
        />
        <TouchableOpacity style={styles.toDoButton} onPress={onSubmitEditing}>
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                borderWidth: 2,
                marginTop: 10,
              }}>
              Save To Do
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.toDoButton} onPress={clearStorage}>
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                borderWidth: 2,
                marginTop: 10,
              }}>
              Clear
            </Text>
          </View>
        </TouchableOpacity>

        {todos.map((todo, index) => (
          <View key={index} style={styles.todoItem}>
            <Text>{todo.todo}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ToDo;
