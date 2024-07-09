import React, {useState} from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const CounterScreen = () => {
    // let counter = 0;
    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Button title='INCREASE' 
            onPress={() =>{
                // counter = counter + 1;
                setCounter(counter+ 1);
            }} />
            <Button title='DECREASE' 
            onPress={() =>{
                // counter = counter - 1;
                setCounter(counter- 1);
                
            }}/>

            <Text style = {
                styles.counter
            
            }>Current Count: {counter}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    counter: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20
    }
});

export default CounterScreen;