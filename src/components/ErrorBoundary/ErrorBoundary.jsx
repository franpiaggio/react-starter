import React from 'react';
export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false, 
            error: null, 
            errorInfo: null 
        };
    }

    componentDidCatch(error, info) {
        console.log({error, info});
        this.setState({ hasError: true, error: error, errorInfo: info });
    }

    reload() {
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null,
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="errorView">
                    <div className={'errorView__texts'}>
                        Something went wrong loading the app.
                        {process.env.NODE_ENV !== 'production' && (
                            <div className={"errorView___description"} style={{ marginTop: '10px' }}>
                                <details style={{ whiteSpace: 'pre-wrap' }}>
                                    {this.state.errorInfo.componentStack}
                                </details>
                                <details style={{ whiteSpace: 'pre-wrap' }}>{this.state.error.stack}</details>
                            </div>
                        )}
                    </div>
                    <div className={'error-info--item__button'}>
                        <button
                            onClick={this.reload.bind(this)}>
                            Reload
                        </button>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}