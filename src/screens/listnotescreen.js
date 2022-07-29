import React,{useContext} from 'react';
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
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import styles from '../styles/styles';
import { NoteContext } from '../context/NoteContext';

const ListNoteScreen = ({navigation}) => {
    const {state,dispatch} = useContext(NoteContext);
  return (
    
      <View style={styles.listcontainerview}>
        <FlatList
        data={state}
        renderItem={({item})=>{
          return(
            <TouchableOpacity 
              activeOpacity={0.8}
              style={styles.listcontainerview}
              onPress={()=>{navigation.navigate('ShowNoteScreen',{id:item.id})}}
            >
            <View style={styles.listview}>
              <Text style={styles.listtext}>{item.title}</Text>
              <View style={{backgroundColor:"#305f72",padding:10,borderRadius:25}}>
                <Icon
                  name='delete'
                  size={25}
                  color='white'
                  onPress={()=>{dispatch({type:"delete",payload:item.id})}}
                />
              </View>
            </View>
          </TouchableOpacity>           
          )
        }}
        />
        <Icon
          name='plus'
          size={40}
          color='white'
          style={styles.iconstyle}
          onPress={()=>{navigation.navigate("CreateNoteScreen")}}
        />
      </View>
     
  )
}

export default ListNoteScreen ;