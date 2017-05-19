import React from 'react';
import ReactDOM from 'react-dom';

import routes from './routes';
import './index.scss';

ReactDOM.render(
  <div>
    {routes}
  </div>,
  document.getElementById('root')
);