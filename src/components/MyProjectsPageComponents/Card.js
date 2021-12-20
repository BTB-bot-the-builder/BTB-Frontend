import React from "react";
import { useNavigate,Link } from "react-router-dom";

class Card extends React.Component{
    render() {

        const query_string = "/yolo?id=" + this.props.projectId;
        const data = [{
            ProjectName : this.props.ProjectName,
            botName : this.props.botName,
            description : this.props.description,
            date : this.props.date,
            avatarUrl : this.props.avatarUrl,
            api : this.props.api,
        },];

        return (
            <div className='project_card' style={{backgroundColor: this.props.color}}>
                <div className='header'>
                    <Link to={query_string} state={{ data: data }} style={{textDecoration: 'none', color: 'black'}}>
                        <h1>
                            {this.props.botName.length > 7 ? this.props.botName.substring(0,8)+"..." : this.props.botName}
                        </h1>
                    </Link>
                    <img src = {this.props.avatarUrl} alt = 'image here'></img>
                </div>
                <div className='content'>
                    <p className='description'>{ this.props.description.length > 30 ? this.props.description.substring(0,31)+"..." : this.props.description }</p>
                </div>
                <div className='contentFooter'>
                    <h3>{ this.props.ProjectName }</h3>
                    <p className='date'>Created on: { this.props.date }</p>
                </div>
            </div>
        );
    }
}

export default Card;