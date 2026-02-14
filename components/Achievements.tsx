'use client';

import React from 'react';
import Image from 'next/image';

interface Certificate {
  id: number;
  title: string;
  organization: string;
  year: string;
}

interface Machine {
  id: number;
  name: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'ISO 9001:2015',
    organization: 'Quality Management',
    year: '2024',
  },
  {
    id: 2,
    title: 'CE Certification',
    organization: 'European Standards',
    year: '2024',
  },
  {
    id: 3,
    title: 'Industry Excellence',
    organization: 'Manufacturing Association',
    year: '2023',
  },
  {
    id: 4,
    title: 'Safety Standards',
    organization: 'Safety Board',
    year: '2023',
  },
];

const machines: Machine[] = [
  {
    id: 1,
    name: 'Channel Letter Bending',
    image: '/Channel_Letter_Bending.png', 
    
  },
  {
    id: 2,
    name: 'ZPG Fiber Laser',
    image: '/ZPG Fiber Laser Machine.png',
  },
  {
    id: 3,
    name: 'CNC Router Machine',
    image: '/CNC Router Machine.png',
  },
  {
    id: 4,
    name: 'GZ UV Printer',
    image: '/uv.jpg',
  },
  {
    id: 5,
    name: 'Handtop UV Hybrid Printer',
    image: '/handtop.jpg',
  },
  {
    id: 6,
    name: 'Laminator',
    image: '/laminater.jpg',
  },
  {
    id: 7,
    name: 'Laser Cutting Machine',
    image: '/Laser Cutting Machine.png',
  },
  {
    id: 8,
    name: 'Laser Welding Machine',
    image: '/Laser Welding Machine.png',
  },
  {
    id: 9,
    name: 'Roland 640',
    image: '/roland-sg2.jpg',
  },
  {
    id: 10,
    name: 'Roland 540',
    image: '/roland_sg3.jpg',
  },
];

const Achievements: React.FC = () => {
  return (
    <div 
    id="achievements"
    className=" min-h-screen bg-gradient-to-b from-white to-sky-50">
      {/* Certificates Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-sky-700 mb-4">
              Our Achievements
            </h1>
            <p className="text-xl text-gray-600">
              Certified Excellence in Manufacturing
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-xl shadow-lg border-2 border-sky-100 p-6 hover:shadow-xl hover:border-sky-300 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-600 text-center text-sm mb-1">
                  {cert.organization}
                </p>
                <p className="text-sky-600 text-center font-semibold">
                  {cert.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machines Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-sky-700 mb-4">
              Our Machines
            </h2>
            <p className="text-xl text-gray-600">
              State-of-the-art Manufacturing Equipment
            </p>
          </div>

          {/* Machines Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {machines.map((machine) => (
              <div
                key={machine.id}
                className="group bg-sky-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Machine Image */}
                <div className="relative h-64 bg-gradient-to-br from-sky-100 to-sky-200 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Placeholder for machine image */}
                    {/* <div className="w-full h-full bg-sky-200 flex items-center justify-center">
                      <svg
                        className="w-24 h-24 text-sky-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                    </div> */}
                    {/* Uncomment and use this when you add actual images */}
                    <Image
                      src={machine.image}
                      alt={machine.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Machine Info */}
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-sky-600 transition-colors duration-300">
                    {machine.name}
                  </h3>
                  <div className="mt-3 flex items-center text-sky-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* View Details */}
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Stats */}
      {/* <section className="py-12 px-6 bg-gradient-to-r from-sky-500 to-sky-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-sky-100 text-lg">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">9+</div>
              <div className="text-sky-100 text-lg">Advanced Machines</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4+</div>
              <div className="text-sky-100 text-lg">Certifications</div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Achievements;



































