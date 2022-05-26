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
        <View style={{margin:10, marginHorizontal:150, justifyContent:'center'}}>
            <TouchableOpacity onPress={DashOnPressed}>
            <Icon icon='home' text={"මුල් පිටුව"} />
            </TouchableOpacity>
           
           
        </View>
    )
}
const Icon=(props)=>(

    <View>
    <FontAwesome5 name={props.icon} size={25} style={{marginBottom:3, alignSelf:'center'}}/>
        <Text style={{fontSize:13, alignSelf:'center'}}>{props.text}</Text>
    </View>

);
