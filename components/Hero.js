'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search, Calendar, Users } from 'lucide-react';

export default function Hero({ onSearch }) {
  const [searchData, setSearchData] = useState({
    destination: '',
    date: '',
    travelers: '2',
  });

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchData);
    }
  };

  const scrollToDestinations = () => {
    const element = document.getElementById('destinations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPlanTrip = () => {
    const element = document.getElementById('plan-trip');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-[90vh] min-h-[600px] max-h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85"
          alt="Mountain landscape"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Discover Places That Stay With You
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl">
              Explore breathtaking destinations, immerse yourself in local cultures, and create memories that last a lifetime.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={scrollToDestinations}
                className="px-8 py-3 bg-white text-forest-900 rounded-lg font-medium hover:bg-sand-50 transition-all duration-200 shadow-lg"
              >
                Explore Destinations
              </button>
              <button 
                onClick={scrollToPlanTrip}
                className="px-8 py-3 bg-forest-800 text-white rounded-lg font-medium hover:bg-forest-700 transition-all duration-200 border-2 border-white/20"
              >
                Plan Your Journey
              </button>
            </div>

            {/* Compact Search Panel */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-2xl max-w-3xl">
              <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Where to?"
                    value={searchData.destination}
                    onChange={(e) => setSearchData({ ...searchData, destination: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-800 focus:border-transparent"
                  />
                </div>
                
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    value={searchData.date}
                    onChange={(e) => setSearchData({ ...searchData, date: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-800 focus:border-transparent"
                  />
                </div>
                
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    value={searchData.travelers}
                    onChange={(e) => setSearchData({ ...searchData, travelers: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-800 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="1">1 Traveler</option>
                    <option value="2">2 Travelers</option>
                    <option value="3">3 Travelers</option>
                    <option value="4">4 Travelers</option>
                    <option value="5+">5+ Travelers</option>
                  </select>
                </div>
                
                <button
                  type="submit"
                  className="sm:col-span-3 w-full py-3 bg-forest-800 text-white rounded-lg font-medium hover:bg-forest-700 transition-colors"
                >
                  Search Destinations
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
