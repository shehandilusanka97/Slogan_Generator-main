import { View,StyleSheet,SafeAreaView,TouchableOpacity,Text} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import {useNavigation} from '@react-navigation/native';
import { calcRelativeAxisPosition } from 'framer-motion/types/projection/geometry/delta-calc';

const axios=require('axios');

const HomeScreen = () => {
    const [data,setData] = useState('');
    const [activeTab,setActiveTab]=useState('English');
    const navigation = useNavigation();
    const HeaderButton = (props) => (
        <TouchableOpacity style={{backgroundColor:props.activeTab===props.text ? 'black':'#ff9800',
            paddingVertical:6,paddingHorizontal:22,borderRadius:30}}
                          onPress={()=>{props.setActiveTab(props.text)
                              switch (props.text) {
                                  case 'English':
                                      navigation.navigate('DashBoard');
                                      break;
                                  case'සිංහල':
                                      navigation.navigate('DashBoardSinhala');
                                      break;
                              }}}>
            <Text style={{color:props.activeTab===props.text ? '#ff9800':'black',fontSize:15, fontWeight:'900'}}>{props.text}</Text>
        </TouchableOpacity>
    );
    return(
        <SafeAreaView style={{backgroundColor:'#cbd5e0',flex:1}}>
        <View style={styles.root}>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <HeaderButton text='English' btnColor='black' textColor='#ff9800' activeTab={activeTab}
                          setActiveTab={setActiveTab} />
            <HeaderButton text='සිංහල' btnColor='#ff9800' textColor='black' activeTab={activeTab}
                          setActiveTab={setActiveTab} />
        </View>
            <SearchBar data={data} onChangeValue={(newValue)=>setData(newValue)}
                       onValueSubmitted={()=> alert(data)}/>
        </View>
    </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    root:{
       backgroundColor:'#ff9800',
        padding:15
    },

});


export default HomeScreen;
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
