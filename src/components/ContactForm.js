"use client"
import { useState, useEffect } from "react";
import styles from "./ContactForm.module.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber, parsePhoneNumber } from "react-phone-number-input";
import metadata from "libphonenumber-js/metadata.full.json";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "", website: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [maxLength, setMaxLength] = useState("");
  const [country, setCountry] = useState("IN");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
    setError("");

    if (value) {
      try {
        const phoneNumber = parsePhoneNumber(value, country, metadata);
        if (phoneNumber) {
          setCountry(phoneNumber.country);
          setMaxLength(phoneNumber.nationalNumber.length);
        }
      } catch (error) {
        console.warn("Invalid phone number");
      }
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.website) {
      console.warn("Bot detected!");
      return;
    }

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError("Please fill in all fields.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!isValidPhoneNumber(formData.phone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "", website: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Form submission failed", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
        />

        <label className={styles.label}>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
        />

        <label className={styles.label}>Phone Number</label>
        <PhoneInput
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handlePhoneChange}
          defaultCountry={country}
          international
          limitMaxLength={true}
          className={styles.input}
        />

        <label className={styles.label}>Message</label>
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className={styles.textarea}
        />

        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className={styles.hidden}
        />

        {error && <p className={styles.error}>{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className={styles.button}
        >
          {loading ? "Submitting..." : "Send Message"}
        </button>
      </form>

      {submitted && (
        <div className={styles.modal}>
          <p style={{ color: "green", fontSize: "16px" }}>Thank you! Your message has been sent.</p>
          <button onClick={() => setSubmitted(false)} className={styles.modalButton}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}
