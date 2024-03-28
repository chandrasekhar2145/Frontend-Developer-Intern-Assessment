import React, { useState } from 'react';
import './index.css'; // Assuming you have your CSS file for styling

const NavigationBar = () => {
  const [activeItem, setActiveItem] = useState('Home'); // State to track active item

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <input type='search' className='searchbar'></input> 
      </div>
      <ul className="nav-items">
        <li className={activeItem === 'Home' ? 'active' : ''} onClick={() => handleItemClick('Home')}>
          Home
        </li>
        <li className={activeItem === 'Organization' ? 'active' : ''} onClick={() => handleItemClick('About')}>
          Organization
        </li>
        <li className={activeItem === 'Assests' ? 'active' : ''} onClick={() => handleItemClick('Contact')}>
          Assests
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
