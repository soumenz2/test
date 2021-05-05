
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
  Header,
  Container,Left, Body, Right, Button, Title, Row

} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import ToggleSwitch from 'toggle-switch-react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';





const Attendence = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  

  return (
   
   <Container>
    <Header style={styles.headerstyle}>
      
        <Left>
         <TouchableOpacity onPress={()=>{navigation.openDrawer();}}>

           <Icon size={25} name='navicon' />
         </TouchableOpacity>
        </Left>

      
      
      <Body>
        <Text style={{fontSize:20}} >KREDILY</Text>
      </Body>
      <Right>
      <Switch
        trackColor={{ false: "#767577", true: "#f09caa" }}
        thumbColor={isEnabled ? "#d94e41" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        size="medium"
      />
      </Right>
      <Right>
       <TouchableOpacity>
         <Icon size={25} name='bell' />
        </TouchableOpacity> 
       </Right>
      
       <Right>
       <TouchableOpacity>
         <Icon size={25} name='chevron-down' />
        </TouchableOpacity> 
       </Right>
      


      
     
    </Header>
    <View style={styles.upperContainer}>
      {/* <Left> */}
        <Text style={{color:'#fff',paddingLeft:20,fontSize:25}}>Attendence</Text>
      {/* </Left> */}

    </View>
    <View style={styles.second}>
    <ScrollView horizontal={true}>
        <Text>Logs</Text>
        <Text>Penalty Logs</Text>
        <Text>rules</Text>
       
    </ScrollView>

    </View>
    
    


   </Container>
   
    
  );
};

const styles = StyleSheet.create({
  headerstyle:{
    backgroundColor:'#fff'
  },
  upperContainer: {
    backgroundColor:'#01070f',
    color:'#fff',
    height:60,
    
    
  },
  second:{
    flexDirection:'row',
    backgroundColor:'#785',
    color:'#fff',
    height:30,

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

export default Attendence;

   
   
  