import React from 'react';
import './Hobby.css';

const photos = [
  'w1.jpg', 'w5.jpg', 'w6.jpg', 'w4.jpg',
  'w13.jpg', 'w7.jpg', 'w11.jpg', 'w12.jpg',
  'w3.jpg', 'w9.jpg', 'w10.jpg', 'w2.jpg',
];

const Hobby = () => {
  return (
    <main className="hobby-page">
      {/* 📸 4x3 Photo Album Grid */}
      <section className="photo-album">
        {photos.map((src, i) => (
          <div key={i} className="album-photo pop-in delay-1">
            <img src={src} alt={`Litrato ${i + 1}`} />
          </div>
        ))}
      </section>

      {/* 🎯 Your Existing Bubble Links */}
      <section className="bubbles">
        <a href="https://open.spotify.com/playlist/6rzGLm3pAZLD5Xejj7TY9O" target="_blank" rel="noopener noreferrer" className="photo-link pop-in delay-1">
          <img src="logospotify.png" alt="Spotify" />
        </a>
        <a href="https://www.microsoft.com/en-us/p/harry-potter-the-complete-8-film-collection/8d6kgwxq97k9?activetab=pivot%3aoverviewtab" target="_blank" rel="noopener noreferrer" className="photo-link pop-in delay-2">
          <img src="Netfilxlogo.png" alt="Netflix" />
        </a>
        <a href="https://nibmehub.com/opac-service/pdf/read/The%20Subtle%20Art%20of%20Not%20Giving%20a%20Fck%20A%20Counterintuitive%20Approach%20to%20Living%20a%20Good%20Life%20by%20Mark%20Manson%20(z-lib.org).pdf" target="_blank" rel="noopener noreferrer" className="photo-link pop-in delay-3">
          <img src="wattpadlogo.png" alt="Wattpad" />
        </a>
      </section>
    </main>
  );
};

export default Hobby;
