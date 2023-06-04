import * as React from 'react';
import { View, Image, Text, ImageBackground} from 'react-native';
import CustomScanner from '../components/CustomScanner';
import styles from './styles';

export default function HomeScreen({ navigation }) {

    return (
      <ImageBackground
        //source={require('./assets/fundo.jpg')}
        style={styles.background}
      >
        <View style={styles.container}>
          <Text style={styles.titulo}>CEFHAS</Text>
          <CustomScanner/>
          <Image
            style={styles.logo1}
            source={require('../assets/ipt.png')}
          />
          <Image
            style={styles.logo2}
            source={require('../assets/LabCR.jpg')}
          />
        </View>    
      </ImageBackground>
    );
  }
