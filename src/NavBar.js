import React from 'react';

function NavBar(){
        return (
            <div className="navBar">
              <ul id="nav">
              <li><a className="active" href="#home">Home</a></li>
                <li><a href="#Inventory">Inventory</a></li>
                <li><a href="#Contact Us">Contact Us</a></li>
              </ul>
            </div>
        );
}

export default NavBar;