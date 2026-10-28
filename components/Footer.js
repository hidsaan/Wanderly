'use client';

import { Compass, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-forest-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Compass className="w-6 h-6" />
              <span className="text-xl font-bold">Wanderly</span>
            </div>
            <p className="text-white/70 text-sm max-w-md">
              Curating unforgettable travel experiences to the world's most beautiful destinations. Your journey begins here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('destinations')}
                className="block text-white/70 hover:text-white transition-colors text-sm"
              >
                Destinations
              </button>
              <button 
                onClick={() => scrollToSection('experiences')}
                className="block text-white/70 hover:text-white transition-colors text-sm"
              >
                Experiences
              </button>
              <button 
                onClick={() => scrollToSection('why-us')}
                className="block text-white/70 hover:text-white transition-colors text-sm"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('plan-trip')}
                className="block text-white/70 hover:text-white transition-colors text-sm"
              >
                Plan a Trip
              </button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <a 
                href="mailto:hello@wanderly.com"
                className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>hello@wanderly.com</span>
              </a>
              
              {/* Social Media */}
              <div className="flex space-x-3 pt-2">
                <a 
                  href="#" 
                  aria-label="Facebook"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  aria-label="Instagram"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  aria-label="Twitter"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-white/60 text-sm text-center">
            © {new Date().getFullYear()} Wanderly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
