import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initialForm = [
  {
    id: uuid(),
    username: 'ELijah',
    email: 'elijah@gmail.com',
    role: 'Frontend Engineer',
  },
]
export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialForm })
  },
  post(url, { username, email, role }) {
    const newFriend = { id: uuid(), username, email, role }
    return Promise.resolve({ status: 200, success: true, data: newFriend })
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
