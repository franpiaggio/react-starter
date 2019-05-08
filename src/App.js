import React from 'react';
import { Switch, Redirect, withRouter } from 'react-router-dom';
import { AppConsumer } from "./components/AppContext";
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import RouteErrorCatcher from "./components/ErrorBoundary/RouteErrorCatcher";
// Views
import Chat from "./views/Chat";
import Menu from "./views/Menu";
// Example views
import ViewWithError from './views/ViewWithError';
import ContextUseExample1 from './views/ContextUseExample1';
import ContextUseExample2 from './views/ContextUseExample2';
// Styles
import './styles/main.scss';


class App extends React.Component{
  render(){
    return(
      <ErrorBoundary>
        <Switch>
          <RouteErrorCatcher exact path="/" component={Menu} />
          <RouteErrorCatcher exact path="/chat" component={Chat} />
          <RouteErrorCatcher exact path="/errorExample" component={ViewWithError} />
          <RouteErrorCatcher exact path="/context1" component={ContextUseExample1} />
          <RouteErrorCatcher exact path="/context2" component={ContextUseExample2} />
          <Redirect from='*' to='/' />
        </Switch>
      </ErrorBoundary>
    )
  }
}

/**
 * Just for access to the method and values of the context
 */
const AppRef = React.forwardRef( (props, ref) => (
    <AppConsumer>
        {ctx => <App {...props} ctx={ctx} ref={ref} />}
    </AppConsumer>
  )
);

/**
* For access to the history API
*/
export default withRouter(AppRef);
