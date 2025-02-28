// Components/ContactForm/ContactForm.tsx
import React, { useState } from "react";
import styles from "./ContactForm.module.css";

interface ContactFormProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGrid}>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.input}
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="subject" className={styles.label}>
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className={styles.input}
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className={styles.textarea}
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
        ></textarea>
      </div>

      <button type="submit" className={styles.button}>
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
