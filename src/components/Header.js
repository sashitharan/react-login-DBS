import React from 'react'
import dbs from '../images/dbs.png';

 function Header (){
    return (
      <div className="headerTop">
        <img src={dbs} width="300" height="300" />
        <h1 style={{color: 'white'}}>DBS Admin Portal</h1>
        <h2 style={{color: 'white'}}>Login below</h2>
        <br />
        <p style={{color: 'blue'}}>(Username: admin, Password: admin)</p>
      </div>
    );
}

export default Header;
