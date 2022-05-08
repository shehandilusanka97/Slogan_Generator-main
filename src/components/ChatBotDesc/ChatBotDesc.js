import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcon from "react-native-vector-icons/Ionicons";
import LottieView from 'lottie-react-native';
import { Button } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

export default function ChatBotDesc(){
    const navigation = useNavigation();
    const OnPress=()=>{
        navigation.navigate('ChatBot');
    }
    
    return(
        <View style={{marginTop:20,padding:5,backgroundColor:"white", width:'96%', alignSelf:'center', marginBottom:10}}>
            <LottieView  style={{width:'100%',height:200,backgroundColor:'white' ,alignSelf:'center',justifyContent:'center'}} 
            source={require('../../../assets/Animation/lf30_editor_flknbn9v.json')}  autoPlay loop/> 
                <TouchableOpacity style={{position:'absolute',right:20,top:20}}>
                    <MaterialCommunityIcon name={'heart-outline'} color={'#fff'} size={40}/>
                </TouchableOpacity>
            <SloganInfo/>
            <Button style={{backgroundColor:'white', marginTop:5}} onPress={OnPress}>Talk with me</Button>
        </View>
    )
};

const SloganInfo=()=>(
    
    <View style={{marginTop:6}}>
        <Text style={{fontSize:17,fontWeight:'bold', color:'black',marginLeft:100}}>Hi my name is Mr.Bot..!!</Text>
        <Text  style={{fontSize:15, color:'black',marginTop:5, textAlign: 'center'}}>Would you like to submit a slogan request to our team?
         Or would you like to propose a slogan for us?😋 don't be shy..!!</Text>
           
    </View>
)



// import { calcRelativeAxisPosition } from 'framer-motion/types/projection/geometry/delta-calc';
// const axios=require('axios');
// axios({
//     method: 'post',
//     url: 'http://192.168.8.102:5000/predict',
//     data: {
//       keywords: ['Fred']
//     }
//   });
// GET request for remote image in node.js
// axios({
//     method: 'get',
//     url: 'http://bit.ly/2mTM3nY',
//     responseType: 'stream'
//   })
//     .then(function (response) {
//       response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
//     });
