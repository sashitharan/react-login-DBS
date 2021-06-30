import React, {useState} from 'react';
import Login from './components/login';
import Form from './components/form';
import Header from './components/Header';
import './App.scss';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <Header />
      {isAuthenticated ? (
        <Form setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </>
  );
}

export default App;
