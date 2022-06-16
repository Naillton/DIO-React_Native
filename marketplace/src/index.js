import React from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';

import Routes from './routes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default function App(){
  return(
    <View style={styles.container}>
      <StatusBar barStyle='light-content'
        backgroundColor='#312e38'
      />
      <Routes />
    </View>
  );
}
