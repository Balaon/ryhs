import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { App } from './pages/App'
import store from './redux';


ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
