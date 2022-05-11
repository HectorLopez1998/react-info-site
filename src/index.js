import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header'
import MainContent from './components/MainContent'

function App() {
  return (
    <>
      <Header />,
      <MainContent />
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


