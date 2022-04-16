import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';


export default function BottomTabs(){
    const navigation = useNavigation();

    const DashOnPressed=()=>{
        navigation.navigate('DashBoard');
    }
    return(
        <View style={{flexDirection:'row',margin:10, marginHorizontal:30, justifyContent:'space-between'}}>
            <TouchableOpacity onPress={DashOnPressed}>
            <Icon icon='home' text={"Home"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{console.log('as')}}>
            <Icon icon='heart' text={"Join us"}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{console.log('sd')}}>
            <Icon icon='user' text={"Contact us"}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{console.log('fd')}}>
            <Icon icon='arrow-left' text={"Sign out"}/>
            </TouchableOpacity>
        </View>
    )
}
const Icon=(props)=>(

    <View>
    <FontAwesome5 name={props.icon} size={25} style={{marginBottom:3, alignSelf:'center'}}/>
        <Text style={{fontSize:12}}>{props.text}</Text>
    </View>

);
