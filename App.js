// import { StatusBar } from "react-native";
import { Text, StyleSheet, View, StatusBar } from "react-native";
// import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";



export default function App() {
return (
<SafeAreaView style={styles.container}>
<View style={{padding:16, backgroundColor: 'yellow'}}>
<Text>Search</Text>
</View>

<View style={{flex:1, padding:16, backgroundColor:'red'}}>
<Text>Resturant list</Text>
</View>

<StatusBar style = "auto" />
</SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
// backgroundColor: "#fff",
// alignItems: "center",
// // justifyContent: "center",
},
});