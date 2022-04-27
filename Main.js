import React from 'react';
import {View, ScrollView, Image, Text} from 'react-native';

import styles from './src/components/styles';
// components
import { Header } from './src/components/Header';
import { Balance } from './src/components/Balance';
import { IncomeExpenses } from './src/components/IncomeExpenses';
import { TransactionList } from './src/components/TransactionList';
import { AddTransaction } from './src/components/AddTransaction';

import { GlobalProvider } from './src/components/context/GlobalState';

const Main = () => {
  return (
    <GlobalProvider>
      <ScrollView>
        <View style={styles.container}>
          <Header />
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </View>
      </ScrollView>
    </GlobalProvider>
  );
};

export default Main;