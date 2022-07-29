import React,{createContext,useReducer} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NoteReducer,initState } from '../reducer/NoteReducer';

export const NoteContext = createContext();

export const NoteProvider =({children})=>{
    const [state,dispatch] = useReducer(NoteReducer,initState)
    return(
        <NoteContext.Provider value={{state,dispatch}}>
            {children}
        </NoteContext.Provider>
    )
};