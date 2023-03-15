import React from 'react';
import '../assets/BlockInfo.css';
import blockimg from '../assets/block.png';

function Block({ block }) {



    return (
        <div className="sectio nav">
            <div className="block-container" >
            <img src={blockimg} alt="block image" style={{width:"40px"}}/><h2> #{block.number}</h2>
                <div className="block-info">
                    <div className="block-hash">
                        <h3>Block Hash</h3>
                        <p>{block.hash}</p>
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
            </div>
        </div>
    );
}

export default Block;