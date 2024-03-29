import React from 'react';
import { Text, StyleSheet,Pressable} from 'react-native';


const CustomButton=({onPress,text,type="PRIMARY",bgColor,fgColor})=>{
    return(
        <Pressable onPress={onPress} style={[styles.container,styles[`container_${type}`],bgColor ?{
            backgroundColor:bgColor}:{}]}>
           <Text style={[styles.text, styles[`text_${type}`],fgColor ?{color:fgColor}:{}]}>{text}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container:{
        width:'95%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5,
    },
    container_PRIMARY:{
        backgroundColor:'#3B71F3',
    },
    container_SECONDARY:{
        borderColor:'#3B71F3',
        borderWidth:2,
        backgroundColor:"white",
        borderRadius:10,
    },
    container_TERTIARY:{

    },

    text:{
        fontWeight:'bold',
        color:'white',

    },
    text_TERTIARY:{
        color: '#34495E'
    },
    text_SECONDARY:{
      color:'#34495E',
    },
})
export default CustomButton
