import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

export default Media = () => {
  return(
    <View style={ styles.container }>
       <TouchableOpacity
          activeOpacity={0.6}
          style={ styles.touch }
          onPress={() => { Linking.openURL('https://github.com/Naillton')}}
        >
          <AntDesign name="github" size={20} color="black" />
          <Text style={ styles.text }>Github</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={ styles.touch }
          onPress={() => { Linking.openURL('https://www.linkedin.com/in/nailton-junior-6620951b1/')}}
        >
          <AntDesign name="linkedin-square" size={20} color="black" />
          <Text style={ styles.text }>Linkedin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={ styles.touch }
          onPress={() => { Linking.openURL('https://www.instagram.com/nailtonjunior2/')}}
        >
          <AntDesign name="instagram" size={20} color="black" />
          <Text style={ styles.text }>Instagram</Text>
        </TouchableOpacity>
    </View>
  );
}