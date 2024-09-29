import React from 'react';
import './Pavan.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import me from '../Images/me.png';

function Pavan() {
  return (
    <div>
      <div id="Pavan">
        <img className="img-thumbnail" src={me} alt="Pavan's Image" loading="lazy" />
      </div>

      <div>
        <h1 id="Intro">Hey I'm <span>Pavan Karthik</span></h1>
      </div>

      <div className="intro-container">
        <p className="text">I am a self-taught full stack web application developer based out of Bangalore. I started my professional journey as a SAP Hybris Developer at Pearson, where I resolved various issues related to the e-commerce websites. Exploring these websites sparked my interest and I decided to learn more about web development. The more I learned about it, the more I fell in love with it!</p>
        <p className="text">Outside of coding, I am passionate about traveling, cooking, gaming, watching movies, reading, trekking and spending time with family.</p>
      </div>
    </div>
  );
}

export default Pavan;
