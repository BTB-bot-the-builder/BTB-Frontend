import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const Button = props => (
   <a onClick={() => props.triggerNextStep({trigger: '2'})}>esrdg
   </a>
);

class CustomChatbot extends React.Component {
   
   state = {
      un_id : 3,
      steps : [
         {
            id: 'staticStep',
            component: <Button />,
            waitAction: true
         },
         {
            id: "2",
            user: true,
            validator: (value) => {
               this.AddBotResponse(value);
               return true;
            },
         },
      ],
   };


   AddBotResponse(message){
      var curr_id = this.state.un_id-2;
      var state_curr_id = this.state.un_id;
      console.log(message);
      let bot_message = 'dummy bot message';
      let bot_message_id = state_curr_id.toString();
      state_curr_id++;
      let user_message_id = state_curr_id.toString();
      state_curr_id++;
      let bot_step = [
         {
            id: bot_message_id,
            message: bot_message,
            trigger: user_message_id,
         },
         {
            id: user_message_id,
            user: true,
            validator: (value) => {
               this.AddBotResponse(value);
               return true;
            }
         }
      ];
      this.setState((prevState) => {
         // prevState.steps[curr_id].trigger = bot_message_id;
         return {
            un_id : state_curr_id,
            steps : prevState.steps.concat(bot_step),
         }
      });
   }

   GiveUniqueID = (val) => {
      this.setState(
         {
            un_id : val+1,
         }
      );
      return val.toString();
  }

   render(){
      const config = {
         width: "300px",
         height: "400px",
         floating: true,
         headerTitle: "Bot the Builder"
      };
   
      const theme = {
         background: "white",
         fontFamily: "Arial, Helvetica, sans-serif",
         headerBgColor: "rgb(48, 156, 255)",
         headerFontColor: "#fff",
         headerFontSize: "25px",
         botBubbleColor: "rgb(48, 156, 255)",
         botFontColor: "#fff",
         userBubbleColor: "#fff",
         userFontColor: "#4c4c4c"
      };

      // var steps = [
      //    {
      //       id: "1",
      //       message: "Hello, How can i help you?",
      //       trigger: "2"
      //    },
      //    {
      //       id: "2",
      //       user: true,
      //       validator: (value) => {
      //          this.AddBotResponse(value);
      //          return true;
      //       }
      //    }
      // ];

      return(
         <div>
            <ThemeProvider theme={theme}>
               <ChatBot steps={this.state.steps} {...config} />
            </ThemeProvider>
         </div>
      );
   }
}
export default CustomChatbot;