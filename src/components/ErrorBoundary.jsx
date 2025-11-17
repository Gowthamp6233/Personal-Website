import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: "60px 20px", 
          textAlign: "center", 
          maxWidth: "600px", 
          margin: "0 auto" 
        }}>
          <h1>Something went wrong</h1>
          <p style={{ color: "var(--muted)", marginBottom: "20px" }}>
            We're sorry, but something unexpected happened. Please try refreshing the page.
          </p>
          <button 
            className="btn" 
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
