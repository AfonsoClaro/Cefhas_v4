import { createStackNavigator } from "@react-navigation/native-stack";
import About from '../screens/about';

const createAboutStack = () => {
    const screens = {
      About: {
        screen: About,
        navigationOptions: {
          title: 'About',
          //headerStyle: { backgroundColor:'#bbb'}
        }
      }
    };
  
    const AboutStack = createStackNavigator(screens, {
      defaultNavigationOptions: {
        //Cor do header
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#bbb', height: 70 }
      }
    });
  
    return AboutStack;
  };
  
  export default createAboutStack;