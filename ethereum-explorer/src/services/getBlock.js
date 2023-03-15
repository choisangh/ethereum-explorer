import Web3 from 'web3';

const mainnet_url = "https://mainnet.infura.io/v3/f2fd7294530e481d95eaf9ca92d1017f"
const web3 = new Web3(mainnet_url);

export async function getLatestBlockNumber() {
  const block = await web3.eth.getBlock("latest");
  return block.number;
}

export async function getBlockInfo(number) {
  const block = await web3.eth.getBlock(number);
  return block;
}