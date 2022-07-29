import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import styles from './src/styles/styles';
import Navigation from './src/navigation/navigation';
import ListNoteScreen from './src/screens/listnotescreen';
import { NoteProvider } from './src/context/NoteContext';



const App = () => {
  return (    
      <NavigationContainer >
        <NoteProvider>
          <Navigation/>   
        </NoteProvider>
      </NavigationContainer>  
  )
}

export default App ;