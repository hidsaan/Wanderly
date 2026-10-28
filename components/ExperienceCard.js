'use client';

export default function ExperienceCard({ experience }) {
  const Icon = experience.icon;
  
  return (
    <div className="group p-6 bg-white rounded-xl border border-sand-200 hover:border-forest-800 hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 bg-sand-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-forest-800 transition-colors duration-300">
        <Icon className="w-6 h-6 text-forest-800 group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-forest-900 mb-2">{experience.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{experience.description}</p>
    </div>
  );
}
