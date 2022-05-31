import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './Screens/Home/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
