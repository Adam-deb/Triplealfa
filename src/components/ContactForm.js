"use client";
import { useState, useEffect } from "react";
import styles from "./ContactForm.module.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber, parsePhoneNumber } from "react-phone-number-input";
import metadata from "libphonenumber-js/metadata.full.json";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "", _honey: "" });
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

    if (formData._honey) {
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
      const urlEncodedData = new URLSearchParams();
      for (let key in formData) {
        urlEncodedData.append(key, formData[key]);
      }

      urlEncodedData.append("_captcha", "false");
      urlEncodedData.append("_template", "table");
      urlEncodedData.append("_subject", "New Contact Form Submission");

      const response = await fetch("https://formsubmit.co/adam@triplealfa.com", {
        method: "POST",
        body: urlEncodedData.toString(),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "", _honey: "" });
      } else {
        console.error("Form submission failed");
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
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
        {/* Honeypot Field (hidden to prevent bots) */}
        <input
          type="text"
          name="_honey"
          style={{ display: "none" }}
          value={formData._honey}
          onChange={handleChange}
        />

        {/* Hidden Fields for FormSubmit */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_subject" value="New Contact Form Submission" />

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

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" disabled={loading} className={styles.button}>
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