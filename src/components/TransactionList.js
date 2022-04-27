import React, {useContext} from 'react'
import {Text, View, FlatList, SafeAreaView} from 'react-native';
import { GlobalContext } from './context/GlobalState'
import { Transaction } from './Transaction';

import styles from './styles';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  var tmp = transactions.map(listHandler);
  function listHandler(item) {
    return item;
  }

  // const oneList = ( {item} ) => (
  //   <Transaction key={item.id} item={item} />
  // )

  return (
      <SafeAreaView style={styles.tracContainer}>
          <Text style={styles.title}>History</Text>
          <Text style={transactions.length > 0 ? '' : styles.text}>{transactions.length > 0 ? '' : 'Notthing Yet!'}</Text>
          {transactions.map(item => (
            <Transaction key={item.id} item={item} />
          ))}
            {/* <FlatList 
              data = {tmp}
              renderItem = {oneList}
              ListEmptyComponent={<Text style={styles.text}>Notthing Yet!</Text>}
            /> */}
      </SafeAreaView>
  );
};
