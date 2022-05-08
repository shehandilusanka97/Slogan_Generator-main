import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcon from "react-native-vector-icons/Ionicons";
import LottieView from 'lottie-react-native';
import { Button } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

export default function ChatBotDescSin(){
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
            <Button style={{backgroundColor:'white', marginTop:5,textAlign:'center'}} onPress={OnPress}>මට කතා කරන්න</Button>
        </View>
    )
};

const SloganInfo=()=>(
    
    <View style={{marginTop:6}}>
        <Text style={{fontSize:14,fontWeight:'bold', color:'black',textAlign:'center'}}>
හායි මගේ නම මිස්ටර් බොට්..!!</Text>
        <Text  style={{fontSize:13, color:'black',marginTop:5, textAlign: 'center'}}>ඔබට අපේ කණ්ඩායමට සටන්පාඨ සාදා දෙන ලෙස ඉල්ලීමක් කල යුතුද?
         නැතිනම් අපහට ඔබ සාදා ඇති සටන්පාඨ ඉදිරිපත් කිරීමට කැමතිද??😋 ලැජ්ජා වෙන්න එපා..!!</Text>
           
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
