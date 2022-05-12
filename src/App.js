import React, { useContext } from 'react';
import Header from './components/Header';
import Produtos from './components/Produtos';
import './App.css';
import { AuthContext } from './providers/auth';

const App = () => {
  const { isOpen } = useContext(AuthContext);

  return (
    <div className="container">
      <Header />
      {isOpen && <Produtos />}
    </div>
  );
};

export default App;
