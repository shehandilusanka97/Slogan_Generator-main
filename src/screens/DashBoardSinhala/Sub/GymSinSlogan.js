import React, {useState} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import BottomTabs from '../../../components/BottomTabs/BottomTabs';
import {Divider} from 'react-native-elements';
import {Button} from 'react-native-paper';
import LottieView from 'lottie-react-native';
import SinhalaSearchBar from '../../../components/SearchBar/SinhalaSearchBar';


const DoctorSlogan = () => {
    const [data, setData] = useState('');
    return (

        <SafeAreaView style={{flex: 1}}>
           
            <View style={styles.root}>
            <SinhalaSearchBar data={data} onChangeValue={(newValue)=>setData(newValue)}
                       onValueSubmitted={()=> alert(data)}/>
           
            </View>


            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                <Text style={{ backgroundColor:'#c5dedd' ,color:'#34495E' ,fontSize:14,fontWeight:'900'}}>ආයුබෝවන්..!!</Text>
            <LottieView style={{marginTop:25, marginLeft:-10}} source={require('../../../../assets/Animation/workout.json')}
        autoPlay loop/> 
         <Text style={styles.description}>මෙහි කායවර්ධනය සදහා සාදන ලද සටන්පාඨ කිහිපයක් ඇත..!!!</Text>     
                </View>
               
                <View style={{alignItems: 'center', padding: 15}}>
      

   <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}> එන්න. ශක්තිමත් වෙන්න. ජීවිතය ඉදිරියට ගෙන යන්න
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}> ඉක්මනින් මාංශපේශි වර්ධනය කර ගැනීමට
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}> ඔබට හෙට ශක්තිය අවශ්‍ය නම් අද බර ඔසවන්න
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}> ඔබගේ මාංශපේශි භාවිතා කරන්න නැතහොත් නැති කරගන්න
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>ඔබට අවශ්ය ශරීරය ලබා ගන්න
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>දිගුකාලීන හා ශක්තිමත්ව ජීවත් වන්න
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}> ව්‍යායාම් ශාලාවේ ඇති දහඩිය ඔබේ සෞඛ්‍යය සඳහා සහතික මුද්‍රාවයි
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>නිරෝගී ශරීරයක් නිරෝගී මනසක්
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>අද ඔබ විඳින වේදනාව හෙට ජයග්‍රහණයේ සළකුණයි
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>ඔබේ ශරීරයට පෙර, ඔබේ මනස ව්‍යායාම් ශාලාවට පැමිණේ
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>
                </View>
            </ScrollView>
            <Divider width={1}/>
            <BottomTabs/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:'#c5dedd',
        zIndex:1,
        height:210,
        padding:5,
        width:'97%',
        alignSelf:'center',
        borderRadius: 10,


    },
    root: {
        marginTop:5,
        marginBottom: 15,
        height:60,
        width:'97%',
       alignSelf:'center',
        
    },
    logo: {
        width: 66,
        height: 66,
        alignSelf: 'center',


    },
  
    input: {
        backgroundColor: 'white',
        width: '85%',
        height: 47,
        borderColor: '#e8e8e8',
        borderWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        marginTop: 20,
        fontSize: 13,
        fontWeight: '900',
        alignItems: 'center',
        color: '#34495E',
        textAlign: 'center',
        textTransform: 'uppercase',
        paddingTop:5


    },
    button: {
        borderRadius: 5,
        width: '5%',
        height: 45,
        marginTop: 20,
        justifyItems: 'center',
        backgroundColor: '#34495E',
        alignItems: 'center',
        marginLeft:2,
        textAlign: 'center',
        padding:5,
        paddingLeft:25,


    },
    description: {
        color: 'black',
        fontSize: 13, 
        backgroundColor:'#c5dedd' ,
        fontWeight:'900',
       
    },
  
});
export default DoctorSlogan;
