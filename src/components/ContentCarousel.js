"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./ContentCarousel.module.css";

const slides = [
  {
    id: 1,
    content: (
      <div className="slide-one">
        <div className="slide-one-text">
          <h1>Welcome to Our Platform</h1>
          <p>Discover tools and features designed to help you succeed.</p>
        </div>
        <div className="slide-one-image">
          <img src="https://via.placeholder.com/400" alt="Platform" />
        </div>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="slide-two">
        {["Feature A", "Feature B", "Feature C"].map((feature, i) => (
          <div key={i} className="feature-card">
            <h2>{feature}</h2>
            <p>Detailed explanation about {feature.toLowerCase()}.</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="slide-three">
        <form className="form-card">
          <h2>Sign Up</h2>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <button type="submit">Submit</button>
        </form>
      </div>
    ),
  },
];

export default function CustomCarousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
        >
          {slides[current].content}
        </motion.div>
      </AnimatePresence>

      <button className="nav-button prev" onClick={prevSlide}>
        <ChevronLeft />
      </button>
      <button className="nav-button next" onClick={nextSlide}>
        <ChevronRight />
      </button>
    </div>
  );
}