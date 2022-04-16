import React from 'react';
import {View, Text, Image,ScrollView ,TouchableOpacity} from 'react-native';
import Doctor from '../../../assets/icons/doctor.png';
import Engineer from '../../../assets/icons/engineer.png';
import Gym from '../../../assets/icons/gym.png';
import Business from '../../../assets/icons/businessman.png';
import Gamer from '../../../assets/icons/gamer.png';
import Programmer from '../../../assets/icons/programmer.png';
import {useNavigation} from '@react-navigation/native';

const items = [{
    image: (Doctor), text: 'Doctor',
}, {
    image: (Engineer), text: 'Engineer',
},{
    image: (Gamer), text: 'Gamer',
}, {
    image: (Programmer), text: 'Programmer',
}, {
    image: (Gym), text: 'Gym',
}, {
    image: (Business), text: 'Business',
},
];


export default function Categories() {
    const navigation = useNavigation();

    const doctorOnPressed =()=>{
        navigation.navigate('Doctor');
    }
    const EngineerOnPressed=()=>{
        navigation.navigate('Engineer');
    }
    const GamerOnPressed=()=>{
        navigation.navigate('Gamer');
    }
    const ProgrammerOnPressed=()=>{
        navigation.navigate('Programmer');
    }
    const GymOnPressed=()=>{
        navigation.navigate('Gym');
    }
    const BusinessOnPressed=()=>{
        navigation.navigate('Business');
    }

    return (
        <View
            style={{
                marginTop: 10,
                backgroundColor: "#fff",
                paddingVertical: 10,
                paddingLeft: 20,
                width:'96%',
                borderRadius:12,
                alignSelf:'center'

            }}
        >
            <Text style={{ fontSize: 15, fontWeight: "900",color:'black' }}>#Categories</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View  style={{ alignItems: "center", marginRight: 30, flexDirection: 'row'}}>
                    <TouchableOpacity onPress={doctorOnPressed} >
                      <Image
                            source={Doctor}
                            style={{
                                width: 50,
                                height: 40,
                                resizeMode: "contain",
                                marginTop:7,
                                marginRight:20,
                            }}
                        />
                        <Text style={{ fontSize: 13, fontWeight: "900",marginLeft:3}}>Doctor</Text>
                    </TouchableOpacity>

                      <TouchableOpacity onPress={EngineerOnPressed} >
                      <Image
                            source={Engineer}
                            style={{
                                width: 50,
                                height: 40,
                                resizeMode: "contain",
                                marginTop:7,
                                marginRight:20,
                            }}
                        />
                        <Text style={{ fontSize: 13, fontWeight: "900" }}>Engineer</Text>

                      </TouchableOpacity>
                      <TouchableOpacity onPress={GamerOnPressed} >
                      <Image
                            source={Gamer}
                            style={{
                                width: 50,
                                height: 40,
                                resizeMode: "contain",
                                marginTop:7,
                                marginRight:20,
                            }}
                        />
                        <Text style={{ fontSize: 13, fontWeight: "900", marginLeft:4 }}>Gamer</Text>

                      </TouchableOpacity>
                      <TouchableOpacity onPress={ProgrammerOnPressed}>
                      <Image
                            source={Programmer}
                            style={{
                                width: 50,
                                height: 40,
                                resizeMode: "contain",
                                marginTop:7,
                                marginRight:30
                            }}
                        />
                        <Text style={{ fontSize: 13, fontWeight: "900", marginLeft:-10}}>Programmer</Text>

                      </TouchableOpacity>
                      <TouchableOpacity onPress={GymOnPressed} >
                      <Image
                            source={Gym}
                            style={{
                                width: 50,
                                height: 40,
                                resizeMode: "contain",
                                marginTop:7,
                                marginRight:30,
                            }}
                        />
                        <Text style={{ fontSize: 13, fontWeight: "900", marginLeft:10 }}>Gym</Text>

                      </TouchableOpacity>
                      <TouchableOpacity onPress={BusinessOnPressed} >
                      <Image
                            source={Business}
                            style={{
                                width: 50,
                                height: 40,
                                resizeMode: "contain",
                                marginTop:7,
                               
                            }}
                        />
                        <Text style={{ fontSize: 13, fontWeight: "900" }}>Business</Text>


                      </TouchableOpacity>
                      
                    
                </View>
               

            </ScrollView>
           
                      <Text style={{fontSize:14, marginTop:5,fontWeight:'900',color:'black'}}>Swap ➡️</Text>
                     
        </View>
    );
}
