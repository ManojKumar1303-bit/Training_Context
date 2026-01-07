import { useContext } from 'react';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={theme}>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
