import React from 'react';
import { Link } from 'react-router-dom';
import './Hobby.css';

const Hobby = () => {
  return (
<section className="bubbles">
  <a href="" target="_blank" rel="noopener noreferrer" className="photo-link pop-in delay-1">
  <img src="logospotify.png" alt="Spotify" />
</a>
  <a href="" target="_blank" rel="noopener noreferrer" className="photo-link pop-in delay-1">
  <img src="Netfilxlogo.png" alt="Netflix" />
</a>
 <a href="" target="_blank" rel="noopener noreferrer" className="photo-link pop-in delay-1">
  <img src="wattpadlogo.png" alt="Wattpad" />
</a>
</section>
  );
};

export default Hobby;
