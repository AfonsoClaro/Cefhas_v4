import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as AzureAuth from 'react-native-azure-auth';

function HomeScreen({ navigation }) {
  const handleLogin = async () => {
    try {
      const azureAuth = new AzureAuth.AzureAuth({
        clientId: 'YOUR_AZURE_CLIENT_ID',
        tenantId: 'YOUR_AZURE_TENANT_ID',
      });

      const token = await azureAuth.login();
      
      if (token) {
        navigation.navigate('Notifications');
      } else {
        // Handle failed login
      }
    } catch (error) {
      console.log('Azure login error:', error);
      // Handle error
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={handleLogin} title="Microsoft Login" />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
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
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
