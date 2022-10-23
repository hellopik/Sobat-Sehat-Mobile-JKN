import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import { Provider as StoreProvider } from 'react-redux'
import store from './redux/store';

const App = () => {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
    </StoreProvider>
  )
}

const styles = StyleSheet.create({})

export default App