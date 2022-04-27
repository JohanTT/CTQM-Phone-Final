import React, { useContext } from 'react';
import {Text, View} from 'react-native';
import { GlobalContext } from './context/GlobalState';

import styles from './styles';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

    const money = transactions.map(item => item.money);
    const income = money.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);

    const expense = (money.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2); 

  return (
      <View style={styles.incomeContainer}>
          <View style={styles.incomeView}>
              <Text style={styles.inexText}>
                  Income
              </Text>
              <Text style={styles.moneyTitlePlus}>
                  {income}
              </Text>
          </View>
          <View style={styles.incomeView}>
              <Text style={styles.inexText}>
                  Expense
              </Text>
              <Text style={styles.moneyTitleMinus}>
                  {expense}
              </Text>
          </View>
      </View>
  );
};
