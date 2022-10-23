import { Dimensions, StyleSheet, Text, View, ScrollView, Image, ImageBackground, TouchableOpacity} from 'react-native'
import React, {useState, useMemo} from 'react'
import { antrean, headerbg, infojkn, konsultasi, lainnya, logo, lokasifaskes, peserta, registrasi, tempattidur, bannerslider, autodebet} from '../../assets'
import Carousel, {Pagination} from 'react-native-snap-carousel';
import { Button } from 'react-native-paper';

import Ionicons from 'react-native-vector-icons/Ionicons'

const menu = [
  {
    key:"info_jkn",
    title:"Info Program JKN",
    icon: infojkn
  },
  {
    key:"lokasi_faskes",
    title:"Info Lokasi Faskes",
    icon: lokasifaskes
  },
  {
    key:"tempat_tidur",
    title:"Info Ketersediaan Tempat Tidur",
    icon: tempattidur
  },
  {
    key:"registrasi",
    title:"Pendaftaran Peserta Baru",
    icon: registrasi
  },
  {
    key:"info_peserta",
    title:"Info Peserta",
    icon: peserta
  },
  {
    key:"antrean",
    title:"Pendaftaran Pelayanan (Antrean)",
    icon: antrean
  },
  {
    key:"konsultasi_dokter",
    title:"Konsultasi Dokter",
    icon: konsultasi
  },
  {
    key:"lainnya",
    title:"Menu Lainnya",
    icon:lainnya
  }
]

const pills = [
  {
    key:'semua',
    text:'Semua'
  },
  {
    key:'tipsehat',
    text:'Tips Sehat'
  },
  {
    key:'gayahidup',
    text:'Gaya Hidup'
  },
  {
    key:'berita',
    text:'Berita'
  },
  {
    key:'testimoni',
    text:'Testimoni'
  }       
]

const renderCarousel = ({item, index}, remark) =>{
  return(
    <View style={{
      borderRadius: 20,
      width:windowWidth*0.8,
      height: windowHeight*0.2,
      borderColor:'black',
      backgroundColor:'black',
      overflow:'hidden',
      marginHorizontal:1
      }}>
        <ImageBackground source={remark === 'satu' ? bannerslider : autodebet} style={{
          width:'100%', height:'100%'
        }}>
        </ImageBackground>
  </View>    
  )
}

const Home = ({navigation}) => {
  const [carouselItem, setCarouselItem] = useState([
    {
        title:"Item 1",
        text: "Text 1",
    },
    {
        title:"Item 2",
        text: "Text 2",
    },
    {
        title:"Item 3",
        text: "Text 3",
    },
    {
        title:"Item 4",
        text: "Text 4",
    },
    {
        title:"Item 5",
        text: "Text 5",
    }
  ]);  
  const [activeSlide, setActiveSlide] = useState(0)
  const [activePills, setActivepills] = useState('semua')
  const memoizedValue = useMemo(() => renderCarousel, [carouselItem]);
  return (
    <ScrollView style={{flexDirection:'column', flex:1, backgroundColor:'white', alignContent:'space-between'}} showsVerticalScrollIndicator={false}>
      <View style={{flex:3, width:'100%'}}>
        <ImageBackground source={headerbg} style={styles.headerbg}>
          <View style={styles.logocontainer}>
            <Image source={logo} style={styles.logo}/>
            <Text style={styles.textsobat}>X Sobat Sehat</Text>         
          </View>
        </ImageBackground>
      </View>
      <View style={{flex:1, width:'100%'}}>
        <View style={styles.containersign}>
          <Ionicons name='log-in-outline' style={styles.iconsign}/>
          <Text style={styles.textsign}>Masuk/Daftar</Text>
        </View>
      </View>         
      <View style={{flex:15, backgroundColor:'white', width:'100%', padding:10}}>
        <View style={{flexDirection:'row',flexWrap:'wrap', justifyContent:'space-between'}}>
          {
            menu.map((el,index)=>{
              return(
                <TouchableOpacity key={el.key} 
                onPress={() =>
                  navigation.navigate('Antrean', { name: 'Jane' })
                }                
                >
                  <View style={{
                  flexDirection:'column',
                  justifyContent:'center',
                  width:windowWidth*0.17,
                  height:windowHeight*0.17,
                  margin:5              
                  }}>
                    <View style={{
                    flex:1, 
                    marginBottom:10, 
                    width:'100%', 
                    height:'100%', 
                    alignItems:'center',
                    justifyContent:'center'
                    }}>
                      <Image 
                      source={el.icon} style={{
                        width:windowWidth*0.14,
                        height:windowHeight*0.07
                      }}/>
                    </View>
                    <View style={{flex:1}}>
                      <Text style={{
                        textAlign:'center',
                        fontSize:10.8
                      }}>{el.title}</Text>   
                    </View>                  
                  </View>                    
                </TouchableOpacity>             
              )
            })
          }          
        </View>
        <View style={{justifyContent:'center', alignItems:'center'}}>
            <Carousel
              layout={'default'}
              data={carouselItem}
              renderItem={(item)=>memoizedValue(item, 'satu')}
              sliderWidth={windowWidth}
              itemWidth={windowWidth*0.8}
              onSnapToItem={(index) => setActiveSlide(index) }
              loop={true}
              autoplay={true}
              autoplayInterval={2000}             
            />  
            <Pagination
              dotsLength={carouselItem.length}
              activeDotIndex={activeSlide}
              containerStyle={{ width:windowWidth, paddingVertical:10}}
              dotContainerStyle={{
                marginHorizontal:1
              }}
              dotStyle={{
                  width: 6,
                  backgroundColor:'#2496d4',
                  height: 6,
                  borderRadius: 5,
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={1}
            />                    
        </View>
        <View>
          <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:10}}>
            <Text style={{fontWeight:'bold', fontSize:15}}>Artikel</Text>
            <Text style={{fontWeight:'bold', fontSize:15, color:'grey'}}>Lihat Semua</Text>
          </View>
          <ScrollView horizontal={true} style={{flexDirection:'row', paddingTop:10}} showsHorizontalScrollIndicator={false}>    
          {
            pills.map((el,index)=>{
              return(
                <Button 
                onPress={()=>setActivepills(el.key)}
                key={el.key} mode='outlined' 
                style={{borderRadius:100, marginHorizontal:5,
                backgroundColor:activePills === el.key ? '#2496d4' : 'white'
                }}
                labelStyle={{marginVertical:5,
                color:activePills === el.key ? 'white' : '#2496d4'
                }}
                compact={true}
                >
                  {el.text}
                </Button>                  
              )
            })
          }                 
          </ScrollView> 
          <View style={{justifyContent:'center', alignItems:'center', padding:30}}>
              <Carousel
                  layout={'default'}
                  data={carouselItem}
                  renderItem={renderCarousel}
                  sliderWidth={windowWidth}
                  itemWidth={windowWidth*0.8}
                  onSnapToItem={(index) => setActiveSlide(index) }
                  loop={true}
                  autoplay={true}
                  autoplayInterval={2000}             
                />           
          </View>                    
        </View>        
      </View>       
    </ScrollView>
  )
}

export default Home

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page:{
    flex:1,
    backgroundColor:'white'  
  },
  headerbg:{
    width:windowWidth,
    height:windowHeight*0.16,
    paddingTop:30,
  },
  logocontainer:{
    flexDirection:'row', 
    flexWrap:'wrap', 
    alignItems:'center', 
    marginBottom:30,
    paddingLeft:15
  },
  logo:{
    width:windowWidth*0.2, 
    height:windowHeight*0.09
  },
  textsobat:{
    color:'white', 
    fontWeight:'bold',
    fontSize:17, 
    textShadowColor: 'rgba(0, 0, 0, 0.75)', 
    textShadowOffset: {width: -1, height: 1}, 
    textShadowRadius: 10
  },
  containersign:{
    flexDirection:'row',
    paddingLeft:8
  },
  iconsign:{
    fontSize:20,
    marginRight:5
  },
  textsign:{
    fontWeight:'bold'
  },
  iconlayanan : {
    resizeMode:'cover',
    width:'100%', 
    height:'100%'   
  }
})