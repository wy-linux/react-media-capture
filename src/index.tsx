import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Capture from './media-capture';
import 'antd/dist/antd.css'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Capture />
  </React.StrictMode>
);

