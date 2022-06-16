import React from 'react';
import { View, ScrollView, Text } from 'react-native';

import Card from '../../Components/Card';
import IMG from '../../Components/Image/Img';
import Media from '../../Components/Media';
import styles from './styles';

export default Home = () => {
  return(
    <View
      style={ styles.container }
    >
      <ScrollView
        showsVerticalScrollIndicator={ false }
      >
        <IMG />
        <Media />
        <Card
          title="Sobre Mim"
          text=" Olá Mundooooo, eu me chamo Nailton tenho 22 anos e estou querendo me tornar
          um grande desenvolvedor web e mobile, gosto muito de ficção científica, tecnologia
          e jogos, então, desde pequeno sempre quis saber como desenvolvê-los."
        />
        <Card
          title="Stacks"
          text=" React, React Native, Redux, Context API, Rest API, JavaScript, CSS, HTML, SQL, Java"
        />
      </ScrollView>
    </View>
  );
}