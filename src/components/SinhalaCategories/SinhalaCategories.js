import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import Doctor from '../../../assets/icons/doctor.png';
import Engineer from '../../../assets/icons/engineer.png';
import Gym from '../../../assets/icons/gym.png';
import Businessman from '../../../assets/icons/businessman.png';
import Gamer from '../../../assets/icons/gamer.png';
import Programmer from '../../../assets/icons/programmer.png';
import {useNavigation} from '@react-navigation/native';
import Business from '../../../assets/icons/businessman.png';

const items = [{
    image: (Doctor), text: 'වෛද්‍යවරයා',
}, {
    image: (Engineer), text: 'ඉංජිනේරු',
},{
    image: (Gamer), text: 'ක්‍රීඩා',
}, {
    image: (Programmer), text: 'වැඩසටහන්කරු',
}, {
    image: (Gym), text: 'කායවර්ධන',
}, {
    image: (Businessman), text: 'ව්යාපාරිකයා',
},
];

export default function SinhalaCategories() {
    const navigation = useNavigation();

    const doctorOnPressed =()=>{
        navigation.navigate('DoctorSin');
    }
    const EngineerOnPressed=()=>{
        navigation.navigate('EngineerSin');
    }
    const GamerOnPressed=()=>{
        navigation.navigate('GamerSin');
    }
    const ProgrammerOnPressed=()=>{
        navigation.navigate('ProgrammerSin');
    }
    const GymOnPressed=()=>{
        navigation.navigate('GymSin');
    }
    const BusinessOnPressed=()=>{
        navigation.navigate('BusinessSin');
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
                alignSelf:'center',
            }}
        >
            <Text style={{ fontSize: 14, fontWeight: "900",color:'black' }}>#සටන් පාඨ වර්ග</Text>
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
                        <Text style={{ fontSize: 12, marginTop:5, fontWeight: "900",marginLeft:2}}>වෛද්‍ය</Text>
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
                        <Text style={{  fontSize: 12, marginTop:5, fontWeight: "900",marginLeft:-3 }}>ඉංජිනේරු</Text>

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
                        <Text style={{  fontSize: 12, marginTop:5, fontWeight: "900", marginLeft:12 }}>ක්‍රීඩා</Text>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={ProgrammerOnPressed}>
                        <Image
                            source={Programmer}
                            style={{
                                width: 50,
                                height: 40,
                                resizeMode: "contain",
                                marginTop:7,
                                marginRight:20
                            }}
                        />
                        <Text style={{  fontSize: 12, marginTop:5, fontWeight: "900", marginLeft:-5}}>ප්‍රෝග්‍රැමර්</Text>

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
                        <Text style={{  fontSize: 12, marginTop:5, fontWeight: "900", marginLeft:-10 }}>කායවර්ධන</Text>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={BusinessOnPressed} >
                        <Image
                            source={Business}
                            style={{
                                width: 50,
                                height: 40,
                                resizeMode: "contain",
                                marginTop:7,
                                marginRight:30,
                            }}
                        />
                        <Text style={{  fontSize: 12, marginTop:5, fontWeight: "900", marginLeft:-5 }}>ව්යාපාරික</Text>


                    </TouchableOpacity>
                </View>


















                {/*{items.map((item, index) => (*/}
                {/*    <View key={index} style={{ alignItems: "center", marginRight: 30 }}>*/}
                {/*        <Image*/}
                {/*            source={item.image}*/}
                {/*            style={{*/}
                {/*                width: 50,*/}
                {/*                height: 40,*/}
                {/*                resizeMode: "contain",*/}
                {/*                marginTop:7,*/}
                {/*            }}*/}
                {/*        />*/}
                {/*        <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>*/}
                {/*    </View>*/}
                {/*))}*/}
            </ScrollView>
            <Text style={{fontSize:13, marginTop:5,fontWeight:'900',color:'black'}}>අදින්න ➡️</Text>
        </View>
    );
}
