import React,{useState, useEffect} from 'react';
import 
{
Text,
View, 
StyleSheet,
Image,
} 
from 'react-native';
import { getWeather, showWeather, getLocation } from 'react-native-weather-api';

const styles = StyleSheet.create({
    weatherText:{
      marginBottom:20,
      fontSize:30,
    },
    weatherLocation:{
      fontSize:50,
      textAlign:'center',
    },
  })

const Weather = () =>{

    const[info,setInfo] = useState([]);
  
    useEffect(()=>{ 
      getLocation().then((location) => {  
        getWeather({
      
        key: "e2b7ee1c91ab1ea05668cce1dbd023a5",
        lat: location.coords.latitude,
        lon: location.coords.longitude,
        unit: "metric"
      
        })
        .then(() => {
        let all = new showWeather();  
          setInfo(all)
          console.log(all)
          return info;
        });
    });
  },[])
   
  return(
  <>
    <View>
    <Image source={{uri: `${info.icon}`}} style={{width:100, height:100,}}></Image>
      <Text style={styles.weatherLocation}>{info.name}</Text>
    </View>
  
      <View style={{ display:'flex', alignItems:'center', justifyContent:'center', marginTop:50,}}>
        <View style={{width:250,height:250, display:'flex', alignItems:'center', }}>
          <Text style={styles.weatherText}>Max: {info.temp_max} C </Text>
          <Text style={styles.weatherText}>Min: {info.temp_min} C</Text> 
          <Text style={styles.weatherText}>Wind: {info.wind} m/s </Text> 
          <Text style={styles.weatherText}>Humidity: {info.humidity} %</Text> 
        </View>
      </View>
    </>
  
  )};
  export default Weather;