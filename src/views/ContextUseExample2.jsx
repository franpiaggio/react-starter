/**
 * This is an example on how to use the context
 * but calling methods inside the render of the
 * component
 */
import React from 'react';
import {Link} from 'react-router-dom';
// 1) Import the Consumer
import { AppConsumer } from '../components/AppContext';
class ContextUseExample extends React.Component{
    render(){
        return(
        <div>
            <h1> Context View </h1>
            <p> This view only can use the context state and action in the render method </p>
            {/* 2) Use the AppConsumer to acces the state or the actions */}
            <AppConsumer>
                {( { state, actions }) => (
                    <div>
                        {/* 3) Show state values */}
                        <h1>Value from context: {state.exampleData} </h1>
                        {/* 4) Or call actions from the context */}
                        <button style={ {margin: '10px', padding: '10px'} } onClick={ () => actions.setExampleData( Math.floor(Math.random() * 10) ) }> Click to change the global state </button>
                        {/* The component change the state and saves all in the localStorage */}
                    </div>
                )}
            </AppConsumer>
            <Link to="/"> Go back </Link>
        </div>
        )
    }
}

export default ContextUseExample;