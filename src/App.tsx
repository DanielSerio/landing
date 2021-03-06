import React, { useContext } from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/partials/Footer/Footer';
import Header from './components/partials/Header/Header';
import Main from './components/partials/Main/Main';
import ThemeContext from './state/ThemeContext';

function App() {
  const [theme] = useContext(ThemeContext);

  return (
    <div className={theme.prefersDark ? 'app dark' : 'app'}>
      <HashRouter>
        <Header />
        <Main />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
