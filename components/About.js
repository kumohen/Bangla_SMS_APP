import React from 'react';
import {View,Text,StyleSheet,Image} from "react-native";
import {HeaderButtons,Item} from "react-navigation-header-buttons";
import HeaderButton from "./HeaderButton";



const About = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.items}>
            <Text style={styles.textStyle}>My name is Mohen mondal</Text>
            <Text style={styles.textStyle}>I like to work on react</Text>
            <Text style={styles.textStyle}> copyright @2019 </Text>
            </View>
        </View>
    );
};

About.navigationOptions = navData => {
    return {
    headerTitle:'About',
    headerStyle: {
        backgroundColor: '#689BBD'
      },
 
    headerLeft:(
        <HeaderButtons  HeaderButtonComponent={HeaderButton} >
        <Item title="menu" iconName={"md-menu"} onPress={() => navData.navigation.toggleDrawer()} />
        </HeaderButtons>
       )
    }
}

const styles = StyleSheet.create({
   container:{
       backgroundColor:"#9ECFAD",
       flex:1
   },
   items:{
     marginTop:100,  
     alignItems:"center"
   },
   textStyle:{
       marginLeft:15,
       marginTop:3,
       fontSize:16
   }
})

export default About;