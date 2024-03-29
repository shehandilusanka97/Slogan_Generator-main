import React from 'react';
import { View,TextInput,StyleSheet} from 'react-native';
import { Searchbar } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const SinhalaSearchBar=({onValueSubmitted,data,onChangeValue})=>{
    return (
        <View style={Styles.ViewStyle}>
            <FontAwesome5 style={Styles.iconStyle} name={'search'}/>
            <TextInput style={Styles.textInputStyle} placeholder={'සොයන්න'} placeholderTextColor={'#000'}
                       onChangeText={(newChange)=>onChangeValue(newChange)}
                       onSubmitEditing={(subValue
                       )=>onValueSubmitted(subValue)}/>
        </View>
    )};

const Styles= StyleSheet.create({
    ViewStyle:{
        marginTop:10,
        backgroundColor:'white',
        flexDirection:'row',
        borderRadius:15,
        marginHorizontal:1,
    },
    textInputStyle:{
        flex:1,
        fontSize:16,

    },
    iconStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'black',
        marginHorizontal:12,

    }
})
export default SinhalaSearchBar;
