import React from 'react'
import { StyleSheet,Text, View,TextInput,Image , TouchableOpacity} from "react-native"
import img_back from '../../assets/img_back.png'
import { useNavigation } from '@react-navigation/native';
export default function Signup() {
  const navigation = useNavigation();
  

  const btn_backToSign=()=>{
    navigation.navigate('Signin')
    
  }
  return (
    <View style={styles.container}> 
    <View style={{ flex:2,justifyContent:'center',alignItems:'flex-start'}}>
        <TouchableOpacity  onPress={btn_backToSign}>
            <Image source={img_back} style={styles.btn_back} />
        </TouchableOpacity>
      <Text style={styles.title}>
          Sign Up 
      </Text>    
    </View>
   
    <View style={{ flex:5}}>
      <Text style={styles.textSignIn}>
      Please Sign Up to your account to 
      start chatting
      </Text>    
      <View>
        <TextInput style={styles.inputText}   placeholder="Enter Email"/>
      </View> 
      <View>
        <TextInput style={styles.inputText}    placeholder="Enter Username"/>
      </View> 
      
      <View>
        <TextInput style={styles.inputText} secureTextEntry={true}   placeholder="Enter Password"/>
      </View> 
      <View>
        <TextInput style={styles.inputText}  secureTextEntry={true} placeholder="Confirm Password"/>
      </View> 
     
      

      <Text
      style={styles.btn_Signup}
         >
          Sign Up
        </Text>
       
    </View>
   
 
</View>
  )
}


const styles = StyleSheet.create({
    container:{
      margin:30,
      padding:20,
      justifyContent:'center',
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
    btn_Signup:{
      margin:10,
      backgroundColor:'#E01E5A',
      padding:20,
      borderRadius: 7,
      textAlign: 'center',
      color:'#FFFFFF',
      fontSize:20
    },
    btn_back:{
        width:50,
        height:50,
        marginLeft:0
    }
})