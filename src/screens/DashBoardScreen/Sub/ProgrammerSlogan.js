import {Image, SafeAreaView, ScrollView, StyleSheet, Text, Pressable, View} from 'react-native';
import BottomTabs from '../../../components/BottomTabs/BottomTabs';
import {Divider} from 'react-native-elements';
import JoinUs from '../../../../assets/images/join-us.jpg';
import {Button} from 'react-native-paper';
import React from 'react';


const ProgrammerSlogan = () => {

    return (

        <SafeAreaView style={{flex: 1}}>
            <View style={styles.root}>
                <View style={styles.topContainer}>
                    <View style={styles.metaContainer}>
                        <View>
                            <Text style={{color:'#eee'}}>Welcome</Text>
                            <Text style={styles.description}>There are some custom made slogans for Programmers..!!!</Text>
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
                        <Text style={styles.input}>It’s not a bug — it’s an undocumented feature
                        </Text>
                        <Button style={styles.button} icon="plus" mode="contained"
                                onPress={() => console.log('Pressed')}>

                        </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>God is real … unless declared integer
                        </Text>
                        <Button style={styles.button} icon="plus" mode="contained"
                                onPress={() => console.log('Pressed')}>

                        </Button>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>There’s no place like 127.0.0.1.
                        </Text>
                        <Button style={styles.button} icon="plus" mode="contained"
                                onPress={() => console.log('Pressed')}>

                        </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}> It's ok. We speak computer
                        </Text>
                        <Button style={styles.button} icon="plus" mode="contained"
                                onPress={() => console.log('Pressed')}>

                        </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}> Software Problem? No Problem!
                        </Text>
                        <Button style={styles.button} icon="plus" mode="contained"
                                onPress={() => console.log('Pressed')}>

                        </Button>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}> Your Computer's Personal Assistant
                        </Text>
                        <Button style={styles.button} icon="plus" mode="contained"
                                onPress={() => console.log('Pressed')}>

                        </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}> Frustrations? We Give Computer Solutions
                        </Text>
                        <Button style={styles.button} icon="plus" mode="contained"
                                onPress={() => console.log('Pressed')}>

                        </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>Knowledge is power
                        </Text>
                        <Button style={styles.button} icon="plus" mode="contained"
                                onPress={() => console.log('Pressed')}>

                        </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>Low-level programming is good for the programmer’s soul
                        </Text>
                        <Button style={styles.button} icon="plus" mode="contained"
                                onPress={() => console.log('Pressed')}>

                        </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>Beware of bugs in the above code; I have only proved it correct, not tried it.
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
export default ProgrammerSlogan;
