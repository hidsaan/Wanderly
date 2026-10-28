'use client';

import Image from 'next/image';
import { MapPin, ArrowRight } from 'lucide-react';

export default function DestinationCard({ destination, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      {/* Image */}
      <div className="relative h-80 overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Price Badge */}
        {destination.price && (
          <div className="absolute top-4 right-4 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-sm font-medium text-forest-900">
            From ${destination.price}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="flex items-center space-x-2 mb-2">
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-medium opacity-90">{destination.country}</span>
        </div>
        <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
        <p className="text-sm opacity-90 mb-4">{destination.description}</p>
        
        <div className="flex items-center text-sm font-medium group-hover:gap-2 transition-all">
          <span>Explore</span>
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
}
