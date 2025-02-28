// Sections/Contact/Contact.tsx
import React from "react";
import styles from "./Contact.module.css";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import ContactForm from "../../Components/ContactForm/ContactForm";

interface ContactProps {
  id?: string;
  title: string;
  address: string;
  email: string;
  phone: string;
}

const Contact: React.FC<ContactProps> = ({
  id,
  title,
  address,
  email,
  phone,
}) => {
  const handleFormSubmit = (formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    // This would typically connect to an API or email service
    console.log("Form submitted:", formData);
    alert("Your message has been sent. Thank you!");
  };

  return (
    <section id={id} className={styles.contact}>
      <SectionTitle text={title} />

      <div className={styles.contactGrid}>
        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            <h3 className={styles.infoTitle}>Address</h3>
            <p className={styles.infoText}>{address}</p>
          </div>

          <div className={styles.infoItem}>
            <h3 className={styles.infoTitle}>Email</h3>
            <p className={styles.infoText}>
              <a href={`mailto:${email}`} className={styles.link}>
                {email}
              </a>
            </p>
          </div>

          <div className={styles.infoItem}>
            <h3 className={styles.infoTitle}>Phone</h3>
            <p className={styles.infoText}>
              <a href={`tel:${phone}`} className={styles.link}>
                {phone}
              </a>
            </p>
          </div>

          <div className={styles.patternContainer}>
            <svg
              className={styles.pattern}
              viewBox="0 0 300 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              {[...Array(5)].map((_, i) => (
                <line
                  key={`line-${i}`}
                  x1="0"
                  y1={40 + i * 30}
                  x2="300"
                  y2={40 + i * 30}
                  stroke={
                    i % 2 === 0
                      ? "var(--cm-primary-blue)"
                      : "var(--cm-primary-green)"
                  }
                  strokeWidth="2"
                  className={styles.patternLine}
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </svg>
          </div>
        </div>

        <div className={styles.formContainer}>
          <h3 className={styles.formTitle}>Send us a message</h3>
          <ContactForm onSubmit={handleFormSubmit} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
