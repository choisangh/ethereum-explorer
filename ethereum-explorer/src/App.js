import React, { useState, useEffect } from 'react';
import Block from './components/BlockInfo'
import MainTitle from './components/MainTitle'
import Background from './components/Background';
import Header from './components/Header';
import MainSearchBar from './components/MainSearchBar';
import SubTitle from './components/SubTitle';
import Web3 from 'web3';
import { getLatestBlockNumber, getBlockInfo } from './services/getBlock';
import './App.css';


function App() {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    getLatestBlockNumber().then(num => {
      const blockNumbers = Array.from({ length: 10 }, (_, i) => num - i);
      Promise.all(blockNumbers.map(getBlockInfo)).then(blocks => {
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
