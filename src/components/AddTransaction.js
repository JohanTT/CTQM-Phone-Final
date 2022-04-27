import React, {useState, useContext} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import { GlobalContext } from './context/GlobalState';

import styles from './styles';

export const AddTransaction = () => {
  const [name, setName] = useState('');
  const [money, setMoney] = useState(0);
  
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: Math.floor(Math.random() * 1000000000),
      name,
      money: +money
    }
    addTransaction(newItem);
  }
  return (
      <View style={styles.tracContainer}>
          <Text style={styles.title}>
              Add new transaction
          </Text>
          <View>
            <Text style={styles.smallText}>
              Text
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={setName}
              value={name}
              placeholder='Enter text'>
            </TextInput>
          </View>
          <View>
            <Text style={styles.smallText}>
              Amount
              (negative - expense, positive - income)
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={setMoney}
              placeholder='Enter amount'
              keyboardType='numeric'>
            </TextInput>
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={onSubmit}>
            <Text style={styles.btnTitle}>Add transaction</Text>
          </TouchableOpacity>
      </View>
  );
};
