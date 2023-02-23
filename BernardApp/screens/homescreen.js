import React, {useEffect, useState} from 'react';
import 
{
Text,
View, 
StyleSheet,
TouchableOpacity,
} 
from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
      gap:20,
      flexWrap:'wrap', 
      flexDirection:'row',
      top:30,
    },
    box:{
      width:100,
      height:100,
      backgroundColor:"orange",
      borderRadius:15,
      justifyContent:'center', 
      alignItems:'center',
    },
    homeScreenText:{
  
      textAlign:'center',
      fontSize:30,
      fontWeight:'bold',
      marginBottom:20,
      
    },
    today:{
      marginTop:30,
      width:340,
      height:400,
      backgroundColor:'orange',
      borderRadius:15,
      flex:1,
      justifyContent:'center',
    },
 
  })



const HomeScreen= ({navigation})=> {
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
      setInterval(() => setDateState(new Date()), 1000);
    }, []);
  
    const day = days[dateState.getDay()];
    const dayofthemonth = dateState.getDate();
    const month = months[dateState.getMonth()];
    const year = dateState.getFullYear();
    const hours = dateState.getHours();
    const minutes = dateState.getMinutes();
    const seconds = dateState.getSeconds();
  
  
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Weather")}> 
        <View style={styles.box}><Text>Weather</Text></View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Dice")}> 
        <View style={styles.box}><Text>Dice</Text></View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ToDo")}> 
        <View style={styles.box}><Text>To-Do</Text></View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("News")}>
        <View style={styles.box} ><Text>News</Text></View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Currency")}> 
        <View style={styles.box}>
          <Text>Currency</Text>
          <Text>Converter</Text>
        </View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("CheatSheet")}> 
        <View style={styles.box}>
          <Text>Programming</Text>
          <Text>CheatSheet</Text>
        </View> 
      </TouchableOpacity>
  
      <View style={styles.today}>
        <Text style={styles.homeScreenText}>{day}</Text>
        <Text style={styles.homeScreenText}>{month} {dayofthemonth} {year}</Text>
        <Text style={styles.homeScreenText}>{hours}:{minutes}:{seconds}</Text>
  
      </View>
    </View>
  
    );
  };

  export default HomeScreen;