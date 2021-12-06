import React from "react";

class UserURLComponent extends React.Component{

    render(){
        return(
            <div>
                <ul>
                {this.props.user_urls.map((dict, index) => (
                    <li key={index}>
                    {dict.actionName} : {dict.actionUrl} 
                    <button onClick={(e) => {
                        this.props.HandleDeleteUrl(dict.actionName);
                      }}>Remove</button>
                    </li>
                ))}
                </ul>
            </div>
        );
    }

}

export default UserURLComponent;