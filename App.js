/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import { Container, Header, Left } from 'native-base';
import React,{useState} from 'react';
// import  {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Switch
  
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
  } from 'react-native-google-signin';
import {
  Header,
  Container,Left, Body, Right, Button, Title

} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import ToggleSwitch from 'toggle-switch-react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Attendence from './page/attendence.js';
import Drawerp from './Drawer/DrawerPage.js';

import Home from './page/Home.js';
import CustomLogin from './page/customlogin.js';
import GLogin from './page/google_login.js';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  

  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Drawer">
      
    
  
      <Drawer.Screen name="Attendence" component={Attendence} />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="CustomLogin" component={CustomLogin} />
      <Drawer.Screen name="GLogin" component={GLogin} />
     
    </Drawer.Navigator>
  </NavigationContainer>
   
   
    
  );
};

const styles = StyleSheet.create({
  headerstyle:{
    backgroundColor:'#fff'
  },
  upperContainer: {
    backgroundColor:'#01070f',
    color:'#fff',
   
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
