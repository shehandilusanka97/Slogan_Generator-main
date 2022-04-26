import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import SearchBar from '../../components/SearchBar/SearchBar';
import Categories from '../../components/Categories/Categories';
import SloganDescription from '../../components/SloganDescription/SloganDescription';
import BottomTabs from '../../components/BottomTabs/BottomTabs';
import {useNavigation} from '@react-navigation/native';

import {Divider} from 'react-native-elements';
const DashBoardScreen =() =>{
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

    return (
        <SafeAreaView style={{backgroundColor:'#cbd5e0',flex:1}}>
        <View style={styles.root}>
            <View style={{ flexDirection: "row", alignSelf: "center" }}>

                <HeaderButton text='English' btnColor='#ff9800' textColor='black' activeTab={activeTab}
                              setActiveTab={setActiveTab} />
                <HeaderButton text='සිංහල' btnColor='black' textColor='#ff9800' activeTab={activeTab}
                              setActiveTab={setActiveTab} />
            </View>


            <SearchBar data={data} onChangeValue={(newValue)=>setData(newValue)}
                       onValueSubmitted={()=> alert(data)}/>
            {/* Way to get the props */}
        </View>


            <ScrollView showsVerticalScrollIndicator={false}>

            <Categories/>
                <SloganDescription/>
                <SloganDescription/>
            </ScrollView>
            <Divider width={1}/>
            <BottomTabs/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    root:{
       backgroundColor:'#ff9800',
        padding:15
    },
});
export default DashBoardScreen;
