import React from 'react';


function MainSearchBar() {
    return (
        <div className="sectio nav" style={{ zIndex: 1 }}>
            <div className="search-form-container" style={{ zIndex: 1 }}>
                <form className="search-form" style={{ zIndex: 1 }} >
                    <input type="text" placeholder="Search by Txn Hash / Block Number / Block Hash" />
                    <button type="submit">Go</button>
                </form>
            </div>
        </div>
    );
}

export default MainSearchBar;