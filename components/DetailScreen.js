import React,{useEffect} from 'react';
import {View,Text,StyleSheet,ScrollView} from "react-native";
import jsondata from "../data/data.json";
import {HeaderButtons,Item} from "react-navigation-header-buttons";
import HeaderButton from "./HeaderButton";


const DetailScreen = (props) => {
    const id = props.navigation.getParam("id");
    const gettitle = props.navigation.getParam("title");
    
    useEffect(()=>{
        props.navigation.setParams({title:gettitle})
    },[gettitle]);
    const findItem = jsondata.find(item => item.id === id);
  
    const jokes = findItem.jokes;

   
    const listItem = () => {
         return jokes.map(item => {
             return(
                 <View key={item.text} style={styles.viewElement}>
                 <Text style={styles.textStyle}>{item.text}</Text>
                 </View>
             )
         })
   
       }
    return (
        <ScrollView style={styles.container}>
             
             {listItem()}
          
        </ScrollView>
    );
};
DetailScreen.navigationOptions = navData => {
    const title = navData.navigation.getParam("title");
    return {
        headerTitle:title,
    headerStyle: {
        backgroundColor: '#689BBD'
      }
   
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#DAAD4F"
    },
    viewElement:{
        backgroundColor:"#4390C3",
        margin:10,
        borderRadius:10,
        padding:10
    },
    textStyle:{
        fontSize:17,
        color:"white",
        textAlign:"justify"
    }
})

export default DetailScreen;