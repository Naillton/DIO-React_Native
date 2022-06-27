import React, { useState } from 'react';
import { SafeAreaView,
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import FCart from '../../components/FloatingCart/index';
import Format from '../../utils/format';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

export default function Catalog(){
  const [products, setProducts] = useState([
    {
      "id": "1",
      "title": "Assinatura Trimestral",
      "image_url":
        "https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png",
      "price": 150
    },
    {
      "id": "2",
      "title": "Assinatura Anual",
      "image_url":
        "https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/annual_subscription_qyolci.png",
      "price": 540
    }
  ]);

  return(
    <SafeAreaView style={styles.container}>
      <View style={ styles.productContainer}>
        <FlatList
          style={ styles.productList }
          showsVerticalScrollIndicator={false}
          data={products}
          keyExtractor={(item) => item.id}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
          renderItem={({item}) =>(
            <View style={styles.product}>
              <Image
                style={styles.img}
                source={{ uri: item.image_url }}
              />
              <Text style={styles.productTitle}>{item.title}</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.priceProduct}>{Format(item.price)}</Text>
                <TouchableOpacity
                  style={styles.productBtn}
                  onPress={() => {}}
                >
                  <Text
                    style={ styles.btnText}
                  >
                    ADICIONAR
                  </Text>
                  <AntDesign name="pluscircleo" size={30} color="#d1d7d3" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
      <FCart />
    </SafeAreaView>
  );
}
