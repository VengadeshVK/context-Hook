import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import ThemeContextProvider from './context/ThemeContext';
import AuthContext from './context/AuthContext';

function App() {
  return (
    <div className="App">
      <div className='ui raised very padded text container segment'>
      <AuthContext>
      <ThemeContextProvider >
          <Navbar />
          <TodoList />
          {/* <InitialTheme /> */}
     </ThemeContextProvider >
     </AuthContext>
    </div>
    </div>
  );
}

export default App;
