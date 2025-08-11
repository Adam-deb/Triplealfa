"use client";
import { useState } from "react";

export default function DownloadModal({ isOpen, onClose, downloadUrl }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/sendAppAccess", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const { error } = await res.json();
        throw new Error(error || "Failed to send email");
      }

      // Redirect after success
      window.open(downloadUrl, "_blank", "noopener,noreferrer");

      onClose();

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Get Access to the App</h2>
        <p>Enter your email and we'll send you a QR code that will give you access to the app</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" disabled={loading} style={styles.button}>
            {loading ? "Sending..." : "Submit & Download"}
          </button>
        </form>
        <button onClick={onClose} style={styles.closeBtn}>Close</button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
    background: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000
  },
  modal: {
    background: "#fff", padding: "20px", borderRadius: "10px", width: "90%", maxWidth: "400px", textAlign: "center"
  },
  input: {
    width: "100%", padding: "10px", margin: "10px 0", borderRadius: "5px", border: "1px solid #ccc"
  },
  button: {
    padding: "10px 20px", border: "none", borderRadius: "5px", background: "#ff0f5b", color: "#fff", cursor: "pointer"
  },
  closeBtn: {
    marginTop: "10px", background: "transparent", border: "none", color: "#666", cursor: "pointer"
  }
};