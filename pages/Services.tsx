
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import ServiceModal from '../components/ServiceModal';
import { Service } from '../types';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <div className="pt-32 pb-24 bg-bg-light animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-charcoal/10 mb-16">
          <div className="max-w-2xl">
            <p className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">Core Capabilities</p>
            <h1 className="text-charcoal text-5xl md:text-7xl font-headline font-extrabold uppercase leading-none tracking-tighter">Crafting <br/>Excellence.</h1>
            <p className="mt-6 text-charcoal/60 text-lg font-light leading-relaxed">
              From initial spatial planning to the final finishing touch, we offer a full spectrum of services tailored to high-end residential and commercial projects.
            </p>
          </div>
          <div>
            <button className="flex items-center gap-2 px-8 py-4 border border-charcoal/10 hover:border-primary text-charcoal text-[10px] font-bold uppercase tracking-widest transition-all">
              <span>Our Process</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-charcoal/10">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              onClick={() => setSelectedService(service)}
              className="group p-10 border-r border-b border-charcoal/10 hover:bg-white relative flex flex-col justify-between h-[450px] transition-colors duration-500 cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <span className="text-5xl font-black text-charcoal/5 group-hover:text-primary transition-colors">{service.index}</span>
                <span className="material-symbols-outlined text-charcoal/20 group-hover:text-primary transition-colors">{service.icon}</span>
              </div>
              <div>
                <div className="mb-6 overflow-hidden aspect-video grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img alt={service.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" src={service.image} />
                </div>
                <h3 className="text-2xl font-headline font-bold text-charcoal mb-3 uppercase tracking-tight">{service.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed font-light">{service.description}</p>
              </div>
            </div>
          ))}
          
          {/* Turnkey Feature */}
          <div 
            onClick={() => setSelectedService(SERVICES.find(s => s.id === 's3') || null)}
            className="lg:col-span-3 group p-10 border-r border-b border-charcoal/10 hover:bg-white relative flex flex-col md:flex-row items-center gap-12 min-h-[400px] transition-all duration-500 cursor-pointer"
          >
            <div className="flex-shrink-0">
              <span className="text-8xl font-black text-charcoal/5 group-hover:text-primary transition-colors">07</span>
            </div>
            <div className="flex-grow flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2 overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700">
                <img alt="Turnkey" className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1541913057-22102a3e7405?auto=format&fit=crop&q=80&w=1200" />
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                  <h3 className="text-4xl font-headline font-bold text-charcoal uppercase">Turnkey Execution</h3>
                </div>
                <p className="text-charcoal/60 text-lg leading-relaxed mb-6 font-light italic">
                  End-to-end management from concept to completion. We handle designers, vendors, and contractors to deliver your vision flawlessly, backed by MBSYS project control.
                </p>
                <button className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.3em] group/btn">
                  <span>Explore Detailed Process</span>
                  <span className="material-symbols-outlined transform group-hover/btn:translate-x-2 transition-transform">arrow_right_alt</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
      />
    </div>
  );
};

export default Services;
