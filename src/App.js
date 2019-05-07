import React from 'react';
import './styles/main.scss';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

class App extends React.Component{
  render(){
    return(
      <ErrorBoundary>
        <h1> Hola  </h1>
      </ErrorBoundary>
    )
  }
}

export default App;
