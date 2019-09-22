import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Routes from './config/Routes'
import { ThemeProvider } from './config/themeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Routes />
      </div>
    </ThemeProvider>
  );
}
/*
function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}
*/
export default App;
