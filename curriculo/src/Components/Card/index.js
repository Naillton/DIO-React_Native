import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default Card = () => {
  return(
    <View style={ styles.container }>
      <Text style={ styles.title }>Sobre Mim</Text>
      <Text style={ styles.text }>
      Olá Mundooooo, eu me chamo Nailton tenho 22 anos e estou querendo me tornar
        um grande desenvolvedor web e mobile, gosto muito de ficção científica, tecnologia
        e jogos, então, desde pequeno sempre quis saber como desenvolvê-los.
      </Text>
    </View>
  );
}