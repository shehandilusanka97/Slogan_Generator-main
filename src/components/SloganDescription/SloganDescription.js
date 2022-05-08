import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import MaterialCommunityIcon from "react-native-vector-icons/Ionicons";

// import LottieView from 'lottie-react-native';

export default function SloganDescription(){
    return(
        <View style={{marginTop:10,padding:5,backgroundColor:"white", width:'96%', alignSelf:'center'}}>
             {/* <LottieView  style={{width:'100%',height:200, alignSelf:'center',justifyContent:'center'}}  */}
             {/* source={require('../../../assets/images/cat.json')}  autoPlay loop/> */}
            <Image source={Logo} style={{width:'100%',height:200}}/>
                <TouchableOpacity style={{position:'absolute',right:20,top:20}}>
                    <MaterialCommunityIcon name={'heart-outline'} color={'#fff'} size={40}/>
                </TouchableOpacity>
            
            <SloganInfo/>

        </View>
    )
};
const SloganInfo=()=>(
    <View style={{marginTop:10}}>
        <Text style={{fontSize:15,fontWeight:'bold', marginBottom:12,  color:'black'}}>Welcome to Sinhala and English Slogan
            Generator..!!!</Text>
      
    </View>
)

