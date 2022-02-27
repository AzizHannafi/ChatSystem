import React from 'react';  
import { StyleSheet,Text, View,TextInput } from "react-native"
import { useNavigation } from '@react-navigation/native';



export default function Signin() {
const navigation = useNavigation();

const btn_Login= ()=>{
  console.log('login clicked')
}
const btn_SignUp= ()=>{
  console.log('Sign Up clickessd')
  navigation.navigate('Signup')
}

  return (
      <View style={styles.container}> 
          <View style={{ flex:2,justifyContent:'center'}}>
            <Text style={styles.title}>
                Sign In 
            </Text>    
          </View>
         
          <View style={{ flex:4}}>
            <Text style={styles.textSignIn}>
              Please Sign In to your account to 
              start chatting 
            </Text>    
            <View>
              <TextInput style={styles.inputText}   placeholder="Enter Email"/>
            </View> 
            <View>
              <TextInput style={styles.inputText}  placeholder="Enter Password"/>
            </View> 
           
            

            <Text
            style={styles.btnLogin}
              onPress={btn_Login} >
                Sign In
              </Text>
            <Text style={{color:"#4A154B"}}>
              Forgot Password ?
            </Text>    
            <Text style={{color:"#E01E5A"}}>
              Don’t have account !? 
              <Text style={{color:"#26C5F0"}} onPress={btn_SignUp}>Sign Up.</Text> 
            </Text>   
          </View>
         
          
      </View>
   
  );
}

const styles = StyleSheet.create({
    container:{
      margin:30,
      padding:20,
      justifyContent:'center',
      
      //*flex:1,
      
      flexDirection: "column",
      height:'100%'
    },
    title:{
      fontSize:60,
      color:'#4A154B',
     
    },
    textSignIn:{
      fontSize:25,
      color:'#3F3D56'
    },
    inputText:{
      backgroundColor:'#F5EBF6',
      borderRadius: 7,
      margin:10,
      padding:15
    },
    btnLogin:{
      margin:10,
      backgroundColor:'#E01E5A',
      padding:20,
      borderRadius: 7,
      textAlign: 'center',
      color:'#FFFFFF',
      fontSize:20
    },
    
})