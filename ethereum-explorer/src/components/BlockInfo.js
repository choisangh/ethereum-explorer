import React from 'react';
import '../assets/BlockInfo.css';

function Block({ block }) {



    return (
        <div className="sectio nav">
            <div className="block-container">
                <h2>Block #{block.number}</h2>
                <div className="block-info">
                    <div className="block-hash">
                        <h3>Block Hash</h3>
                        <p>{block.hash}</p>
                    </div>
                    <div className="prev-hash">
                        <h3>Previous Hash</h3>
                        <p>{block.previousHash}</p>
                    </div>
                    <div className="timestamp">
                        <h3>Timestamp</h3>
                        <p>{new Date(block.timestamp * 1000).toLocaleString()}</p>
                    </div>
                    <div className="transactions">
                        <h3>Transactions</h3>
                        <p>{block.transactions.length}</p>
                    </div>
                </div>
                <canvas className="background" style={{ zIndex: 0 }}></canvas>
            </div>
        </div>
    );
}

export default Block;