import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

class UserURLComponent extends React.Component {

    render() {
        return (
            <div style={{marginTop: '27px'}}>
                <ul>
                    {this.props.user_urls.map((dict, index) => (
                        <li key={index}>
                            <span onClick={(e) => { this.props.HandleDeleteUrl(dict.actionName); }}>
                                <DeleteIcon />
                            </span>
                            <span style={{marginLeft: '10px'}}>{dict.actionName} : {dict.actionUrl}</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

}

export default UserURLComponent;