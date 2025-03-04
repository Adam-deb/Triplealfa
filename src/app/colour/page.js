"use client"
import { useState } from 'react';

const palettes = [
  {
    name: 'Serious Blue',
    primary: '#1B365D',
    secondary: '#D1DCE5',
    accent: '#F5A623',
    background: '#F4F7FA',
    text: '#2C3E50'
  },
  {
    name: 'Modern Slate',
    primary: '#2C3E50',
    secondary: '#AAB7C4',
    accent: '#E67E22',
    background: '#F4F6F8',
    text: '#34495E'
  },
  {
    name: 'Professional Green',
    primary: '#264653',
    secondary: '#E9C46A',
    accent: '#2A9D8F',
    background: '#F4F6F0',
    text: '#2C3E50'
  },
  {
    name: 'Trustworthy Navy',
    primary: '#0A3D62',
    secondary: '#82C0CC',
    accent: '#F39C12',
    background: '#F0F4F8',
    text: '#34495E'
  },
  {
    name: 'Sophisticated Grey',
    primary: '#4A4A4A',
    secondary: '#BFC9CA',
    accent: '#D35400',
    background: '#F4F4F4',
    text: '#2C3E50'
  },
  {
    name: 'Prime Teal',
    primary: '#0E6251',
    secondary: '#A3CB38',
    accent: '#F4C724',
    background: '#F4F6F0',
    text: '#2C3E50'
  },
  {
    name: 'Iron Blue',
    primary: '#2C3E50',
    secondary: '#BDC3C7',
    accent: '#E74C3C',
    background: '#ECF0F1',
    text: '#34495E'
  },
  {
    name: 'Urban Steel',
    primary: '#5D6D7E',
    secondary: '#ABB2B9',
    accent: '#F39C12',
    background: '#F0F3F4',
    text: '#2C3E50'
  },
  {
    name: 'Classic Black',
    primary: '#2C2C2C',
    secondary: '#BDC3C7',
    accent: '#F1C40F',
    background: '#F4F4F4',
    text: '#333333'
  },
  {
    name: 'Royal Blue',
    primary: '#1F618D',
    secondary: '#D6DBDF',
    accent: '#F39C12',
    background: '#ECF0F1',
    text: '#2C3E50'
  }
];

export default function PaletteExamples() {
  const [selectedPalette, setSelectedPalette] = useState(palettes[0]);

  return (
    <div style={{ backgroundColor: selectedPalette.background, color: selectedPalette.text, padding: '20px', minHeight: '100vh' }}>
      <header style={{ padding: '40px', textAlign: 'center', backgroundColor: selectedPalette.primary, color: selectedPalette.background }}>
        <h1>Welcome to Triple Alfa</h1>
        <p>Empowering Your Financial Future</p>
      </header>

      <section style={{ padding: '40px', textAlign: 'center' }}>
        <h2 style={{ color: selectedPalette.primary }}>Our Services</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </section>

      <section style={{ padding: '40px', backgroundColor: selectedPalette.secondary, textAlign: 'center' }}>
        <h2>Why Choose Us?</h2>
        <p style={{ color: selectedPalette.text }}>Experience, transparency, and innovative financial solutions tailored for you.</p>
      </section>

      <section style={{ padding: '40px', textAlign: 'center', backgroundColor: selectedPalette.accent }}>
        <h2>Investment Opportunities</h2>
        <p style={{ color: selectedPalette.background }}>Explore new ways to grow your wealth.</p>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', margin: '40px 0', padding: '20px' }}>
        {palettes.map((palette, index) => (
          <div key={index} style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', borderRadius: '16px', overflow: 'hidden' }}>
            <div style={{ padding: '24px' }}>
              <h3 style={{ color: palette.primary }}>{palette.name}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '16px' }}>
                <div style={{ height: '64px', backgroundColor: palette.primary }}></div>
                <div style={{ height: '64px', backgroundColor: palette.secondary }}></div>
                <div style={{ height: '64px', backgroundColor: palette.accent }}></div>
              </div>
              <button 
                style={{ padding: '10px 20px', backgroundColor: palette.secondary, color: palette.text, border: 'none', borderRadius: '8px', cursor: 'pointer' }}
                onClick={() => setSelectedPalette(palette)}
              >
                Select {palette.name}
              </button>
            </div>
          </div>
        ))}
      </div>

      <footer style={{ padding: '20px', textAlign: 'center', backgroundColor: selectedPalette.secondary, color: selectedPalette.text }}>
        <p>&copy; 2025 Triple Alfa. All Rights Reserved.</p>
      </footer>
    </div>
  );
}