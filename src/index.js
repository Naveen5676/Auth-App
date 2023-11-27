import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import Authprovider from './Store/Authprovider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Authprovider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Authprovider>
);
