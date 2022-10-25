import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { Account_active, Card_active, Chat_active, Home_active } from '../../assets'

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () =>{
    if(label === 'Home') return <Home_active/>
    if(label === 'Kartu Peserta') return <Card_active/>
    if(label === 'FAQ') return <Chat_active/>
    if(label === 'Profil') return <Account_active/>
    return <Home_active/>
  }
  return (
    <TouchableOpacity
    style={styles.container}
    onPress={onPress}
    onLongPress={onLongPress}
  >
    <Text style={styles.text}>
      {label}
    </Text>
  </TouchableOpacity>
  )
}

export default TabItem

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        alignContent:'center'
    },
    text:{
        fontSize:'13px'
    },
    icon:{
        width:'20px'
    }
})