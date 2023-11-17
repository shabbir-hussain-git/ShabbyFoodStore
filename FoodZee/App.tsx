/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  StyleSheet
} from 'react-native';

import Main from './EntryPoint/Main';
import FDColor from './Colors/FDColor';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const statusBarColor = {
    backgroundColor: FDColor.statusBarColor,
    
  };

  const x = {
    todo:{
        todoText:"Go To Gym"
    },
    editTodoItem:(todo:any)=>{
        return todo;
    },
    deleteTodoItem:(todo:any)=>{
        return todo;
    }
}

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={statusBarColor.backgroundColor}
      />
      <Main></Main>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root:{
    backgroundColor:FDColor.statusBarColor,
    height:"100%",
    width:"100%"
  }
})

export default App;
