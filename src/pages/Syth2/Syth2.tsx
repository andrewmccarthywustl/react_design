// src/pages/Syth/Syth.tsx
import { useEffect, useRef } from "react";
import styles from "./Syth2.module.css";

const Syth2 = () => {
  return (
    <div className={styles.sythPage}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.logoContainer}>
            <h1 className={styles.logo}>SYTH</h1>
          </div>

          <p className={styles.tagline}>
            PSYCHEDELIC GRUNGE FROM THE IRON HORSE
          </p>
        </div>

        <div className={styles.horseSection}>
          <div className={styles.horseImage}></div>
          <div className={styles.horseOverlay}></div>
        </div>

        <div className={styles.albumSection}>
          <h2 className={styles.sectionTitle}>LATEST RELEASE</h2>
          <div className={styles.album}>
            <div className={styles.albumCover}></div>
            <div className={styles.albumInfo}>
              <h3 className={styles.albumTitle}>CHRONOS GALLOP</h3>
              <p className={styles.albumDesc}>
                A journey through time on iron hooves, where mechanical rhythms
                meet organic chaos.
              </p>
              <ul className={styles.trackList}>
                <li>1. Iron Mane</li>
                <li>2. Grandfather's Warning</li>
                <li>3. Teal Horizon</li>
                <li>4. Burnt Mechanisms</li>
                <li>5. Temporal Gallop</li>
                <li>6. Rusted Pendulum</li>
                <li>7. Psychedelic Hourglass</li>
              </ul>
              <a href="#" className={styles.listenButton}>
                LISTEN NOW
              </a>
            </div>
          </div>
        </div>

        <div className={styles.tourSection}>
          <h2 className={styles.sectionTitle}>UPCOMING SHOWS</h2>
          <ul className={styles.tourDates}>
            <li>
              <span className={styles.date}>APR 15</span>
              <span className={styles.venue}>The Clock Tower, Seattle</span>
              <a href="#" className={styles.ticketsButton}>
                TICKETS
              </a>
            </li>
            <li>
              <span className={styles.date}>APR 22</span>
              <span className={styles.venue}>Iron Horse Saloon, Portland</span>
              <a href="#" className={styles.ticketsButton}>
                TICKETS
              </a>
            </li>
            <li>
              <span className={styles.date}>MAY 10</span>
              <span className={styles.venue}>
                Timekeeper's Lodge, Vancouver
              </span>
              <a href="#" className={styles.ticketsButton}>
                TICKETS
              </a>
            </li>
            <li>
              <span className={styles.date}>MAY 17</span>
              <span className={styles.venue}>
                Clockwork Gallery, San Francisco
              </span>
              <a href="#" className={styles.ticketsButton}>
                TICKETS
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.merch}>
          <h2 className={styles.sectionTitle}>MERCHANDISE</h2>
          <div className={styles.merchGrid}>
            <div className={styles.merchItem}>
              <div className={styles.merchImage1}></div>
              <h3>IRON HORSE TEE</h3>
              <p>$25</p>
              <a href="#" className={styles.buyButton}>
                BUY
              </a>
            </div>
            <div className={styles.merchItem}>
              <div className={styles.merchImage2}></div>
              <h3>CLOCKWORK VINYL</h3>
              <p>$30</p>
              <a href="#" className={styles.buyButton}>
                BUY
              </a>
            </div>
            <div className={styles.merchItem}>
              <div className={styles.merchImage3}></div>
              <h3>PSYCHEDELIC POSTER</h3>
              <p>$15</p>
              <a href="#" className={styles.buyButton}>
                BUY
              </a>
            </div>
          </div>
        </div>

        <div className={styles.about}>
          <h2 className={styles.sectionTitle}>ABOUT SYTH</h2>
          <div className={styles.aboutContent}>
            <p>
              Emerging from the collision of mechanical precision and organic
              chaos, SYTH creates a sound that gallops through time like an
              iron-clad horse. Founded in 2022, the band draws inspiration from
              the rhythmic ticking of grandfather clocks and the thundering
              hooves of metal-shod steeds.
            </p>
            <p>
              SYTH's sonic palette blends the distorted aggression of grunge
              with swirling, time-bending psychedelia. Bathed in the contrasting
              hues of calming teal and fiery burnt orange, their music creates a
              landscape where time folds in on itself.
            </p>
          </div>
        </div>

        <div className={styles.contact}>
          <h2 className={styles.sectionTitle}>CONTACT</h2>
          <form className={styles.contactForm}>
            <input type="text" placeholder="NAME" />
            <input type="email" placeholder="EMAIL" />
            <textarea placeholder="MESSAGE"></textarea>
            <button type="submit" className={styles.submitButton}>
              SEND
            </button>
          </form>
        </div>

        <div className={styles.footer}>
          <div className={styles.social}>
            <a href="#" className={styles.socialIcon}>
              IG
            </a>
            <a href="#" className={styles.socialIcon}>
              FB
            </a>
            <a href="#" className={styles.socialIcon}>
              SC
            </a>
            <a href="#" className={styles.socialIcon}>
              SP
            </a>
          </div>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} SYTH | ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </div>
  );
};

export default Syth2;
