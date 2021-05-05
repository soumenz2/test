import React, { Component,useEffect } from 'react';
import { View, StyleSheet, ToastAndroid,ScrollView, Button ,Text,Image,StatusBar,SafeAreaView} from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';


const GLogin=()=>{
    
      useEffect(() => {
        GoogleSignin.configure({
          scopes: ['firebase-adminsdk-x2aou@my-project-1c00c.iam.gserviceaccount.com'], // what API you want to access on behalf of the user, default is email and profile
          webClientId:'94269056626-csjai5tjhchq0gfpe4lluffnk5mhk9sk.apps.googleusercontent.com',
            // client ID of type WEB for your server (needed to verify user ID and offline access)
          offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        });
      }, []);
      signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          // this.setState({ userInfo });
          console.log({userInfo})
        } catch (error) {
          console.log({error})
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            // some other error happened
          }
        }
      };
      signOut = async () => {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          setloggedIn(false);
          setuserInfo([]);
        } catch (error) {
          console.error({error});
        }
      };
      return (
        <>
          <GoogleSigninButton
              style={{ width: 192, height: 48 }}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={signIn}
               />
                  
        </>
      );
}
export default GLogin;