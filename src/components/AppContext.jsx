import React from 'react';
import { withRouter } from 'react-router-dom';

export const AppContext = React.createContext({});
export const AppConsumer = AppContext.Consumer;
const stateKey = 'optiwe';
class Context extends React.Component {
    constructor(props) {
        super(props);
        this.state = JSON.parse(
            localStorage.getItem(stateKey) ||
            JSON.stringify({
                exampleData: 'test'
            })
        );
        this.updateState = this.updateState.bind(this);
        this.setExampleData = this.setExampleData.bind(this);
    }

    /**
     * Set a state and stores it in the local storage
     * @param newState
     * @param callback
     */
    updateState(newState, callback) {
        this.setState(newState, () => {
            localStorage.setItem(stateKey, JSON.stringify(this.state));
            if (typeof callback === 'function') {
                callback(this.state);
            }
        });
    }

    /**
     * Change the example value
     * @param {boolean} data
     */
    setExampleData(data) {
        this.updateState({ exampleData: data });
    }


    render() {
        return (
            <AppContext.Provider
                value={{
                    state: this.state,
                    actions: {
                        setExampleData: this.setExampleData,
                    },
                }}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}
export const AppProvider = withRouter(Context);