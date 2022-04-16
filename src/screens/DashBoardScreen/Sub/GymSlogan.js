import {Image, SafeAreaView, ScrollView, StyleSheet, Text, Pressable, View} from 'react-native';
import BottomTabs from '../../../components/BottomTabs/BottomTabs';
import {Divider} from 'react-native-elements';
import JoinUs from '../../../../assets/images/join-us.jpg';
import {Button} from 'react-native-paper';
import React from 'react';


const GymSlogan = () => {

    return (

        <SafeAreaView style={{flex: 1}}>
            <View style={styles.root}>
                <View style={styles.topContainer}>
                    <View style={styles.metaContainer}>
                        <View>
                            <Text style={{color:'#eee'}}>Welcome</Text>
                            <Text style={styles.description}>There are some custom made slogans for Gym..!!!</Text>
                        </View>
                    </View>
                </View>
            </View>


            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{alignItems: 'center', padding: 15}}>

                    <View style={styles.container}>
                        <View style={styles.topContainer}>
                            <View style={styles.metaContainer}>
                                <View>
                                    <Text style={styles.description}>You can create slogan with us</Text>
                                </View>
                                <Pressable>
                                    <Text style={styles.buttonText}>Join with us</Text>
                                </Pressable>
                            </View>
                            <Image source={JoinUs} style={styles.avatar} />
                        </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>Get In. Get Fit. Get on with Life
                        </Text>
                        <Button style={styles.button} icon="plus" mode="contained"
                                onPress={() => console.log('Pressed')}>

                        </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>Hustle to gain more muscle
                        </Text>
                        <Button style={styles.button} icon="plus" mode="contained"
                                onPress={() => console.log('Pressed')}>

                        </Button>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>Lift heavy today if you want strength tomorrow
                        </Text>
                        <Button style={styles.button} icon="plus" mode="contained"
                                onPress={() => console.log('Pressed')}>

                        </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>Use your muscles or lose your muscles
                        </Text>
                        <Button style={styles.button} icon="plus" mode="contained"
                                onPress={() => console.log('Pressed')}>

                        </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>Get the body you want
                        </Text>
                        <Button style={styles.button} icon="plus" mode="contained"
                                onPress={() => console.log('Pressed')}>

                        </Button>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>Live longer and stronger
                        </Text>
                        <Button style={styles.button} icon="plus" mode="contained"
                                onPress={() => console.log('Pressed')}>

                        </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>Sweat in the gym is the guarantee stamp for your health
                        </Text>
                        <Button style={styles.button} icon="plus" mode="contained"
                                onPress={() => console.log('Pressed')}>

                        </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>A healthy mind in a healthy body
                        </Text>
                        <Button style={styles.button} icon="plus" mode="contained"
                                onPress={() => console.log('Pressed')}>

                        </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>The pain you suffer today is the sign of tomorrow’s victory
                        </Text>
                        <Button style={styles.button} icon="plus" mode="contained"
                                onPress={() => console.log('Pressed')}>

                        </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>Before your body, your mind comes to the gym
                        </Text>
                        <Button style={styles.button} icon="plus" mode="contained"
                                onPress={() => console.log('Pressed')}>

                        </Button>
                    </View>
                </View>
            </ScrollView>
            <Divider width={1}/>
            <BottomTabs/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#34495E',
        padding: 15,
        marginBottom: 15,
    },
    logo: {
        width: 66,
        height: 66,
        alignSelf: 'center',


    },
    text: {
        fontSize: 17,
        fontWeight: '900',
        color: 'white',
        alignSelf: 'center',
        marginTop: 5,
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
        alignSelf: 'center',
        fontSize: 17,
        fontWeight: '900',
        alignItems: 'center',
        color: '#34495E',


    },
    button: {
        borderRadius: 5,
        width: '5%',
        height: 45,
        marginTop: 20,
        justifyItems: 'center',
        backgroundColor: '#34495E',


    },
    // ""''''''''
    container: {
        backgroundColor: '#0891b2',
        paddingVertical: 16,
        paddingHorizontal: 12,
        borderRadius: 5,
        alignSelf: 'center',
        width: 475,
        maxWidth: '100%'
    },


    metaContainer: {
        justifyContent: 'space-between'
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    avatar: {
        height: 70,
        width:70,
        borderRadius: 100
    },
    description: {
        color: 'white',
        marginTop: 5,
        fontSize: 18
    },
    button1: {
        backgroundColor: '#22d3ee',
        alignSelf: 'flex-start',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 2
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 14
    }
});
export default GymSlogan;
