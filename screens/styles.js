import { StyleSheet} from 'react-native';

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

  export default styles;