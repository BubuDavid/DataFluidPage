import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { MyProvider } from './components/Context';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<MyProvider>
    	<App />
		</MyProvider>
  </React.StrictMode>
);
