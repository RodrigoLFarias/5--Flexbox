import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

     <View style={styles.segundoContainer}></View>
     <View style={styles.terceiroContainer}></View>
     <View style={styles.quartoContainer}></View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddf',
    flex: 1,
    justifyContent: 'space-evenly',
    gap: 200,
    alignItems: 'center',
    
  },
  
  segundoContainer: {
    backgroundColor: 'red',
    flex: 1,
    width: '10%',
    height: '10%',
    justifyContent: 'space-evenly',

  },

  terceiroContainer:{
    backgroundColor: 'green',
    flex: 1,
    width: '10%',
    height: '10%',
    justifyContent: 'space-evenly',

  },

  quartoContainer:{
    backgroundColor: 'yellow',
    flex: 1,
    width: '10%',
    height: '10%',
    justifyContent: 'space-evenly',

  },

});
