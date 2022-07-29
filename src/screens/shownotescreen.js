import React,{useState,useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/styles';
import { NoteContext } from '../context/NoteContext';

const ShowNoteScreen = ({route,navigation}) => {
    const {state,dispatch} =useContext(NoteContext)
    const {id} = route.params
    const notes = state.find((note)=>{
        return note.id == id
    })
  return (
    <View style={{margin:10}}>
        <View style={{...styles.listview,alignItems:'flex-start',flexDirection:'column'}}>
            <Text style={{...styles.listtext,fontSize:25,fontWeight:'600',marginVertical:5}}>Title :</Text>
            <Text style={{...styles.listtext,marginHorizontal:15}}>{notes.title}</Text>
        </View>
        <View style={{...styles.listview,alignItems:'flex-start',flexDirection:'column'}}>
            <Text style={{...styles.listtext,fontSize:25,fontWeight:'600',marginVertical:5}}>Content :</Text>
            <Text style={{...styles.listtext,marginHorizontal:15}}>{notes.content}</Text>
        </View>
      
      <TouchableOpacity 
            style={{...styles.createnotebuttonview,marginHorizontal:30,}} 
            activeOpacity={0.8} 
            onPress={()=>{navigation.navigate('EditNoteScreen',{id})}}
        >
            <Text style={styles.createnotetextstyle}>Edit</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ShowNoteScreen