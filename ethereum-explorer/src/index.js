import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Block from './components/BlockInfo'
import reportWebVitals from './reportWebVitals';
import Web3 from 'web3';


const root = ReactDOM.createRoot(document.getElementById('root'));
async function getBlock() {
  const web3 = new Web3("https://mainnet.infura.io/v3/"); 
  let block = await web3.eth.getBlock("latest");
  return block
}
let block = getBlock();
console.log(block);


(async function () {
  const block = await getBlock();
  console.log(block);
  root.render(
    <React.StrictMode>
      <App />
      <Block block={block} />
    </React.StrictMode>
  );
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
