import React from 'react';
import Input from './Input';
import Canvas from './Canvas';
import { ContextProvider } from './Context';
import Meme from './Meme';
import './css/style.css'
import Header from './Header';


function App() {
  return (
    <ContextProvider>
      <Header/>
    <div className='container'>
      <Input/>
      <Canvas/>
      <Meme/>
    </div>
    </ContextProvider>
  );
}

export default App;
