import React from "react"; // we're importing all the react library
import { Text, StyleSheet } from "react-native"; //we use curly braces cause is a small part


const ComponentsScreen = () => {
    return <Text styles={styles.textStyle}>this is the components</Text>
}

const styles = StylesSheet.create({
    textStyle:{
        fontSize: 30
    }
})

export default ComponentsScreen