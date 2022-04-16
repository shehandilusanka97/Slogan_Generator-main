import React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, Pressable, View} from 'react-native';
import BottomTabs from '../../../components/BottomTabs/BottomTabs';
import {Divider} from 'react-native-elements';
import JoinUs from '../../../../assets/images/join-us.jpg';
import {Button} from 'react-native-paper';
import SinhalaBottomTabs from '../../../components/BottomTabs/SinhalaBottomTabs';


const ProgrammerSinSlogan = () => {

    return (

        <SafeAreaView style={{flex: 1}}>
            <View style={styles.root}>
                <View style={styles.topContainer}>
                    <View style={styles.metaContainer}>
                        <View>
                            <Text style={{color:'#eee'}}>ආයුබෝවන්</Text>
                            <Text style={styles.description}>මෙහි ප්‍රෝග්‍රැමර්වරු සදහා සාදන ලද සටන්පාඨ කිහිපයක් ඇත..!!!</Text>
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
                                    <Text style={styles.description}>අප සමග සටන්පාඨ නිර්මාණය කිරීමට</Text>
                                </View>
                                <Pressable>
                                    <Text style={styles.buttonText}>එක්වන්න අප සමග</Text>
                                </Pressable>
                            </View>
                            <Image source={JoinUs} style={styles.avatar} />
                        </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>එය දෝෂයක් නොවේ - විශේෂංගයක්
                        </Text>
                        <Button style={styles.button} icon="plus" mode="contained"
                                onPress={() => console.log('Pressed')}>

                        </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}> පළමුව, ගැටලුව විසඳන්න.
                        </Text>
                        <Button style={styles.button} icon="plus" mode="contained"
                                onPress={() => console.log('Pressed')}>

                        </Button>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>127.0.0.1 වැනි තැනක් නැත.
                        </Text>
                        <Button style={styles.button} icon="plus" mode="contained"
                                onPress={() => console.log('Pressed')}>

                        </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}> ඒකට කමක් නැහැ. අපි පරිගණක වලට කතා කරනවා
                        </Text>
                        <Button style={styles.button} icon="plus" mode="contained"
                                onPress={() => console.log('Pressed')}>

                        </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>මෘදුකාංග ගැටලුවක්ද? කිසිම ප්රශ්නයක් නැ!
                        </Text>
                        <Button style={styles.button} icon="plus" mode="contained"
                                onPress={() => console.log('Pressed')}>

                        </Button>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>ඔබේ පරිගණකයේ පුද්ගලික සහකාර
                        </Text>
                        <Button style={styles.button} icon="plus" mode="contained"
                                onPress={() => console.log('Pressed')}>

                        </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>කලකිරීම්ද? අපි පරිගණක විසඳුම් ලබා දෙනවා
                        </Text>
                        <Button style={styles.button} icon="plus" mode="contained"
                                onPress={() => console.log('Pressed')}>

                        </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>දැනුම බලය වේ
                        </Text>
                        <Button style={styles.button} icon="plus" mode="contained"
                                onPress={() => console.log('Pressed')}>

                        </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>ප්‍රතිස්ථාපනය කළ නොහැකි වීමට නම්, යමෙකු සැමවිටම වෙනස් විය යුතුය
                        </Text>
                        <Button style={styles.button} icon="plus" mode="contained"
                                onPress={() => console.log('Pressed')}>

                        </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>ඉහත කේතයේ දෝෂ වලින් පරිස්සම් වන්න;
                        </Text>
                        <Button style={styles.button} icon="plus" mode="contained"
                                onPress={() => console.log('Pressed')}>

                        </Button>
                    </View>
                </View>
            </ScrollView>
            <Divider width={1}/>
            <SinhalaBottomTabs/>
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
        fontSize: 13,
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
        fontSize: 15
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
export default ProgrammerSinSlogan;
