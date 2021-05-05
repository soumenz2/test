
import React, { Component } from 'react';
import { View, StyleSheet, ToastAndroid, Button ,Text,Image} from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  webClientId: '138881063989-v7vui488dgnmk07jf6kma9ssqt0htcg3.apps.googleusercontent.com138881063989-hku3vni3akbel7fat7jec3n4tbopsoke.apps.googleusercontent.com',
  offlineAccess: true, // if you want to access Google API on behalf 
});

class GoogleLogin extends Component {
  constructor(props){
    super(props)
    this.state={
      userGoogleInfo : {},
      loaded: false
    }

  }
  signIn = async () => {
    try {
      console.log("asdsad");
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({
        userGoogleInfo : userInfo,
        loaded : true
      })
      console.log(this.state.userGoogleInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("e 1");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("e 2");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("e 3");
      } else {
        console.log(error.message);
      }
    }
  };
  getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
        console.log("not signed in");
      } else {
        // some other error
        console.log(error.message);
      }
    }
  };
  getCurrentUser = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();
    this.setState({ currentUser });
  };
  isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    this.setState({ isLoginScreenPresented: !isSignedIn });
  };
  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({ user: null }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };
  revokeAccess = async () => {
    try {
      await GoogleSignin.revokeAccess();
      console.log('deleted');
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <View>

      <GoogleSigninButton
          style={{ width: 222, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.signIn}
          />
         {this.state.loaded ?
          <View>
            <Text>{this.state.userGoogleInfo.user.name}</Text>
            <Text>{this.state.userGoogleInfo.user.email}</Text>
            <Image 
          style={{ width: 100, height: 100 }}
          source={{uri: this.state.userGoogleInfo.user.photo}}
        />

          </View>
        
        : <Text>Not SignedIn</Text> }
         
        
          </View>
    );
  }
}

export default GoogleLogin;

    

