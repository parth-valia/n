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
import { TextInput } from 'react-native-paper';
import styles from '../styles/styles';
import { NoteContext } from '../context/NoteContext';

const EditNoteScreen = ({navigation,route}) => {
    const {state,dispatch} = useContext(NoteContext) 
    const {id} = route.params
    const note = state.find((note)=>{
        return note.id === id
    })
    const[title,setTitle] = useState(note.title)
    const[content,setContent] = useState(note.content)
    
  return (
    <View style={styles.createnotecontainer}>
      <TextInput
        label={" Title "}
        value={title}
        mode='outlined'
        activeUnderlineColor='#305f72'
        activeOutlineColor='#305f72'
        onChangeText={(text)=>{setTitle(text)}}
      />
      <TextInput
        label={" Content "}
        value={content}
        mode='outlined'
        style={{marginTop:30}}
        numberOfLines={3}
        multiline={true}
        activeUnderlineColor='#305f72'
        activeOutlineColor='#305f72'
        onChangeText={(text)=>{setContent(text)}}
      />
        <TouchableOpacity 
            style={styles.createnotebuttonview} 
            activeOpacity={0.8} 
            onPress={()=>{dispatch({type:'edit',payload:{id,title,content}}),navigation.navigate('ListNoteScreen')}}
        >
            <Text style={styles.createnotetextstyle}>Edit</Text>
        </TouchableOpacity>
    </View>
  )
}

export default EditNoteScreen