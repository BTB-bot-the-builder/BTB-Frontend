import React from "react";
import MarketingText from './MarketingText';

class Body extends React.Component{
    render(){
        return (
            <div className="body">
                <MarketingText></MarketingText>
                <img src='https://www.insegment.com/blog/wp-content/uploads/2020/11/chatbot-marketing.gif' alt='gif here'></img>
            </div>
        );
    }
}

export default Body;