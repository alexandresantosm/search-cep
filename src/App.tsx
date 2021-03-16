import { BrowserRouter as Router } from 'react-router-dom';
import { AddressSearchProvider } from './contexts/AddressSearchContext';
import Routes from './routes';

import './styles/global.scss';

export function App() {
  return (
    <AddressSearchProvider>
      <Router>
        <Routes />
      </Router>
    </AddressSearchProvider>
  );
}