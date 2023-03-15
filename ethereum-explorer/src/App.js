import React, { useState, useEffect } from 'react';
import Block from './components/BlockInfo'
import MainTitle from './components/MainTitle'
import Background from './components/Background';
import Header from './components/Header';
import MainSearchBar from './components/MainSearchBar';
import SubTitle from './components/SubTitle';
import Web3 from 'web3';
import './App.css';


function App() {
  const [blocks, setBlocks] = useState([]);

  async function getLatestBlock() {
    const web3 = new Web3("https://mainnet.infura.io/v3/f2fd7294530e481d95eaf9ca92d1017f");
    let block = await web3.eth.getBlock("latest");
    return block.number
  }

  async function getBlock(number) {
    const web3 = new Web3("https://mainnet.infura.io/v3/f2fd7294530e481d95eaf9ca92d1017f");
    let block = await web3.eth.getBlock(number);
    return block;
  }

  useEffect(() => {
    getLatestBlock().then(num => {
      const blockNumbers = Array.from({ length: 10 }, (_, i) => num - i);
      Promise.all(blockNumbers.map(getBlock)).then(blocks => {
        setBlocks(blocks);
      });
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Background />
      <MainTitle />
      <MainSearchBar />
      <SubTitle />

      {blocks.map((block, index) => (
        <Block key={index} block={block} />
      ))}

    </div>
  );
}

export default App;
