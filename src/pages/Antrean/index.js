import { View, Text, ImageBackground, Dimensions, TouchableOpacity, useWindowDimensions, ScrollView} from 'react-native'
import React, {useState} from 'react'
import { headerbgblur } from '../../assets'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TabView, SceneMap , TabBar} from 'react-native-tab-view';
import SelectDropdown from 'react-native-select-dropdown'
import { Button, TextInput} from 'react-native-paper';
import moment from 'moment'
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch} from 'react-redux'
import { ADD_TO_RIWAYAT } from '../../redux/riwayat';
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SecondRoute = (props) => {
  const [peserta, setPeserta] = useState(["SUGENG RIYADI (0000005463748)"])
  const [faskes, setFaskses] = useState([
    {
      nama:'Klinik Pratama Bahagia',
      alamat:'JL. JENGKI No 5C',
      telepon:'021-012323434'
    }
  ])
  const [poli, setPoli] = useState(["POLI UMUM"])
  const [tgldaftar, setTgldaftar] = useState([`Hari Ini (${moment().format('DD-MM-YYYY')})`])
  const [dokter, setDokter] = useState([
    {
      nama:'MUHAMMAD FAKRI FADLI',
      jamoperasional:'00.00 - 12.00',
      status:'BUKA'
    }
  ])
  const [keluhan, setKeluhan] = useState("")
  const dispatch = useDispatch()
  const addItemToRiwayat = item => dispatch({ type: ADD_TO_RIWAYAT, payload: item })  
  return(
    <ScrollView contentContainerStyle={{alignItems:'center'}} style={{ flex: 1, backgroundColor: 'white', flexDirection:'column', paddingTop:10, paddingHorizontal:20}}>
      <View style={{flexDirection:'column', paddingTop:10}}>
        <Text style={{paddingLeft:5, paddingBottom:5, fontWeight:'bold', color:'#2496d4'}}>Peserta</Text>
        <SelectDropdown
        data={peserta}
        defaultValueByIndex={0}
        selectedRowStyle={{
          backgroundColor:'white'
        }}
        onSelect={(item, index)=>console.log(item)}
        rowStyle={{backgroundColor:'white'}}
        buttonStyle={{
          width: '95%',
          height: 45,
          backgroundColor: '#FFF',
          borderRadius: 8,
          borderWidth: 1,
          borderColor: '#2496d4'
        }}
        buttonTextStyle={{
          textAlign:'left',
          marginHorizontal:0,
          fontSize:15
        }}
        renderDropdownIcon={isOpened => {
          return <Ionicons name={isOpened ?'chevron-up-circle-outline': 'chevron-down-circle-outline'} style={{fontSize:30, color:'#2496d4'}}/>  ;
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
        renderDropdownIcon={isOpened => {
          return <Ionicons name={isOpened ?'chevron-up-circle-outline': 'chevron-down-circle-outline'} style={{fontSize:30, color:'#2496d4'}}/>  ;
        }}   
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
            borderWidth: 1,
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
        <Text style={{paddingLeft:5, paddingBottom:5, fontWeight:'bold', color:'#2496d4'}}>Pilih Poli</Text>
        <SelectDropdown
        data={poli}
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
          borderWidth: 1,
          borderColor: '#2496d4'
        }}
        buttonTextStyle={{
          textAlign:'left',
          marginHorizontal:0,
          fontSize:15
        }}
        renderDropdownIcon={isOpened => {
          return <Ionicons name={isOpened ?'chevron-up-circle-outline': 'chevron-down-circle-outline'} style={{fontSize:30, color:'#2496d4'}}/>  ;
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
        <Text style={{paddingLeft:5, paddingBottom:5, fontWeight:'bold', color:'#2496d4'}}>Pilih Tanggal Daftar</Text>
        <SelectDropdown
        data={tgldaftar}
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
          borderWidth: 1,
          borderColor: '#2496d4'
        }}
        buttonTextStyle={{
          textAlign:'left',
          marginHorizontal:0,
          fontSize:15
        }}
        renderDropdownIcon={isOpened => {
          return <Ionicons name={isOpened ?'chevron-up-circle-outline': 'chevron-down-circle-outline'} style={{fontSize:30, color:'#2496d4'}}/>  ;
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
        <Text style={{paddingLeft:5, paddingBottom:5, fontWeight:'bold', color:'#2496d4'}}>Pilih Dokter</Text>
        <SelectDropdown
        data={dokter}
        selectedRowStyle={{
          backgroundColor:'white'
        }}
        rowStyle={{backgroundColor:'white'}}
        buttonStyle={{
          width: '95%',
          height: windowHeight*0.08,
          backgroundColor: '#FFF',
          borderRadius: 8,
          borderWidth: 1,
          borderColor: '#2496d4'
        }}
        buttonTextStyle={{
          textAlign:'left',
          marginHorizontal:0,
          fontSize:15
        }}
        renderDropdownIcon={isOpened => {
          return <Ionicons name={isOpened ?'chevron-up-circle-outline': 'chevron-down-circle-outline'} style={{fontSize:30, color:'#2496d4'}}/>  ;
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
                    <Text>Harap Pilih Dokter</Text>
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
          value={keluhan}
          mode="outlined"
          style={{width:'100%', backgroundColor:'white'}}
          outlineColor='#2496d4'
          activeOutlineColor='#2496d4'
          onChangeText={keluhan => setKeluhan(keluhan)}
        />              
      </View>  
      <View style={{paddingTop:20, width:windowWidth, alignItems:'center', marginBottom:50}}>
        <Button mode="contained" onPress={() => {
          const id = uuidv4()
          addItemToRiwayat(
            {
              id:id,
              norekom:'-',
              namadokter:'MUHAMMAD FAKRI FADLI',
              tanggalaju:'Minggu, 23 Oktober 2022',
              kategoripoli:'Poli Umum',
              status:'Proses Konsultasi',
              keluhan:keluhan,
              color:'orange'
            }          
          )
          console.log(id)
          props.jumpTo('first')          
        }} style={{width:0.8*windowWidth, backgroundColor:'#2496d4', borderRadius:50}}>
          Simpan
        </Button>
      </View>                              
  </ScrollView>    
  )  
}

const FirstRoute = (props) => {
  const riwayat = useSelector(state => state.riwayat)
  const navigation = useNavigation()
  return(
  <ScrollView style={{ flex: 1, backgroundColor: 'white', flexDirection:'column', padding:20}}>
    <View style={{marginBottom:30}}>
    {
      riwayat.map((el, index)=>{
        return(
          <View key={index} style={{
            flexDirection:'row', 
            height:windowHeight*0.3, 
            padding:10,
            marginVertical:5,
            borderWidth: 0.1,
            borderColor: '#2496d4',
            shadowColor: 'grey',
            shadowOpacity: 0.26,
            shadowOffset: { width: 0, height: 2},
            shadowRadius: 8,
            elevation: 4
            }}>
              <View style={{flex:4, padding:20, flexDirection:'column', justifyContent:'space-between'}}>
                <View style={{flexDirection:'column'}}>
                  <Text style={{fontWeight:'bold'}}>Nomor Rekomendasi</Text>
                  <Text>{el.norekom}</Text>
                </View>                
                <View style={{flexDirection:'column'}}>
                  <Text style={{fontWeight:'bold'}}>Nama Dokter</Text>
                  <Text>{el.namadokter}</Text>
                </View>
                <View style={{flexDirection:'column'}}>
                  <Text style={{fontWeight:'bold'}}>Tanggal Pengajuan</Text>
                  <Text>{el.tanggalaju}</Text>
                </View>  
                <View style={{flexDirection:'column'}}>
                  <Text style={{fontWeight:'bold'}}>Status</Text>
                  <Text style={{fontWeight:'bold', color:el.color}}>{el.status}</Text>
                </View>                        
              </View>
              <View style={{flex:2, padding:20, flexDirection:'column', justifyContent:'center', alignItems:'center'  
              }}>
                <Button icon="eye" onPress={() => 
                  navigation.navigate('Detailriwayat', el)
                } style={{backgroundColor:'white',
                borderRadius: 30,
                borderWidth: 1,
                borderColor: '#2496d4',
                marginBottom:10    
                }}>
                  <Text style={{fontSize:12, color:'#2496d4'}}>Detail</Text>
                </Button>  
                {
                  el.status === 'Proses Konsultasi' ? 
                  ""
                  :
                  <Button icon="download" style={{backgroundColor:'white',
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: '#2496d4',
                  marginBottom:10    
                  }}>
                    <Text style={{fontSize:12, color:'#2496d4'}}>Unduh</Text>
                  </Button>                  
                } 
                {
                  el.status === 'Terbit Rekomendasi' ? 
                  <Button icon="forward" style={{backgroundColor:'white',
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: '#2496d4',
                  marginBottom:10   
                  }} onPress={()=>{
                    props.jumpTo('third')   
                  }}>
                    <Text style={{fontSize:12, color:'#2496d4'}}>Lanjut</Text>
                  </Button> 
                  :
                  ""                  
                }                    
              </View>
            </View>           
        )
      })
    }      
    </View>          
  </ScrollView>    
  )
}

const ThirdRoute = () => {
  const [faskesLanjutan, setFaskesLanjutan] = useState(["RSUD Jakarta Timur"])
  const [kirim, setKirim] = useState(false)
  return(
    <View style={{flex:1, flexDirection:'column', padding:20, backgroundColor:'white'}}>
      {
        !kirim ? 
      <View style={{backgroundColor:'white', height:windowHeight*0.35,
                borderRadius:10,
                shadowColor: 'black',
                shadowOpacity: 0.26,
                shadowOffset: { width: 0, height: 2},
                shadowRadius: 8,
                elevation: 6, padding:40, flexDirection:'column',
                justifyContent:'center',
                marginBottom:20
    }}>
      <View style={{flexDirection:'column', marginBottom:10}}>
        <Text style={{fontWeight:'bold', marginBottom:5}}>Nomor Rekomendasi</Text>
        <Text>1/REKOM/10/2022</Text>
      </View>
      <View style={{flexDirection:'column', marginBottom:10}}>
        <Text style={{fontWeight:'bold', marginBottom:5}}>Faskes Pertama</Text>
        <Text>MUHAMMAD FAKRI FADLI</Text>
      </View>
      <View style={{flexDirection:'column', marginBottom:20}}>
        <Text style={{fontWeight:'bold', marginBottom:5}}>Faskes Lanjutan</Text>
        <SelectDropdown
        data={faskesLanjutan}
        defaultValueByIndex={0}
        selectedRowStyle={{
          backgroundColor:'white'
        }}
        onSelect={(item, index)=>console.log(item)}
        rowStyle={{backgroundColor:'white'}}
        buttonStyle={{
          width: '95%',
          height: 45,
          backgroundColor: '#FFF',
          borderRadius: 8,
          borderWidth: 1,
          borderColor: '#2496d4'
        }}
        buttonTextStyle={{
          textAlign:'left',
          marginHorizontal:0,
          fontSize:15
        }}
        renderDropdownIcon={isOpened => {
          return <Ionicons name={isOpened ?'chevron-up-circle-outline': 'chevron-down-circle-outline'} style={{fontSize:30, color:'#2496d4'}}/>  ;
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
      <View style={{flexDirection:'row', justifyContent:'center'}}>
        <Button mode='outlined' onPress={()=>setKirim(true)}>Kirim</Button>
      </View>          
      </View>
      :
      <View style={{backgroundColor:'white', height:windowHeight*0.35,
                borderRadius:10,
                shadowColor: 'black',
                shadowOpacity: 0.26,
                shadowOffset: { width: 0, height: 2},
                shadowRadius: 8,
                elevation: 6, padding:40, flexDirection:'column',
                justifyContent:'center'
    }}>
      <View style={{flexDirection:'column', marginBottom:10}}>
        <Text style={{fontWeight:'bold', marginBottom:5}}>Nomor Rekomendasi</Text>
        <Text>1/REKOM/10/2022</Text>
      </View>
      <View style={{flexDirection:'column', marginBottom:10}}>
        <Text style={{fontWeight:'bold', marginBottom:5}}>Faskes Pertama</Text>
        <Text>MUHAMMAD FAKRI FADLI</Text>
      </View>
      <View style={{flexDirection:'column', marginBottom:10}}>
        <Text style={{fontWeight:'bold', marginBottom:5}}>Faskes Lanjutan</Text>
        <Text>RSUD Jakarta Timur</Text>
      </View> 
      <View style={{flexDirection:'column', marginBottom:10}}>
        <Text style={{fontWeight:'bold', marginBottom:5}}>Status</Text>
        <Text style={{fontWeight:'bold', fontSize:15, color:'green'}}>Menunggu Antrian [10 Antrian]</Text>
      </View> 
      <View style={{flexDirection:'row', justifyContent:'center'}}>
        <Button icon="download" mode='outlined' onPress={()=>setKirim(true)}>Cetak Antrian</Button>
      </View>                      
      </View>  
      }    
    </View>    
  )
}

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute
});

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

const Antrean = ({navigation}) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'first', title: 'Riwayat' },
    { key: 'second', title: 'Faskes Tingkat Pertama' },
    { key: 'third', title: 'Faskes Tingkat Lanjut' },
  ])     
  return (
    <View style={{flex:1, flexDirection:'column'}}>
      <View style={{flex:2}}>
        <ImageBackground source={headerbgblur} style={{width:windowWidth, height:windowHeight*0.15, justifyContent:'center'}}>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:20}}>
            <TouchableOpacity onPress={()=>navigation.replace('MainApp')}>
              <Ionicons name='arrow-back' style={{fontSize:30, color:'white'}}/>              
            </TouchableOpacity>
            <Text style={{fontSize:14 , color:'white'}}>Pendaftaran Pelayanan (Antrean)</Text>
            <Ionicons name='wifi' style={{fontSize:30, color:'white'}}/>
          </View>
        </ImageBackground>
      </View>
      <View style={{flex:15, backgroundColor:'pink'}}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
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

export default Antrean