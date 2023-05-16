import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Home({ navigation }){

    const pressHandler = () => {
        navigation.navigate('ReviewDetails')
    }

    return(
        <View style = {styles.container}>
            <Text>Home screen</Text>
            <Button title="Go to review" onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:24,
    }
})