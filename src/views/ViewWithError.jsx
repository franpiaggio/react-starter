import React from 'react';
class ViewWithEerror extends React.Component{
    /**
     * Just for showing the ErrorBoundary functionality
     */
    constructor(props){
        super(props);
        this.state = {
            items: {}
        }
    }
    render(){
        /*
        * If we try to do something like iterate an object
        * Or a request failed and the view tries to operate
        * data that doest exists, then the Error Boundary catch
        * the error and shows the stack error only if we are in
        * production mode.
        * 
        * IMPORTANT! By default in production mode React has an
        * overlay that shows the same error, just press escape
        * and you will see the html renderer by the ErrorBoundary
        */
       return this.state.items.map(item => <h1>{item}</h1>); // Items is an object so it doesnt have the .map()
    }
}
export default ViewWithEerror;