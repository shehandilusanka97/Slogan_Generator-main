import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import DashBoardScreen from '../screens/DashBoardScreen/DashBoardScreen';
import DoctorSlogan from '../screens/DashBoardScreen/Sub/DoctorSlogan';
import EngineerSlogan from '../screens/DashBoardScreen/Sub/EngineerSlogan';
import GamerSlogan from '../screens/DashBoardScreen/Sub/GamerSlogan';
import ProgrammerSlogan from '../screens/DashBoardScreen/Sub/ProgrammerSlogan';
import GymSlogan from '../screens/DashBoardScreen/Sub/GymSlogan';
import BusinessSlogan from '../screens/DashBoardScreen/Sub/BusinessSlogan';
import DashBoardSinhala from '../screens/DashBoardSinhala/DashBoardSinhala';
import DoctorSinSlogan from '../screens/DashBoardSinhala/Sub/DoctorSinSlogan';
import EngineerSinSlogan from '../screens/DashBoardSinhala/Sub/EngineerSinSlogan';
import GamerSinSlogan from '../screens/DashBoardSinhala/Sub/GamerSinSlogan';
import ProgrammerSinSlogan from '../screens/DashBoardSinhala/Sub/ProgrammerSinSlogan';
import GymSinSlogan from '../screens/DashBoardSinhala/Sub/GymSinSlogan';
import BusinessSinSlogan from '../screens/DashBoardSinhala/Sub/BusinessSinSlogan';
import ChatBotScreen from '../screens/ChatbotScreen/ChatBot';

const Stack = createNativeStackNavigator();
const Navigation=()=>{
    return(
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="SignIn" component={SignInScreen}/>
                    <Stack.Screen name="SignUp" component={SignUpScreen}/>
                    <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen}/>
                    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
                    <Stack.Screen name="NewPassword" component={NewPasswordScreen}/>
                    <Stack.Screen name="DashBoard" component={DashBoardScreen}/>
                    <Stack.Screen name="Doctor" component={DoctorSlogan}/>
                    <Stack.Screen name="Engineer" component={EngineerSlogan}/>
                    <Stack.Screen name="Gamer" component={GamerSlogan}/>
                    <Stack.Screen name="Programmer" component={ProgrammerSlogan}/>
                    <Stack.Screen name="Gym" component={GymSlogan}/>
                    <Stack.Screen name="Business" component={BusinessSlogan}/>
                    <Stack.Screen name="DashBoardSinhala" component={DashBoardSinhala}/>
                    <Stack.Screen name="DoctorSin" component={DoctorSinSlogan}/>
                    <Stack.Screen name="EngineerSin" component={EngineerSinSlogan}/>
                    <Stack.Screen name="GamerSin" component={GamerSinSlogan}/>
                    <Stack.Screen name="ProgrammerSin" component={ProgrammerSinSlogan}/>
                    <Stack.Screen name="GymSin" component={GymSinSlogan}/>
                    <Stack.Screen name="BusinessSin" component={BusinessSinSlogan}/>
                    <Stack.Screen name="ChatBot" component={ChatBotScreen}/>

                </Stack.Navigator>
            </NavigationContainer>

    )
}
export default Navigation;
