import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

// const HomeScreen = props => {
  const HomeScreen = ({navigation}) => {

  // console.log(props.navigation);
  return (
    <View>
      {/* <Text style={styles.text}>HomeScreen</Text>
    <Button 
    title="Go to Components Demo"
    onPress={() => console.log('Button Pressed')}
    />
    <Button 
    title="Go to List Demo"
    onPress={() => console.log('List Button Pressed')}
    /> */}
      <Text style={styles.text}>Hi There!</Text>
      <Button
        title="Go to componenets demo"
        // onPress={() => props.navigation.navigate("Components")}
        onPress={() => navigation.navigate("Components")}
      />

      {/* <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}

      {/* <Button title="Go to List Demo" onPress={() => props.navigation.navigate("List")} /> */}
      <Button title="Go to List Demo" onPress={() => navigation.navigate("List")} />
        <Button title="Go TO Image Demo" onPress={() => navigation.navigate("Image")} />

        <Button title="Go TO Counter App" onPress={() => navigation.navigate("Counter")} />
        <Button title="Go TO Color Screen App" onPress={() => navigation.navigate("Color")} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
  },
});

export default HomeScreen;
