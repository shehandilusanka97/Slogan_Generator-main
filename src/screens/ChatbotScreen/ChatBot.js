import {View} from 'react-native';
import React, {Component} from 'react';
import {GiftedChat,Bubble} from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import { dialogflowConfig } from '../../../env';
import FAButton from '../../components/FAB/FAB';
import {Divider} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomTabs from '../../components/BottomTabs/BottomTabs';


const botAvatar = require('../../../assets/icons/chatbot.png');

const BOT={
    _id:2,
    name:'Mr.Bot',
    avatar:botAvatar
}

class ChatBot extends Component {
    state = {
        messages: [{_id:2, text:'How can i assist?',createdAt: new Date(),user:BOT},
            {_id:1, text:'Hi! My name is Mr.Bot',createdAt: new Date(),user:BOT}],
        id: 1,
        name: '',
    };

    componentDidMount() {
        Dialogflow_V2.setConfiguration(
            dialogflowConfig.client_email,
            dialogflowConfig.private_key,
            Dialogflow_V2.LANG_ENGLISH_US,
            dialogflowConfig.project_id
        );    
    }
    handleGoogleResponse(result){
        let text = result.queryResult.fulfillmentMessages[0].text.text[0];
        this.sendBotResponse(text);
    }
    sendBotResponse(text){
        let msg;
        if(text=='create a slogan'){
         msg={
            _id: this.state.messages.length+1,
            text:'Would you like to create a unique slogan or submit a slogan?',
            // image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fthebrandboy.com%2Flist-of-75-best-customer-service-slogans%2F&psig=AOvVaw3pgBCLIOhQZs9aWaAsEk_C&ust=1649363263326000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCPDSgJCjgPcCFQAAAAAdAAAAABAK',
            createdAt: new Date(),
            user: BOT
        };
        }else if(text=='show options'){
            msg={
                _id: this.state.messages.length+1,
                text:'Please select an option.',
                createdAt: new Date(),
                user: BOT,
                isOptions:true,
                data: [{
                    title:'Join us'
                },{
                    title:'Create a slogan'
                }]
            };
        }else{
            msg={
                _id: this.state.messages.length+1,
                text,
                createdAt: new Date(),
                user: BOT
            };
        }
    
        this.setState((previouseState) => ({
            messages: GiftedChat.append(previouseState.messages,[ msg]),  
          }))
    }


    onSend(messages = []) {
        this.setState((previouseState) => ({
          messages: GiftedChat.append(previouseState.messages, messages),  
        }))
         let message = messages[0].text;

         Dialogflow_V2.requestQuery(message, (result) =>this.handleGoogleResponse(result),
         (error) => console.log(error));
         
    }
    onQuickReply(quickReply){
        this.setState((previouseState) => ({
            messages: GiftedChat.append(previouseState.messages, quickReply),  
          }))
           let message = quickReply[0].value;
  
           Dialogflow_V2.requestQuery(message, (result) =>this.handleGoogleResponse(result),
           (error) => console.log(error));
           
      }
      renderBubble = props=>{
          return(<Bubble{...props} textStyle={{right:{color:'white'}}}wrapperStyle={{left:{
               backgroundColor:'#cfbaf0'  
          }}}/>)
      }

    

   
    render() {
        return (
            <>
                <View style={{flex:1,marginBottom:5,height:1400, backgroundColor:'white'}}>
                    <GiftedChat
                     messages={this.state.messages} 
                     onSend={(message)=> this.onSend(message)} 
                     onQuickReply={(quickReply)=> this.onQuickReply
                     (quickReply)} 
                     renderBubble={this.renderBubble}
                     user={{_id:1}}
                     />
                </View>
                <Divider width={1}/>
           {/* <BottomTabs/> */}
                </>
        );
    }
};

export default ChatBot;
