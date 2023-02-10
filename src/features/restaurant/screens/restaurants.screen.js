// import { StatusBar } from "react-native";
import { Text, StyleSheet, View, StatusBar } from "react-native";
// import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { Searchbar } from "react-native-paper";



export const RestaurantScreen = () {
return (
    <>
<SafeAreaView style={styles.container}>
<View style={{padding:16, backgroundColor: 'yellow'}}>
<Searchbar/>
</View>

<View style={{flex:1, padding:16, backgroundColor:'red'}}>

</View>

<StatusBar style = "auto" />
</SafeAreaView>
</>
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