import { View,StyleSheet,SafeAreaView,TouchableOpacity,Text} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';

const HomeScreen = () => {
    const [data,setData] = useState('');
    const [activeTab,setActiveTab]=useState('English');

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

const HeaderButton = (props) => (

    <TouchableOpacity style={{backgroundColor:props.activeTab===props.text ? 'black':'#ff9800',
        paddingVertical:6,paddingHorizontal:22,borderRadius:30}}
    onPress={()=>{props.setActiveTab(props.text)
        switch (props.text) {
            case 'English':
               console.log('Pressed')
                break;
            case'සිංහල':console.log('fucker2');
                break;
        }}}>
        <Text style={{color:props.activeTab===props.text ? '#ff9800':'black',fontSize:15, fontWeight:'900'}}>{props.text}</Text>
    </TouchableOpacity>
);
export default HomeScreen;
