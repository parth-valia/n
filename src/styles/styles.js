import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Appearance
} from 'react-native';



const styles = StyleSheet.create({
    containerview:{
        flex:1,
        alignItems:'center',
        justifyContent:"center",
    },
    listcontainerview:{
      flex:1
    },
    listview:{
      backgroundColor:'white',
      margin:10,
      padding:10,
      elevation:10,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:'space-between',
    },
    listtext:{
      fontSize:18,
      color:"black",
      marginHorizontal:10
    },
    iconstyle:{
      position:"absolute",
      right:20,
      bottom:20,
      elevation:10,
      backgroundColor:"#305f72",
      borderRadius:25,
      padding:5
    },
    createnotecontainer:{
      flex:1,
      margin:10,
      padding:10,
      top:20 
    },
    createnotebuttonview:{
      alignItems:'center',
      marginTop:50,
      backgroundColor:"#305f72",
      borderRadius:30
    },
    createnotetextstyle:{
      color:"white",
      fontSize:25,
      padding:10
    }
})

export default styles;