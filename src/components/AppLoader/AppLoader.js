import React from 'react';
import { View,StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';


const AppLoader = () => {
  return( 
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
        <LottieView source={require('../../../assets/images/93857-abstract-modular-cube-1.json')}
        autoPlay loop/>
      </View>
  )
}
const styles= StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ff9800',
        zIndex:1

    }
});

export default AppLoader;
