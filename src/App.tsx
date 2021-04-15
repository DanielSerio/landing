import React, { useContext } from 'react';
import './App.css';
import Header from './components/partials/Header/Header';
import ThemeContext from './state/ThemeContext';

function App() {
  const [theme] = useContext(ThemeContext);

  return (
    <div className={theme.prefersDark ? 'app dark' : 'app'}>
      <Header />
    </div>
  );
}

export default App;
