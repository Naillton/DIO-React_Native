import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default Card = (props) => {
  return(
    <View style={ styles.container }>
      <Text style={ styles.title }>{ props.title }</Text>
      <Text style={ styles.text }>
        { props.text }
      </Text>
    </View>
  );
}