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
      <IMG />
      <Media />
      <Card />
    </View>
  );
}