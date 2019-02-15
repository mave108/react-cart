import React from 'react';
import Errorcomponent from '../Errorcomponent/Errorcomponent';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, info) {
      // You can also log the error to an error reporting service
      //logErrorToMyService(error, info);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <Errorcomponent>Something went wrong.</Errorcomponent>;
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;