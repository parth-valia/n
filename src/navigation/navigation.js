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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListNoteScreen from '../screens/listnotescreen';
import CreateNoteScreen from '../screens/createnotescreen';
import EditNoteScreen from '../screens/editnotescreen';
import ShowNoteScreen from '../screens/shownotescreen';

const Navigation = () => {
    const stack = createNativeStackNavigator();
  return (
        <stack.Navigator>
            <stack.Screen
                name='ListNoteScreen'
                component={ListNoteScreen}
                options={{
                    title:'All Notes',
                    headerTitleAlign:"center",
                    headerTintColor:"white",
                    headerStyle:{
                      backgroundColor:"#305f72",
                    }
                }}
            />
            <stack.Screen
              name='CreateNoteScreen'
              component={CreateNoteScreen}
              options={{
                title:'Create Notes',
                headerTitleAlign:"center",
                headerTintColor:"white",
                headerStyle:{
                  backgroundColor:"#305f72"
                }
              }}
            />
            <stack.Screen
              name='EditNoteScreen'
              component={EditNoteScreen}
              options={{
                title:'Edit Notes',
                headerTitleAlign:"center",
                headerTintColor:"white",
                headerStyle:{
                  backgroundColor:"#305f72"
                }
              }}
            />
            <stack.Screen
              name='ShowNoteScreen'
              component={ShowNoteScreen}
              options={{
                title:'Notes',
                headerTitleAlign:"center",
                headerTintColor:"white",
                headerStyle:{
                  backgroundColor:"#305f72"
                }
              }}
            />
        </stack.Navigator>
  )
}

export default Navigation;