import React from 'react';
import {Link} from 'react-router-dom';
import api from '../requests/api';
class Chat extends React.Component{
    componentDidMount(){
        // Example of requets to the server
        if(process.env.NODE_ENV === 'development'){
            api.test().test('testParameter').then( data => {
                // Set state or other method
                console.log(data.data);
            }).catch(err =>{
                console.log(err);
            })
        }
    }
    render(){
        return(
        <div>
            <h1> Chat view </h1>
            <Link to="/"> Menu view </Link>
        </div>
        )
    }
}
export default Chat;