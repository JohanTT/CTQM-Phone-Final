import React from 'react';
import {Text, View, Image} from 'react-native';

import styles from './styles';
import wrapper from './wrapper';

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Expense Tracker by CTQM</Text>
      <View style={wrapper.container}>
          <View>
            <View style={wrapper.headerContent}>
                <Image style={wrapper.avatar}
                  source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                <Text style={wrapper.name}>Cao Viet Thang </Text>
                <Text style={wrapper.userInfo}>thejohan39@gmail.com </Text>
                <Text style={wrapper.userInfo}>CTQM </Text>
            </View>
          </View>
      </View>
    </View>
  );
};