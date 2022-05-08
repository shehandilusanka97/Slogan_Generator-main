import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import MaterialCommunityIcon from "react-native-vector-icons/Ionicons";

export default function SloganDescription(){
    return(
        <View style={{marginTop:10,padding:5,backgroundColor:"white", width:'96%',  alignSelf:'center'}}>
            <>
                <Image source={Logo} style={{width:'100%',height:200}}/>
                <TouchableOpacity style={{position:'absolute',right:20,top:20}}>
                    <MaterialCommunityIcon name={'heart-outline'} color={'#fff'} size={40}/>
                </TouchableOpacity>
            </>
            <SloganInfo/>

        </View>
    )
};
const SloganInfo=()=>(
    <View style={{marginTop:10}}>
        <Text style={{fontSize:13,fontWeight:'bold', color:'black', marginBottom:10}}>සිංහල සහ ඉංග්‍රීසි සටන් පාඨ උත්පාදකට යන්ත්රය
            සාදරයෙන් පිළිගනිමු..!!!</Text>
        
    </View>
)

