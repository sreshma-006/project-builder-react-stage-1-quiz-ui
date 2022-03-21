import React from 'react';
// import HigherOrderFunctions from './components/hof/HigherOrderFunctions';
import './App.css';
import Home from './HomeComponent';
import './home.css';
import QuizComponent from './QuizComponent';
import ResultComponent from './ResultComponent';

function App() {
  return (
    <div className="App">
      <Home> </Home>
      <QuizComponent></QuizComponent>
      <ResultComponent></ResultComponent>
    </div>
  );
}

export default App;
