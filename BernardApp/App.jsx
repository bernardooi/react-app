import React from 'react';
import { NavigationContainer, useLinknews } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './screens/homescreen';
import Weather from './screens/weather';
import Dice from './screens/dice';
import ToDo from './screens/ToDo';
import News from './screens/news';
import Currency from './screens/currency';
import CheatSheet from './screens/cheatsheet';
import HTML from './screens/HTML';
import CSS from './screens/CSS';
import JS from './screens/JS';
import REACT from './screens/React';
import HUB from './screens/cheatsheet';


const Stack = createNativeStackNavigator();

const App = () =>{  

    return (
      
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Weather" component={Weather}/>
          <Stack.Screen name="Dice" component={Dice}/>
          <Stack.Screen name="ToDo" component={ToDo}/>
          <Stack.Screen name="News" component={News}/>
          <Stack.Screen name="Currency" component={Currency}/>
          <Stack.Screen name="CheatSheet" component={CheatSheet}/> 

          <Stack.Screen name="HUB" component={HUB}/>
          <Stack.Screen name="HTML" component={HTML}/>
          <Stack.Screen name="CSS" component={CSS}/>
          <Stack.Screen name="JS" component={JS}/>
          <Stack.Screen name="React" component={REACT}/>

        </Stack.Navigator>
      </NavigationContainer>
      
      );
  };
  export default App;