import React, { useState, useEffect } from 'react';
import Block from './components/BlockInfo'
import Main from './components/Main'
import Background from './components/Background';
import Header from './components/Header';
import Web3 from 'web3';
import './App.css';


function App() {
  const [block, setBlock] = useState(null);

  async function getBlock() {
    const web3 = new Web3("https://mainnet.infura.io/v3/f2fd7294530e481d95eaf9ca92d1017f"); 
    let block = await web3.eth.getBlock("latest");
    setBlock(block);
  }

  useEffect(() => {
    getBlock();
  }, []);

  return (
    <div className="App">
      <Header />
      <Background />
      <Main />
      {block && <Block block={block} />}
      {block && <Block block={block} />}
      
      

    </div>
  );
}

export default App;