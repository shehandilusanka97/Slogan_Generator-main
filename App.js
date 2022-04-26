import React from 'react';
import {SafeAreaView, StyleSheet,View} from 'react-native';
import Amplify from 'aws-amplify';
import config from'./src/aws-exports'
import Navigation from './src/navigation';
import DashBoardScreen from './src/screens/DashBoardScreen/DashBoardScreen';
import SignInScreen from './src/screens/SignInScreen';
import ContactUsScreen from './src/screens/ContactUsScreen';
import JoinWithUsScreen from './src/screens/JoinWithUsScreen';
import DashBoardSinhala from './src/screens/DashBoardSinhala/DashBoardSinhala';
import ProgrammerSlogan from './src/screens/DashBoardScreen/Sub/ProgrammerSlogan';
import DoctorSinSlogan from './src/screens/DashBoardSinhala/Sub/DoctorSinSlogan';
import EngineerSinSlogan from './src/screens/DashBoardSinhala/Sub/EngineerSinSlogan';
import ChatBot from './src/screens/ChatbotScreen/ChatBot';
import HomeScreen from './src/screens/HomeScreen';
import GymSinSlogan from './src/screens/DashBoardSinhala/Sub/GymSinSlogan';
import GamerSinSlogan from './src/screens/DashBoardSinhala/Sub/GamerSinSlogan';
import BusinessSinSlogan from './src/screens/DashBoardSinhala/Sub/BusinessSinSlogan';
import SignUpScreen from './src/screens/SignUpScreen';



Amplify.configure(config);
const App = () => {
    return (
        <SafeAreaView style={styles.root}>
             <Navigation/>
             {/*<HomeScreen/>*/}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor:'#eee'
    },
});
export default App;
