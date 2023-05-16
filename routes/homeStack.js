import { createStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const createHomeStack = () => {
    const screens = {
      Home: {
        screen: Home,
        navigationOptions: {
          title: 'Home',
          //headerStyle: { backgroundColor:'#bbb'}
        }
      },
      ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
          title: 'Review',
          //headerStyle: { backgroundColor:'#bbb'}
        }
      }
    };
  
    const HomeStack = createStackNavigator(screens, {
      defaultNavigationOptions: {
        //Cor do header
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#bbb', height: 70 }
      }
    });
  
    return HomeStack;
  };
  
  export default createHomeStack;