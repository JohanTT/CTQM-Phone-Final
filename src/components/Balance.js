import React, { useContext } from 'react';
import {Text, View} from 'react-native';
import { GlobalContext } from './context/GlobalState';

import styles from './styles';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext)

  const money = transactions.map(item => item.money);
  const total = money.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
      <View style={styles.balanceContainer}>
          <Text style={styles.title}>Your Balance</Text>
          <Text style={styles.moneyTitle}>${total}</Text>
      </View>
  );
};
