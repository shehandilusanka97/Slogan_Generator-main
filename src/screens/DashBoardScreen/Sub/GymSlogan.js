import React, {useState} from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, Pressable, View} from 'react-native';
import BottomTabs from '../../../components/BottomTabs/BottomTabs';
import {Divider} from 'react-native-elements';
import {Button} from 'react-native-paper';
import LottieView from 'lottie-react-native';
import SearchBar from '../../../components/SearchBar/SearchBar';


const EngineerSlogan = () => {
    const [data, setData] = useState('');
    return (

        <SafeAreaView style={{flex: 1}}>
            <View style={styles.root}>
            <SearchBar data={data} onChangeValue={(newValue)=>setData(newValue)}
                       onValueSubmitted={()=> alert(data)}/>
           
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={{ backgroundColor:'#c5dedd' ,color:'#34495E' ,fontSize:17,fontWeight:'900'}}>Welcome..!!</Text>
            <LottieView style={{marginTop:25, marginLeft:-10}} source={require('../../../../assets/Animation/workout.json')}
        autoPlay loop/> 
         <Text style={styles.description}>There are some custom made slogans for Gym..!!!</Text>     
                </View>

                <View style={{alignItems: 'center', padding: 15}}>
                   
                <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>Get In. Get Fit. Get on with Life
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>Hustle to gain more muscle
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>Lift heavy today if you want strength tomorrow
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>Use your muscles or lose your muscles
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>Get the body you want
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>Live longer and stronger
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{  backgroundColor: 'white',  width: '85%',height: 47,borderColor: '#e8e8e8', borderWidth: 2,
                        borderRadius: 5,paddingHorizontal: 10, marginVertical: 10,marginTop: 20,alignSelf: 'center',fontSize: 15,fontWeight: '900',alignItems: 'center',
                        color: '#34495E', textTransform: 'uppercase'}}>Sweat in the gym is the guarantee stamp for your health
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>A healthy mind in a healthy body
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{  backgroundColor: 'white',  width: '85%',height: 47,borderColor: '#e8e8e8', borderWidth: 2,
                        borderRadius: 5,paddingHorizontal: 10, marginVertical: 10,marginTop: 20,alignSelf: 'center',fontSize: 15,fontWeight: '900',alignItems: 'center',
                        color: '#34495E', textTransform: 'uppercase'}
                         }>The pain you suffer today is the sign of tomorrow’s victory
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>Before your body, your mind comes to the gym
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>
                </View>
            </ScrollView>
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
        fontSize: 15,
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
        fontSize: 15, 
        backgroundColor:'#c5dedd' ,
        fontWeight:'900',
       
    },
});
export default EngineerSlogan;
