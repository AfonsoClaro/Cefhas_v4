import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import FichaCR from './screens/FichaCR';
import FichaInventario from './screens/FichaInventario';
import Galeria from './screens/Galeria';
import HomeScreen from './screens/HomeScreen';



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
