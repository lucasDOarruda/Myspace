import React from 'react';
import homeImage from '../img/homeimg.png'; // Adjust the path if necessary
import newaiimg from '../img/newaiimg.png'; // Adjust the path if necessary
import styles from '../Home.css'; // Import the CSS module

function Home() {
  return (
    <div className={styles.sectionStyle}>
      <div className={`${styles.firstImgHome} first-img-home`}>
        <img src={homeImage} alt="Home" className={`${styles.smallRoundImage} small-round-image`} />
        <h2 className={`${styles.mainHomeTitle} mainhometitle`}>Transforming Raw Data into Strategic Intelligence</h2>
      </div>
      <br></br>
      <div className={`${styles.secondImgHome} second-img-home`}>
        <img src={newaiimg} alt="AI" className={`${styles.newAiImg} newaiimg`} />
        <h2 className={`${styles.mainHomeTitle} mainhometitle`}>Some text here describing the image</h2>
      </div>
    </div>
  );
}

export default Home;
