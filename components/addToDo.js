import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const AddToDo = ({submitHandler}) => {

  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  }

  return ( 
    <View>
      <TextInput
        style={styles.input}
        placeholder='new item...'
        onChangeText={changeHandler} />
      <Button title='Add item' onPress={() => submitHandler(text)} color='#535C91'/>
    </View>
  );
}
 
export default AddToDo;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  }
})