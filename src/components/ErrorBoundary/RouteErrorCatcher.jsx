import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import { Route } from 'react-router-dom';

export default class RouteErrorCatcher extends React.Component {
    render() {
        return (
            <ErrorBoundary {...this.props}>
                <Route {...this.props} />
            </ErrorBoundary>
        );
    }
}