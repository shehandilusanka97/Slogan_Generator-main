import { StyleSheet, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const Testing3 = () => {
    return(
        <View style={[StyleSheet.absoluteFillObject ,styles.container]}>  
        <LottieView source={require('../../assets/Animation/done.json')} autoPlay loop/>         
</View>
 
     
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ff9800',
        zIndex:1,
    },
});
export default Testing3;
