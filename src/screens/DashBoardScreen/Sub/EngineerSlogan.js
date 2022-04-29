import React, {useState} from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, Pressable, View} from 'react-native';
import BottomTabs from '../../../components/BottomTabs/BottomTabs';
import {Divider} from 'react-native-elements';
import JoinUs from '../../../../assets/images/join-us.jpg';
import {Button} from 'react-native-paper';


const EngineerSlogan = () => {

    return (

        <SafeAreaView style={{flex: 1}}>
            <View style={styles.root}>
                <View style={styles.topContainer}>
                    <View style={styles.metaContainer}>
                        <View>
                            <Text style={{color:'#eee'}}>Welcome</Text>
                            <Text style={styles.description}>There are some custom made slogans for Engineers..!!!</Text>
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
                        <Text style={styles.input}>Always try to find proof of everything
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>The engineer has been, and is, a maker of History
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>It's not faith in Technology it's faith in people
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>Not everyone deserves to be an engineer
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}> Relax, We are Engineers
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}> Bring the light from the loophole
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}> A vision of a better building
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>Committed to Excellence
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}> Engineering is best for every aspect
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                                onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>Creativity is intelligence
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
    root: {
        backgroundColor: '#240046',
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
        fontSize: 15,
        fontWeight: '900',
        alignItems: 'center',
        color: '#34495E',
        paddingTop:5,
        textAlign: 'center',
        textTransform: 'uppercase',


    },
    button: {
        borderRadius: 5,
        width: '5%',
        height: 45,
        marginTop: 20,
        justifyItems: 'center',

        backgroundColor: '#34495E',
        marginLeft:2,
        textAlign: 'center',
        padding:5,
        paddingLeft:25,


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
export default EngineerSlogan;
