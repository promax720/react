import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const eventDate = new Date('2025-02-15T00:00:00'); // Updated Event Date
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = eventDate - new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const renderTimer = () => {
    return (
      <div className="timer">
        <span>{timeLeft.days || 0}d</span> : 
        <span>{timeLeft.hours || 0}h</span> : 
        <span>{timeLeft.minutes || 0}m</span> : 
        <span>{timeLeft.seconds || 0}s</span>
      </div>
    );
  };

  return (
    <div className="cyberpunk-container">
      <header className="header">
        <img src="https://i.postimg.cc/Gm9pLJ2d/Annotation-2024-12-31-163251.png" alt="AceHack Logo" className="logo" />
        <h1>Innovate. Elevate. Transform.</h1>
      </header>
      <main>
        <section className="event-info">
          <h2>Event Date: February 15, 2025</h2>
          {renderTimer()}
        </section>
        <section className="buttons">
          <button className="cyberpunk-button" onClick={() => alert('Register Now')}>Register Now</button>
          <button className="cyberpunk-button" onClick={() => alert('Join Our Community')}>Join Our Community</button>
        </section>
        <section className="about-us">
          <h3>About Us</h3>
          <p>AceHack is a platform for innovation, collaboration, and transformation. Our mission is to bring together the brightest minds to create impactful solutions.</p>
        </section>
      </main>
    </div>
  );
};

export default App;
