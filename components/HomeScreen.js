import React from 'react';
import {View,Text,Button,FlatList,StyleSheet,TouchableOpacity} from "react-native";
import {HeaderButtons,Item} from "react-navigation-header-buttons";
import HeaderButton from "./HeaderButton";
import jsondata from "../data/data.json";

const HomeScreen = (props) => {

    const renderList = (data) => {
        return(
            <TouchableOpacity onPress={() => props.navigation.navigate("Detail",{
                id:data.id,
                title:data.title
            })}>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{data.title}</Text>
            </View>
            </TouchableOpacity>    
        )
    }
 
  
    return (
        <View style={styles.container}>
            <Text >Home screen!!S </Text>
            <View style={styles.itemView}>
              < FlatList data={jsondata} keyExtractor={item => item.title}
                renderItem={({item}) => renderList(item) } />
            </View> 
        </View>
    );
};

HomeScreen.navigationOptions = navData => {
    return {
    headerTitle:'Home',
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

const  styles = StyleSheet.create({
    container:{
        backgroundColor:"#4E575C",
        flex:1
    },
    viewStyle:{
       margin:10,
       backgroundColor: '#2C98E0',
       height:30,
       borderRadius:20
    },
    textStyle:{
        
        textAlign:"center",
        paddingTop:3,
        fontSize:17,
        color:"white",
        textAlign:"center"
    }
  
})

export default HomeScreen;