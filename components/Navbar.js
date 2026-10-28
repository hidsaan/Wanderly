'use client';

import { useState } from 'react';
import { Menu, X, Compass } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-sand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 group"
          >
            <Compass className="w-6 h-6 text-forest-800 group-hover:rotate-45 transition-transform duration-300" />
            <span className="text-xl font-bold text-forest-900">Wanderly</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-forest-800 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('destinations')}
              className="text-gray-700 hover:text-forest-800 transition-colors"
            >
              Destinations
            </button>
            <button 
              onClick={() => scrollToSection('experiences')}
              className="text-gray-700 hover:text-forest-800 transition-colors"
            >
              Experiences
            </button>
            <button 
              onClick={() => scrollToSection('why-us')}
              className="text-gray-700 hover:text-forest-800 transition-colors"
            >
              About
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('plan-trip')}
              className="px-5 py-2 bg-forest-800 text-white rounded-lg text-sm font-medium hover:bg-forest-700 transition-colors"
            >
              Plan Your Trip
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-sand-50"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-sand-100 bg-white">
          <div className="px-4 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-sand-50 rounded-lg transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('destinations')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-sand-50 rounded-lg transition-colors"
            >
              Destinations
            </button>
            <button 
              onClick={() => scrollToSection('experiences')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-sand-50 rounded-lg transition-colors"
            >
              Experiences
            </button>
            <button 
              onClick={() => scrollToSection('why-us')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-sand-50 rounded-lg transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('plan-trip')}
              className="block w-full px-4 py-2 bg-forest-800 text-white rounded-lg font-medium hover:bg-forest-700 transition-colors"
            >
              Plan Your Trip
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
