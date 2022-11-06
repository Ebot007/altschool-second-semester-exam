import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';
import Error from './components/Error';
import Navbar from './components/Navbar';
import './App.css';

const App = () => (
  <>
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <AppRoutes />
      </BrowserRouter>
    </ErrorBoundary>
  </>
);

export default App;
