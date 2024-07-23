import { createContext, useState } from 'react';
import './App.css';
import Block2 from './Block2';

export const contentContext = createContext("");

function App() {
  const [content, setContent] = useState("Hey there!!")

  return (
    <>
      <div>
        <h1>Block 1 </h1>
        <h2>{content}</h2>
        <contentContext.Provider value={content} >
          <Block2 />
        </contentContext.Provider>
      </div>
    </>
  )
}

export default App
