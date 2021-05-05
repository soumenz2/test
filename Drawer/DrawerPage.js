import React,{useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Switch,Button
  
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ToggleSwitch from 'toggle-switch-react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';




const Drawerp=()=>{
    return(
        <Drawer.Section>
            <DrawerItem>
                <Icon name='home' />
                label="Home"
            </DrawerItem>
            <DrawerItem>
                <Icon name='team' />
                label="Attendence"
            </DrawerItem>

        </Drawer.Section>

    );
};
export default Drawerp;