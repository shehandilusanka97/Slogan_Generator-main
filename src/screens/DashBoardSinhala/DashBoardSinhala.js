import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import HeaderTabs from '../../components/HeaderTaps/HeaderTabs';
import SinhalaCategories from '../../components/SinhalaCategories/SinhalaCategories';
import SinhalaSearchBar from '../../components/SearchBar/SinhalaSearchBar';
import SinhalaSloganDescription from '../../components/SinhalaSloganDescription/SinhalaSloganDescription'
import {Divider} from 'react-native-elements';
import SinhalaBottomTabs from '../../components/BottomTabs/SinhalaBottomTabs';
import {useNavigation} from '@react-navigation/native';

const DashBoardSinhala=() =>{
    const navigation = useNavigation();
    const [data,setData] = useState('');
    const [activeTab,setActiveTab]=useState('සිංහල');

    const HeaderButton = (props) => (
        <TouchableOpacity style={{backgroundColor:props.activeTab===props.text ? 'black':'#ff9800',
            paddingVertical:6,paddingHorizontal:22,borderRadius:30}}
                          onPress={()=>{props.setActiveTab(props.text)
                              switch (props.text) {
                                  case'සිංහල':
                                      navigation.navigate('DashBoardSinhala');
                                      break;
                                  case 'English':
                                      navigation.navigate('DashBoard');
                                      break;
                              }}}>
            <Text style={{color:props.activeTab===props.text ?
                    '#ff9800':'black',fontSize:15, fontWeight:'900'}}>{props.text}</Text>
        </TouchableOpacity>
    );
    return(
        <SafeAreaView style={{backgroundColor:'#cbd5e0',flex:1}}>
            <View style={{flex:1}}>
            <View style={styles.root}>

                <View style={{ flexDirection: "row", alignSelf: "center" }}>
                    <HeaderButton text='English' btnColor='black' textColor='#ff9800' activeTab={activeTab}
                                  setActiveTab={setActiveTab} />
                    <HeaderButton text='සිංහල' btnColor='#ff9800' textColor='black' activeTab={activeTab}
                                  setActiveTab={setActiveTab} />
                </View>
                <SinhalaSearchBar data={data} onChangeValue={(newValue)=>setData(newValue)}
                           onValueSubmitted={()=> alert(data)}/>
                {/* Way to get the props */}

            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <SinhalaCategories/>
                <SinhalaSloganDescription/>
                <SinhalaSloganDescription/>

            </ScrollView>
            <Divider width={1}/>
            <SinhalaBottomTabs/>
            </View>
        </SafeAreaView>
    )
}
export default DashBoardSinhala;
const styles = StyleSheet.create({
    root:{
        backgroundColor:'#ff9800',
        padding:15
    },

});
