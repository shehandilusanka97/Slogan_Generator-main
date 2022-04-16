import {useState,useEffect} from 'react';
import {View, Image, StyleSheet, Text, SafeAreaView,TextInput,Alert} from 'react-native';
import ContactUs from '../../../assets/images/customcare.png'
import {Button } from 'react-native-paper';
import {db} from '../../firebase-config';
import {collection, getDocs} from 'firebase/firestore'

const ContactUsScreen= () =>{
    const[users,setUsers]= useState([]);
    const usersCollectionRef=collection(db,'users');
    useEffect(()=>{
        const getUsers= async()=>{
            const data= await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
        }
        getUsers();
    },[])

    const AddData = ()=>{
     
}


    return(
        <SafeAreaView style={{backgroundColor:'#ff9800',flex:1}}>
        <View style={{alignItems:'center',backgroundColor:'#ff9800', padding:15}}>
            <Image source={ContactUs} style={styles.logo}/>
            <Text style={{fontWeight:'bold',fontSize:30,color:'black',padding:10}}>Contact us</Text>

                {users.map((user)=>{
                    return(
                        <View style={{flexDirection:'row',padding:10}}>
                            <Text style={{fontSize:20,color:'black'}}>{user.name}</Text>
                            <Text style={{fontSize:20,color:'black'}}>{user.age}</Text>
                        </View>
                    )
                },[])}
                <Text>Name:{users.name}</Text>
                <Text>Age:{users.age}</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Name"

            />
            <TextInput
                style={styles.input}
                placeholder="Email"


            />
            <TextInput
                style={styles.input}
                placeholder="Message"


            />
            {/* <Button
                title='Add Data'
                onPress={AddData} /> */}

            <Button style={{marginVertical:10}}
                mode="contained"  onPress={AddData} icon="send">
              Send
            </Button>

        </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    logo:{
      justifyContent:'center',
      alignItems:'center',
        paddingTop:15,

    },input: {
        backgroundColor:'white',
        width:'100%',
        borderColor:'#e8e8e8',
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:10,
        marginVertical:5,
    },
})
export default ContactUsScreen;
