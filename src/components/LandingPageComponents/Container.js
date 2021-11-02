import React from "react";
import MarketingText from './MarketingText';
class Container extends React.Component{
    render(){
        return (
            <div className="container">
                <MarketingText></MarketingText>
                <img src='https://www.insegment.com/blog/wp-content/uploads/2020/11/chatbot-marketing.gif' alt='gif here'></img>
            </div>
        );
    }
}

export default Container;