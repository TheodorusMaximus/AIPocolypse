import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/global.css'

// Error boundary for catching and displaying errors
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, error: Error | null}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Application error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          backgroundColor: '#000', 
          color: '#00FF66', 
          fontFamily: 'monospace',
          padding: '20px',
          border: '1px solid #00FF66',
          borderRadius: '4px',
          maxWidth: '800px',
          margin: '100px auto'
        }}>
          <h1>Something went wrong</h1>
          <details>
            <summary>Show Error Details</summary>
            <pre>{this.state.error?.toString()}</pre>
          </details>
          <button 
            onClick={() => window.location.reload()}
            style={{
              backgroundColor: '#00FF66', 
              color: '#000', 
              border: 'none', 
              padding: '10px 20px',
              marginTop: '20px', 
              cursor: 'pointer',
              fontFamily: 'monospace',
              fontWeight: 'bold'
            }}
          >
            RELOAD APPLICATION
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Create root and render app with error boundary
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>,
  );
} else {
  console.error("Failed to find root element. The app cannot be mounted.");
  document.body.innerHTML = `
    <div style="background: #000; color: #00FF66; font-family: monospace; padding: 20px;">
      <h1>Fatal Error</h1>
      <p>Failed to find root element. The app cannot be mounted.</p>
      <p>Please ensure the HTML contains a div with id="root".</p>
    </div>
  `;
}
