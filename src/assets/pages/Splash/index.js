import { StyleSheet, ImageBackground, Image, Text} from 'react-native'
import React, {useEffect} from 'react'
import { logo, sobatsehat, splash } from '../../assets'

const Splash = ({ navigation }) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('MainApp')
        },60)
    },[navigation])
  return (
    <ImageBackground source={splash} style={styles.background}>
        <Image source={logo} style={styles.image}/>
        <Text style={styles.logosobatsehat}>X</Text>
        <Text style={styles.logosobatsehat}>Sobat Sehat</Text>
    </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({
    background: {
        flex:1, 
        justifyContent:'center', 
        alignItems:'center' ,
        backgroundColor:'#1a1a40'     
    },
    image : {
        width: 100,
        height: 60
    },
    logosobatsehat: {
        color:'white', 
        fontWeight:'bold',
        fontSize:20, 
        textShadowColor: 'rgba(0, 0, 0, 0.75)', 
        textShadowOffset: {width: -1, height: 1}, 
        textShadowRadius: 10
    }
})