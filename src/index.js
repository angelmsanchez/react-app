import React from 'react';
import ReactDOM from 'react-dom';

import routes from './routes';
import './normalize.css';

ReactDOM.render(
  <div>
    {routes}
  </div>,
  document.getElementById('root')
);