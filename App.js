import * as React from 'react';
import { Button, View, Image, StyleSheet, Text, Alert, ImageBackground } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import * as AzureAuth from 'react-native-azure-auth';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  titulo:{
    fontFamily:'',
    fontSize:75,
    fontWeight:'bold',
    color:'white',
    position:'absolute',
    top:50,
    textShadowRadius:15,
    textShadowColor:'black',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo1: {
    width: 150,
    height: 70,
    position:'absolute',
    bottom:15,
    right:75,
  },
  logo2: {
    width: 150,
    height: 70,
    position:'absolute',
    bottom:15,
    left:75,
  },
});

function HomeScreen({ navigation }) {
  const handleLogin = async () => {
    try {
      const azureAuth = new AzureAuth.AzureAuth({
        clientId: 'YOUR_AZURE_CLIENT_ID',
        tenantId: 'YOUR_AZURE_TENANT_ID',
      });

      const token = await azureAuth.login();
      
      if (token) {
        navigation.navigate('Galeria');
      } else {
        // Handle failed login
      }
    } catch (error) {
      console.log('Azure login error:', error);
      // Handle error
    }
  };

  return (
    <ImageBackground
      source={require('./assets/fundo.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.titulo}
        >CEFHAS</Text>
        <Image
          style={styles.logo1}
          source={require('./assets/ipt.png')}
        />
        <Image
          style={styles.logo2}
          source={require('./assets/LabCR.jpg')}
        />
        <Button 
          //onPress={handleLogin}
          onPress={() => Alert.alert('Login não implementado')} 
          title="Microsoft Login" 
          color="gray"
          
        />
      </View>
    </ImageBackground>
  );
}


function Galeria({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function FichaInventario({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function FichaCR({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Galeria" component={Galeria} />
        <Drawer.Screen name="Fichas de Inventário" component={FichaInventario} />
        <Drawer.Screen name="Fichas de CR" component={FichaCR} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
