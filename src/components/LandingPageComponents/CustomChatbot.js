import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const CustomChatbot = (props) => {
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

   const steps = [
      {
         id: "Greet",
         message: "Hello, How can i help you?",
         trigger: "Done"
      },
      {
         id: "Done",
         user: true
      }
   ];

   return (
      <ThemeProvider theme={theme}>
         <ChatBot steps={steps} {...config} />
      </ThemeProvider>
   );
}
export default CustomChatbot;