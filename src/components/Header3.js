"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from "./Header3.module.css";

const navigationData = [
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const updateView = () => {
      setIsMobileView(window.innerWidth <= 970);
    };

    updateView();
    window.addEventListener('resize', updateView);
    return () => window.removeEventListener('resize', updateView);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.mainHeaderContainer}>
        <div className={styles.logoNavContainer}>
          <div className={styles.logoContainer}>
            <Link href="/">
              <Image height="40" width="210" className={styles.logoImage} src="/headerLogo1.png" alt="Triplealfa Logo" />
            </Link>
          </div>
          <nav className={`${styles.navbar} ${menuOpen ? styles.navOpen : ''}`}>
            <ul>
              {navigationData.map((navItem, index) => (
                <li key={index} className={styles.navItem}>
                  <Link className={styles.mainNavItem} href={navItem.href}>
                    {navItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.rightMenu}>
            <Link href="#contact-us">
              Contact us
            </Link>
          </div>
          <button className={styles.menuToggle} aria-label="Toggle navigation" onClick={toggleMenu}>
            <span className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  );
}