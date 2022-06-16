import React from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 40
  }
})

export default function Catalog(){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>
        Catalog
      </Text>
    </View>
  );
}
