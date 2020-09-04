import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Shoes from '../../components/Shoes';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/banner.png')}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <Text style={styles.text}>Tênis</Text>
          <Text style={[styles.text, { color: '#DDD' }]}>*</Text>
          <Text style={[styles.text, { color: '#DDD' }]}>Masculino</Text>
          <TouchableOpacity
            style={{ position: 'absolute', right: 0, alignItems: 'center' }}
          >
            <MaterialIcons name='filter-list' size={24} color='#000' />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text}>Lançamentos</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes
            img={require('../../../assets/1.png')}
            coast='R$140,90'
            onClick={() => navigation.navigate('Detail')}
          >
            Nike Air Max Dia
          </Shoes>
          <Shoes img={require('../../../assets/2.png')} coast='R$280,90'>
            Nike Domnshift Night
          </Shoes>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../../assets/3.png')} coast='R$140,90'>
            Nike Air Max Dia
          </Shoes>
          <Shoes img={require('../../../assets/3.png')} coast='R$140,90'>
            Nike Air Max Dia
          </Shoes>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../../assets/3.png')} coast='R$140,90'>
            Nike Air Max Dia
          </Shoes>
          <Shoes img={require('../../../assets/3.png')} coast='R$140,90'>
            Nike Air Max Dia
          </Shoes>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 0,
  },
  image: {
    width: '100%',
  },
  textContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%',
  },
  text: {
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%',
    textTransform: 'uppercase',
  },
  line: {
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 2,
  },
});
