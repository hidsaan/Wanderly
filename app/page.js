'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DestinationCard from '@/components/DestinationCard';
import ExperienceCard from '@/components/ExperienceCard';
import PlanTripModal from '@/components/PlanTripModal';
import Footer from '@/components/Footer';
import { Mountain, Waves, Sparkles, Heart, Globe, Users, Award } from 'lucide-react';

export default function Home() {
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [searchResults, setSearchResults] = useState(null);

  const destinations = [
    {
      id: 1,
      name: 'Kashmir',
      country: 'India',
      description: 'Paradise on earth with snow-capped peaks and serene valleys',
      image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=85',
      price: 1299,
    },
    {
      id: 2,
      name: 'Bali',
      country: 'Indonesia',
      description: 'Tropical paradise with ancient temples and pristine beaches',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=85',
      price: 1599,
    },
    {
      id: 3,
      name: 'Swiss Alps',
      country: 'Switzerland',
      description: 'Majestic mountains and charming alpine villages',
      image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=85',
      price: 2499,
    },
    {
      id: 4,
      name: 'Kyoto',
      country: 'Japan',
      description: 'Ancient temples, zen gardens, and traditional culture',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=85',
      price: 1899,
    },
  ];

  const experiences = [
    {
      id: 1,
      title: 'Adventure',
      description: 'Thrilling experiences from mountain trekking to water sports in breathtaking locations.',
      icon: Mountain,
    },
    {
      id: 2,
      title: 'Nature & Wildlife',
      description: 'Encounter exotic wildlife and explore pristine natural landscapes around the world.',
      icon: Waves,
    },
    {
      id: 3,
      title: 'Cultural Experiences',
      description: 'Immerse yourself in local traditions, cuisine, and authentic cultural encounters.',
      icon: Sparkles,
    },
    {
      id: 4,
      title: 'Relaxation',
      description: 'Unwind at luxury resorts and peaceful retreats designed for ultimate rejuvenation.',
      icon: Heart,
    },
  ];

  const handleSearch = (searchData) => {
    setSearchResults(searchData);
    // Scroll to destinations
    const element = document.getElementById('destinations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDestinationClick = (destination) => {
    // In a real app, this would navigate to a destination detail page
    alert(`Exploring ${destination.name}! In a full application, this would show detailed information about ${destination.name}.`);
  };

  return (
    <main>
      <Navbar />
      
      <Hero onSearch={handleSearch} />

      {/* Featured Destinations */}
      <section id="destinations" className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-forest-900 mb-4">
              Featured Destinations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked destinations that offer unforgettable experiences and stunning natural beauty
            </p>
          </div>

          {searchResults && (
            <div className="mb-8 p-4 bg-sand-100 rounded-lg">
              <p className="text-sm text-gray-700">
                <span className="font-medium">Search results for:</span> {searchResults.destination || 'All destinations'} 
                {searchResults.date && ` • ${searchResults.date}`}
                {searchResults.travelers && ` • ${searchResults.travelers} travelers`}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                onClick={() => handleDestinationClick(destination)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="py-20 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-forest-900 mb-4">
              Travel Your Way
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you seek adventure, culture, or relaxation, we craft experiences tailored to your travel style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Travel With Us */}
      <section id="why-us" className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-forest-900 mb-4">
              Why Travel With Wanderly
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We make travel planning effortless so you can focus on creating memories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-forest-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-forest-900 mb-3">Curated Destinations</h3>
              <p className="text-gray-600">
                Every destination is carefully selected and vetted by our travel experts for quality and authenticity.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-forest-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-forest-900 mb-3">Personalized Planning</h3>
              <p className="text-gray-600">
                Our team works closely with you to create tailored itineraries that match your interests and budget.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-forest-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-forest-900 mb-3">Memorable Experiences</h3>
              <p className="text-gray-600">
                Local guides and authentic experiences ensure your journey is filled with unforgettable moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="plan-trip" className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=85"
            alt="Travel destination"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Your Next Adventure Starts Here
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Let us help you plan the perfect journey. Share your travel dreams with us today.
            </p>
            <button
              onClick={() => setIsPlanModalOpen(true)}
              className="px-8 py-4 bg-white text-forest-900 rounded-lg font-medium text-lg hover:bg-sand-50 transition-colors shadow-xl"
            >
              Start Planning
            </button>
          </div>
        </div>
      </section>

      <Footer />

      <PlanTripModal 
        isOpen={isPlanModalOpen}
        onClose={() => setIsPlanModalOpen(false)}
      />
    </main>
  );
}
