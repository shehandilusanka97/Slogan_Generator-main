import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';


export default function SinhalaBottomTabs(){
    const navigation = useNavigation();

    const DashOnPressed=()=>{
        navigation.navigate('DashBoardSinhala');
    }
    return(
        <View style={{flexDirection:'row',margin:10, marginHorizontal:30, justifyContent:'space-between'}}>
            <TouchableOpacity onPress={DashOnPressed}>
            <Icon icon='home' text={"මුල් පිටුව"}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{console.log('as')}}>
            <Icon icon='heart' text={"සම්බන්ධවීම"}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{console.log('sd')}}>
            <Icon icon='user' text={"අප අමතන්න"}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{console.log('fd')}}>
            <Icon icon='arrow-left' text={"ඉවත්වීමට"}/>
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
