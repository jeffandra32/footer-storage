import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Shoes() {
  function filterDesc(desc) {
    if (desc.length < 27) {
      return desc;
    }

    return `${desc.substring(0, 22)}...`;
  }

  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={require('../../../assets/1.png')}
        style={styles.shoesImg}
      ></Image>
      <Text style={styles.text}>
        {filterDesc('Nicke Shoe 10 Power Edition')}
      </Text>
      <View opacity={0.4}>
        <Text style={styles.text}>R$190,90</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: '2%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shoesImg: {
    width: 175,
    height: 175,
  },
  text: {
    fontSize: 16,
  },
});
