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
            <LottieView style={{marginTop:35, marginLeft:-10}} source={require('../../../../assets/Animation/doctor-and-patient-conversation.json')}
        autoPlay loop/> 
         <Text style={styles.description}>මෙහි වෛද්‍යවරුන් සදහා සාදන ලද සටන්පාඨ කිහිපයක් ඇත..!!!</Text>     
                </View>
               
                <View style={{alignItems: 'center', padding: 15}}>

                  
                <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>විශ්වාසනීයත්වය සහ රැකවරණය සඳහා
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>සෞඛ්යය සහ රැකවරණය සඳහා
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}> රැකවරණය සැපයීම, ජීවිතයක් රැකගැනීම සඳහා
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}> රැකවරණය සහ සුවය අපගේ ඉලක්කයයි
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}> සෑම විටම රොගියා මුල් තැන
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}> ඔබේ අසනීපය නොසඟවන්න
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}> ඔබගේ විශ්වාසය අපගේ ලොකුම දිරිගැන්වීමයි
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>ඔබගේ යහපත් සෞඛ්‍යය අපගේ මූලික අරමුණයි
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}> නිරපේක්ෂ රැකවරණය, සෑම දිනකම
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>අපි රැකබලා ගන්නෙමු, සුව කිරීමට උත්සාහ කරන්නෙමු
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
