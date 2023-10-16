import React from 'react';
import MyPhoto from './Ruthvik JEE Pic.jpg'

const Header = () => {
  return (
    <header>
      <img src={MyPhoto} alt="My Picture" className="rounded-image" />
      <h1>Pakki Karthikeya Ruthvik</h1>
      <p>Student at Vellore Institute of Technology (Junior year)</p>
    </header>
  );
}

export default Header;