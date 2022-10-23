import { View, Text, ImageBackground, Dimensions, TouchableOpacity, useWindowDimensions, ScrollView, StyleSheet} from 'react-native'
import React, {useState,} from 'react'
import { headerbgblur } from '../../assets'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TabView, SceneMap , TabBar} from 'react-native-tab-view';
import SelectDropdown from 'react-native-select-dropdown'
import { Button, TextInput} from 'react-native-paper';
import { useSelector, useDispatch} from 'react-redux'
import moment from 'moment'
import { useNavigation} from '@react-navigation/native';
import { ADD_CHAT_BY_ID, ADD_CONVERSATION } from '../../redux/chat';
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FirstRoute = (props) => {
    const [peserta, setPeserta] = useState(["SUGENG RIYADI (0000005463748)"])
    const [faskes, setFaskses] = useState([
      {
        nama:'Klinik Pratama Bahagia',
        alamat:'JL. JENGKI No 5C',
        telepon:'021-012323434'
      }
    ])
    const [poli, setPoli] = useState(["POLI UMUM","POLI GIGI"])
    const [tgldaftar, setTgldaftar] = useState([`Hari Ini (${moment().format('DD-MM-YYYY')})`, `Besok (${moment().add(1,'days').format('DD-MM-YYYY')})`, `Lusa (${moment().add(2,'days').format('DD-MM-YYYY')})`])
    const [dokter, setDokter] = useState([
      {
        nama:'MUHAMMAD FAKRI FADLI',
        jamoperasional:'00.00 - 12.00',
        status:'BUKA'
      }
    ])
    return(
      <ScrollView contentContainerStyle={{alignItems:'center'}} style={{ flex: 1, backgroundColor: 'white', flexDirection:'column', paddingTop:10, paddingHorizontal:20}}>
        <View style={{flexDirection:'column', paddingTop:10}}>
          <Text style={{paddingLeft:5, paddingBottom:5, fontWeight:'bold', color:'#2496d4'}}>Peserta</Text>
          <SelectDropdown
          disabled={true}
          data={peserta}
          defaultValueByIndex={0}
          selectedRowStyle={{
            backgroundColor:'white'
          }}
          rowStyle={{backgroundColor:'white'}}
          buttonStyle={{
            width: '95%',
            height: 45,
            backgroundColor: '#FFF',
            borderRadius: 8,
            // borderWidth: 1,
            borderColor: '#2496d4'
          }}
          buttonTextStyle={{
            textAlign:'left',
            marginHorizontal:0,
            fontSize:15
          }}     
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
          }}
          />      
        </View> 
        <View style={{flexDirection:'column', paddingTop:10}}>
          <Text style={{paddingLeft:5, paddingBottom:5, fontWeight:'bold', color:'#2496d4'}}>Faskes Tingkat Pertama</Text>
          <SelectDropdown
          data={faskes}
          defaultValueByIndex={0}
          disabled={true}
        //   renderDropdownIcon={isOpened => {
        //     return <Ionicons name={isOpened ?'chevron-up-circle-outline': 'chevron-down-circle-outline'} style={{fontSize:30, color:'#2496d4'}}/>  ;
        //   }}   
          // defaultValueByIndex={0}
          selectedRowStyle={{
            backgroundColor:'white'
          }}
          rowStyle={{backgroundColor:'white'}}
          buttonStyle={{
            width: '95%',
            height: windowHeight*0.13,
            backgroundColor: '#FFF',
            paddingHorizontal:3,
            // borderRadius: 8,
            // borderWidth: 1,
            // borderColor: '#2496d4'        
          }}
          renderCustomizedButtonChild={(selectedItem, index) => {
            return (
              <View style={{flexDirection:'column',
              borderRadius: 8,
            //   borderWidth: 1,
              borderColor: '#2496d4',
              width:'95%'            
              }}>
                {
                  selectedItem ? (
                    <View>
                    <View style={{
                      borderRadius: 10,
                      borderBottomWidth: 1,
                      borderColor: '#2496d4',
                      alignItems:'center',
                      padding:5
                    }}>
                      <Text>{selectedItem?.nama}</Text>                
                    </View>
                    <View style={{flexDirection:'column', padding:5}}>
                      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                      <Text>Alamat</Text> 
                      <Text>{selectedItem?.alamat}</Text> 
                      </View>
                      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                      <Text>Telepon</Text> 
                      <Text>{selectedItem?.telepon}</Text> 
                      </View>                               
                    </View>
                    </View>
                  ) : (
                    <View style={{padding:20}}>
                      <Text>Harap Pilih Faskes</Text>
                    </View>                    
                  )                
                }
              </View>            
            );
          }}        
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item.nama
          }}       
          />      
        </View>   
        <View style={{flexDirection:'column', paddingTop:10}}>
          <Text style={{paddingLeft:5, paddingBottom:5, fontWeight:'bold', color:'#2496d4'}}>Poli</Text>
          <SelectDropdown
          data={poli}
          disabled={true}
          defaultValueByIndex={0}
          selectedRowStyle={{
            backgroundColor:'white'
          }}
          rowStyle={{backgroundColor:'white'}}
          buttonStyle={{
            width: '95%',
            height: 45,
            backgroundColor: '#FFF',
            borderRadius: 8,
            // borderWidth: 1,
            borderColor: '#2496d4'
          }}
          buttonTextStyle={{
            textAlign:'left',
            marginHorizontal:0,
            fontSize:15
          }}     
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
          }}
          />      
        </View> 
        {/* <View style={{flexDirection:'column', paddingTop:10}}>
          <Text style={{paddingLeft:5, paddingBottom:5, fontWeight:'bold', color:'#2496d4'}}>Tanggal Daftar</Text>
          <SelectDropdown
          data={tgldaftar}
          disabled={true}
          defaultValueByIndex={0}
          selectedRowStyle={{
            backgroundColor:'white'
          }}
          rowStyle={{backgroundColor:'white'}}
          buttonStyle={{
            width: '95%',
            height: 45,
            backgroundColor: '#FFF',
            borderRadius: 8,
            // borderWidth: 1,
            borderColor: '#2496d4'
          }}
          buttonTextStyle={{
            textAlign:'left',
            marginHorizontal:0,
            fontSize:15
          }}      
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
          }}
          />      
        </View>     */}
        <View style={{flexDirection:'column', paddingTop:10}}>
          <Text style={{paddingLeft:5, paddingBottom:5, fontWeight:'bold', color:'#2496d4'}}>Dokter</Text>
          <SelectDropdown
          data={dokter}
          disabled={true}
          defaultValueByIndex={0}
          selectedRowStyle={{
            backgroundColor:'white'
          }}
          rowStyle={{backgroundColor:'white'}}
          buttonStyle={{
            width: '95%',
            height: windowHeight*0.08,
            backgroundColor: '#FFF',
            borderRadius: 8,
            // borderWidth: 1,
            borderColor: '#2496d4'
          }}
          buttonTextStyle={{
            textAlign:'left',
            marginHorizontal:0,
            fontSize:15
          }}    
          renderCustomizedButtonChild={(selectedItem, index) => {
            return (
              <View>
                {
                  selectedItem ? (
                    <View style={{flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    width:'95%'            
                    }}>                  
                    <View style={{flex:1}}>
                      <Text>{selectedItem?.nama}</Text>
                    </View>
                    <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end'}}>
                      <Text style={{marginRight:10}}>{selectedItem?.jamoperasional}</Text>
                      <Text style={{color:selectedItem?.status === 'TUTUP' ? 'red' : 'green', fontWeight:'bold'}}>{selectedItem?.status}</Text>
                    </View> 
                    </View>                                    
                  ) : (
                    <View>
                      <Text>Harap Pilih Jadwal</Text>
                    </View>
                  )
                } 
                </View>            
            );
          }}          
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item.nama
          }}
          />      
        </View>  
        <View style={{flexDirection:'column', paddingTop:10, width:'95%'}}>
            <Text style={{paddingLeft:5, paddingBottom:5, fontWeight:'bold', color:'#2496d4'}}>Keluhan</Text>
            <TextInput
            value={props.keluhan}
            mode="outlined"
            style={{width:'100%', backgroundColor:'white'}}
            outlineColor='white'
            activeOutlineColor='white'
            />              
        </View>                           
    </ScrollView>    
    )      
}

const SecondRoute = (props) => {
    const [msg, setMsg] = useState('')
    const [chatNew, setChatNew] = useState([])
    const chat = useSelector(state=>state.chat).filter((el)=>el.id === props.id)[0] ? useSelector(state=>state.chat).filter((el)=>el.id === props.id)[0].chat : chatNew 
    return(
        <View style={{flex:1, flexDirection:'column', backgroundColor:'white'}}>
            <View style={{flex:7, backgroundColor:'white', flexDirection:'column', padding:10}}>
                {
                    chat.map((el, index)=>{
                        return(
                            <View key={index} style={{flex:1, flexDirection:'row', marginVertical:10}}>
                                {
                                    el.from === 'patient' ? "" : 
                                    <View style={{flex:1, backgroundColor:'white', justifyContent:'center', height:windowHeight*0.1, alignItems:'center'}}>
                                        <Ionicons name='medkit-outline' style={{fontSize:30, color:'black'}}/>
                                    </View>
                                }
                                <View style={{flex:10, backgroundColor:'#2496d4', borderRadius:15, padding:20, marginHorizontal:10, height:windowHeight*0.1, justifyContent:'center'}}>
                                    <Text style={{fontSize:14, color:'white', textAlign:el.from === 'patient' ? 'right' : 'left'}}>{el.chat}</Text>
                                </View>
                                {
                                    el.from === 'doctor' ? "" : 
                                    <View style={{flex:1, backgroundColor:'white', justifyContent:'center', height:windowHeight*0.1, alignItems:'center'}}>
                                        <Ionicons name='person-outline' style={{fontSize:30, color:'black'}}/>
                                    </View>                                    
                                }
                            </View>
                        )
                    })
                }
            </View>
            <View style={{flex:1,flexDirection:'row', backgroundColor:'white', marginBottom:10}}>           
                <View style={{flex:5, padding:20, justifyContent:'center'}}>
                    <TextInput 
                    disabled={props.status === 'Proses Konsultasi' ? false : true}
                    value={msg}
                    onChangeText={msg => setMsg(msg)}
                    mode='outlined'/>
                </View>
                <View style={{flex:1, justifyContent:'center'}}>
                    <TouchableOpacity
                    onPress={()=>{
                        setMsg('')
                        setChatNew(
                            [
                                {
                                    from:'patient',
                                    chat:msg
                                }
                            ]                            
                        )
                    }}
                    >
                        <Ionicons name='paper-plane-outline' style={{fontSize:30, color:'black'}}/>                     
                    </TouchableOpacity> 
                </View>
                <View style={{flex:1, justifyContent:'center'}}>
                    <Ionicons name='attach-outline' style={{fontSize:30, color:'black'}}/>
                </View>                         
            </View>        
        </View>        
    )
}

// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute
// });

const renderScene = ({ route }, props) => {
  switch (route.key) {
    case 'first':
      return <FirstRoute keluhan={props.keluhan}/>;
    case 'second':
      return <SecondRoute id={props.id} status={props.status}/>;
    default:
      return null;
  }
};

const renderTabBar = props => (
  <TabBar
    {...props}
    style={{backgroundColor:'white'}}
    renderLabel={({ route, focused, color }) => (
      <Text style={{fontSize:13, textAlign:'center', fontWeight:'bold', color:'#2496d4'}}>
        {route.title}
      </Text>
    )}  
    indicatorStyle={{
      backgroundColor:'#2496d4'
    }}
  />
);

const DetailRiwayat = (props) => {
  const navigation = useNavigation()
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'first', title: 'Detail Pengajuan' },
    { key: 'second', title: 'Konsultasi' }
  ])  
  return (
    <View style={{flex:1, flexDirection:'column'}}>
      <View style={{flex:1}}>
        <ImageBackground source={headerbgblur} style={{width:windowWidth, height:windowHeight*0.15, justifyContent:'center'}}>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:20}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Ionicons name='arrow-back' style={{fontSize:30, color:'white'}}/>              
            </TouchableOpacity>
            <Text style={{fontSize:14 , color:'white'}}>Detail Pengajuan Rekomendasi</Text>
            <Ionicons name='wifi' style={{fontSize:30, color:'white'}}/>
          </View>
        </ImageBackground>
      </View>
        <View style={{flex:8, backgroundColor:'pink'}}>
            <TabView
            navigationState={{ index, routes }}
            renderScene={(route)=>renderScene(route, {
                keluhan:props.route.params.keluhan,
                id:props.route.params.id,
                status:props.route.params.status
            })}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            style={{fontSize:5}}
            pagerStyle={{fontSize:5}}
            sceneContainerStyle={{fontSize:5}}
            renderTabBar={renderTabBar}
            />        
        </View>         
    </View>
  )
}

export default DetailRiwayat

const styles = StyleSheet.create({})