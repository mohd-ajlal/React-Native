import React from 'react';
import { Text, StyleSheet , View} from 'react-native';

const ComponentsScreen = () =>{
    const greeting = 'Hi There!';
    const htmlGreet = <Text>Hello html</Text>
  return <View>
  <Text style={styles.textStyle}>Getting start with React-Native</Text>
  <Text style={styles.textStyle}>This is the Component Screen</Text>
  <Text style={styles.subStyle}>{greeting}</Text>
  {htmlGreet}
  </View>

};


const styles = StyleSheet.create({
    textStyle:{
        fontSize: 30,
        color: "blue",
    },

    subStyle:{
        fontSize: 20,
        color: "red",
    }
});

export default ComponentsScreen;