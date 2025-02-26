import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaSpotify,
  FaApple,
  FaBandcamp,
} from "react-icons/fa";
import styles from "./Syth.module.css";

const Syth = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple parallax effect for header image
    const handleScroll = () => {
      if (!headerRef.current) return;
      const scrollPos = window.scrollY;
      const headerHeight = headerRef.current.offsetHeight;
      if (scrollPos <= headerHeight) {
        const translateY = scrollPos * 0.4;
        headerRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Sample upcoming shows data
  const upcomingShows = [
    {
      date: "APR 15, 2025",
      venue: "The Basement",
      location: "New York, NY",
      ticketLink: "#",
    },
    {
      date: "APR 22, 2025",
      venue: "Punk House",
      location: "Philadelphia, PA",
      ticketLink: "#",
    },
    {
      date: "MAY 10, 2025",
      venue: "Underground",
      location: "Boston, MA",
      ticketLink: "#",
    },
  ];

  // Sample albums data
  const albums = [
    {
      title: "Basement Noise",
      year: "2024",
      coverColor: "#ff3333",
    },
    {
      title: "Raw Power",
      year: "2023",
      coverColor: "#333333",
    },
    {
      title: "First Demo",
      year: "2022",
      coverColor: "#222222",
    },
  ];

  return (
    <div className={styles.page}>
      <Link to="/" className={styles.backLink}>
        <span className={styles.backLinkIcon}>←</span> Return to Gallery
      </Link>

      <header className={styles.header}>
        <div ref={headerRef}>
          <img
            src="/drumset.webp"
            alt="Syth band drumset in a basement"
            className={`${styles.headerImage} ${styles.redAccent}`}
          />
        </div>
        <div className={styles.noise}></div>
        <h1 className={styles.logo}>SYTH</h1>
        <p className={styles.tagline}>Basement Core Punk</p>

        <div className={styles.scrollPrompt}>
          <div className={styles.scrollText}>Scroll Down</div>
          <div className={styles.scrollIcon}></div>
        </div>
      </header>

      <section className={styles.section + " " + styles.aboutSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>About</h2>

          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <p>
                Syth emerged from the gritty basements of the underground punk
                scene, bringing raw energy and unfiltered emotion to every
                performance. Formed in 2022, we've been crafting our unique
                sound that blends old-school punk aggression with modern
                sensibilities.
              </p>
              <p>
                Our music doesn't compromise—it's loud, fast, and unapologetic.
                Drawing inspiration from the DIY ethos of classic punk while
                pushing the boundaries with contemporary production and
                songwriting techniques.
              </p>
              <p>
                The band consists of four members united by a shared vision of
                creating music that matters, that speaks truth to power, and
                that reminds everyone that punk is alive and well in the
                basements and backrooms where real music thrives.
              </p>
            </div>

            <div>
              <img
                src="/drumset.webp"
                alt="Syth's drum set"
                className={styles.aboutImage}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section + " " + styles.showsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Upcoming Shows</h2>

          <div className={styles.showsList}>
            {upcomingShows.map((show, index) => (
              <div key={index} className={styles.showItem}>
                <div className={styles.showDate}>{show.date}</div>
                <div>
                  <div className={styles.showVenue}>{show.venue}</div>
                  <div className={styles.showLocation}>{show.location}</div>
                </div>
                <a href={show.ticketLink} className={styles.ticketButton}>
                  Tickets
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section + " " + styles.musicSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Music</h2>

          <div className={styles.albumsGrid}>
            {albums.map((album, index) => (
              <div key={index} className={styles.album}>
                <div
                  className={styles.albumCover}
                  style={{ backgroundColor: album.coverColor }}
                >
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <circle cx="12" cy="12" r="1" fill="white" />
                  </svg>
                </div>
                <div className={styles.albumInfo}>
                  <div className={styles.albumTitle}>{album.title}</div>
                  <div className={styles.albumYear}>{album.year}</div>
                  <div className={styles.streamLinks}>
                    <a href="#" className={styles.streamLink} title="Spotify">
                      <FaSpotify />
                    </a>
                    <a
                      href="#"
                      className={styles.streamLink}
                      title="Apple Music"
                    >
                      <FaApple />
                    </a>
                    <a href="#" className={styles.streamLink} title="Bandcamp">
                      <FaBandcamp />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section + " " + styles.contactSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Contact</h2>

          <div className={styles.contactText}>
            For booking inquiries, press, or just to say hello, reach out to us
            at <strong>info@sythband.com</strong> or connect with us on social
            media.
          </div>

          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink} title="Instagram">
              <FaInstagram className={styles.socialIcon} />
            </a>
            <a href="#" className={styles.socialLink} title="Twitter">
              <FaTwitter className={styles.socialIcon} />
            </a>
            <a href="#" className={styles.socialLink} title="Facebook">
              <FaFacebookF className={styles.socialIcon} />
            </a>
            <a href="#" className={styles.socialLink} title="YouTube">
              <FaYoutube className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div>© {new Date().getFullYear()} Syth. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Syth;
