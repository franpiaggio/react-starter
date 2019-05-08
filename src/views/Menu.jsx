import React from 'react';
import {Link} from 'react-router-dom';
// resources
import logo from '../img/logo.png';
class Menu extends React.Component{
    render(){
        return(
        <div>
            <h1> Menu View </h1>
            <img src={logo} alt="optiwe" />
            <ul>
                <li>
                    <Link to="/chat"> Chat view </Link>
                </li>
                <li>
                    <Link to="/context1"> Context example 1 - with methods</Link>
                </li>
                <li>
                    <Link to="/context2"> Context example 2 - with render</Link>
                </li>
                <li>
                    <Link to="/errorExample">Error Boundary example</Link>
                </li>
            </ul>
        </div>
        )
    }
}
export default Menu;