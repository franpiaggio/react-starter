/**
 * This is an example on how to use the Context API
 * from the methods of a components: componentDidMount, componentDidUnMount
 * or any other custom method
 */
import React from 'react';
import {Link} from 'react-router-dom';

// 1) Import the context
import { AppContext } from '../components/AppContext';
class ContextUseExample1 extends React.Component{
    componentDidMount(){       
        // 3) Reference context values as 'this.context' 
        console.log(this.context);

        // 4) You have 2 keys
        // a- State: the global state of the app
        console.log(this.context.state);
        // b- Actions: the global methods to call for changing the global state
        this.context.actions.setExampleData('New data');
        // Now the global state object has changed:
        console.log(this.context.state.exampleData);
    }
    render(){
        return(
        <div>
            <h1> Context View  </h1>
            <p> This view can show a global state value called from the Context parent component. </p>
            <p> Results in the console </p>
            <Link to="/"> Go back </Link>
        </div>
        )
    }
}

// 2) Bind the current component with the Context
ContextUseExample1.contextType = AppContext;
export default ContextUseExample1;