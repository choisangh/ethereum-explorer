const web3 = new Web3("https://mainnet.infura.io/v3/f2fd7294530e481d95eaf9ca92d1017f"); // Infura 프로젝트 ID를 입력합니다.
const latestBlockNumber = await web3.eth.getBlockNumber();
const latestBlock = await web3.eth.getBlock(latestBlockNumber);