import React, { useContext } from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { GlobalContext } from './context/GlobalState';

import styles from './styles';

export const Transaction = ({ item }) => {
  const { deleteTransaction } = useContext(GlobalContext);

    const sign = item.money < 0 ? '-' : '+';
  return (
    <View style={item.money > 0 ? styles.listContainerPlus : styles.listContainerMinus}>
        <Text>
            {item.name}
        </Text>
        <Text>
            {sign}${Math.abs(item.money)}
            
        <TouchableOpacity
            style={styles.smallBtn}
            onPress={() => deleteTransaction(item.id)}>
            <Text>x</Text>
          </TouchableOpacity>
        </Text>
    </View>
  );
};
