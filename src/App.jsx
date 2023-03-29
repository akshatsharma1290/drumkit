import React from 'react'
import './App.css'
import drumImg from '/drum.png'
import Header from './components/Header'
import Drums from './components/Drums'

function App() {
  return (
      <>
   <Header drumImg={drumImg}/>
   <Drums/>

   </>

  );
}

export default App
