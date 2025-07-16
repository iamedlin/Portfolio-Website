import React from 'react';
import './Hobby.css';

const photos = [
  'mimi.jpg', 'meme.jpeg', 'p1.png', 'p2.png',
  'photo5.jpg', 'photo6.jpg', 'photo7.jpg', 'photo8.jpg',
  'photo9.jpg', 'photo10.jpg', 'photo11.jpg', 'photo12.jpg',
];

const Hobby = () => {
  return (
    <main className="hobby-page">
      {/* 📸 4x3 Photo Album Grid */}
      <section className="photo-album">
        {photos.map((src, i) => (
          <div key={i} className="album-photo pop-in delay-1">
            <img src={src} alt={`Photo ${i + 1}`} />
          </div>
        ))}
      </section>

      {/* 🎯 Your Existing Bubble Links */}
      <section className="bubbles">
        <a href="#" target="_blank" rel="noopener noreferrer" className="photo-link pop-in delay-1">
          <img src="logospotify.png" alt="Spotify" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="photo-link pop-in delay-2">
          <img src="Netfilxlogo.png" alt="Netflix" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="photo-link pop-in delay-3">
          <img src="wattpadlogo.png" alt="Wattpad" />
        </a>
      </section>
    </main>
  );
};

export default Hobby;
