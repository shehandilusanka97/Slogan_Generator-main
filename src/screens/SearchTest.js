import { StyleSheet, View ,Text,SafeAreaView} from 'react-native';
import {Button} from 'react-native-paper';
import React, {useState} from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import BottomTabs from '../components/BottomTabs/BottomTabs';



const SearchTest = () => {
      const [data, setData] = useState('');
    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.root}>
            <SearchBar data={data} onChangeValue={(newValue)=>setData(newValue)}
                       onValueSubmitted={()=> alert(data)}/>
            </View>
        <View style={{alignItems: 'center', padding: 15}}> 
        <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>law firm offers a wide range of services.
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                    onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>a small business with a guardianship.
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                    onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>law is the highest level of legal excellence.
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                    onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.input}>the law is one of the most common solutions to problems.
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                    onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{
                              backgroundColor: 'white',
                              width: '85%',
                              height: 67,
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
                        }}>a court of law has ruled that a man is not entitled to the same treatment as a woman.
                        </Text>
                        <Button style={styles.button}  icon="content-copy" mode="contained"
                    onPress={() => console.log('Pressed')}> </Button>
                    </View>
                    <BottomTabs/>
 
        </View>
        </SafeAreaView>
    )
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
});
export default SearchTest;
