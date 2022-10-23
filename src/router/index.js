import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home, KartuPeserta, FAQ, Profil, Splash} from '../pages'
import { BottomNavigator } from '../components';
import { Home_active } from '../assets';
import { logo } from '../assets';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Antrean from '../pages/Antrean';
import DetailRiwayat from '../pages/DetailRiwayat';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return(
        <Tab.Navigator style={styles.container} screenOptions={{
          labelStyle : {fontSize:12}
        }}>
            <Tab.Screen name="Home" component={Home} options={{headerShown: false, tabBarIcon:({focused, color, size}) => (
                    <Ionicons name='home' size={size*0.7} color={color}/>
            )}}/>
            <Tab.Screen name="Kartu Peserta" component={KartuPeserta} options={{headerShown: false, tabBarIcon:({focused, color, size}) => (
                    <Ionicons name='card-outline' size={size*0.7} color={color}/>
            )}}/>
            <Tab.Screen name="FAQ" component={FAQ} options={{headerShown: false, tabBarIcon:({focused, color, size}) => (
                    <Ionicons name='chatbubbles-outline' size={size*0.7} color={color}/>
            )}}/>
            <Tab.Screen name="Profil" component={Profil} options={{headerShown: false, tabBarIcon:({focused, color, size}) => (
                    <Ionicons name='people-circle-outline' size={size*0.7} color={color}/>
            )}}/>           
        </Tab.Navigator>
    )
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>        
        <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}}/>
        <Stack.Screen name="Antrean" component={Antrean} options={{headerShown: false}}/>
        <Stack.Screen name="Detailriwayat" component={DetailRiwayat} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})