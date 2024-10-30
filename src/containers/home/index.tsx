import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
const Home = () => {
  const navigate = useNavigate();

  const handleNavigateTocontactMePage = () => {
    navigate('/contact');
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I am Zhang;
          <br />
          Front end developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: 'translateY(550px)' /*初始位置再-550px */,
        }}
        end={{
          transform: 'translateY(0px)' /*最终值再0 */,
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateTocontactMePage}>Hire Me</button>
        </div>
      </Animate>
    </section>
  );
};
export default Home;
