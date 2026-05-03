
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import ServiceModal from '../components/ServiceModal';
import { Service } from '../types';
import SEO from '../components/SEO';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <div className="bg-bg-light animate-in fade-in slide-in-from-bottom-4 duration-500">
      <SEO title="Premium Architectural Services | Hunar" description="Explore our core capabilities from spatial planning to turnkey construction, backed by precision engineering." />
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[550px] pt-40 flex items-center justify-center bg-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=60&w=1920" 
            alt="Interior Design Services Showcase" 
            width="1920"
            height="1080"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl px-6">
          <span className="text-primary font-headline text-xs font-bold uppercase tracking-[0.4em] mb-6 block animate-in fade-in slide-in-from-bottom-4 duration-700">Core Capabilities</span>
          <h1 className="text-[clamp(2.5rem,8vw,5rem)] md:text-[clamp(4rem,10vw,8rem)] font-headline font-extrabold text-white uppercase leading-none tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">Crafting <br/>Excellence</h1>
          <p className="text-white/70 text-lg font-light leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            From initial spatial planning to the final finishing touch, we offer a full spectrum of services tailored to high-end residential and commercial projects.
          </p>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-24">
        <div className="flex justify-end mb-12">
            <button aria-label="Learn about our design process" className="flex items-center gap-2 px-8 py-4 border border-charcoal/10 hover:border-primary text-charcoal text-[10px] font-bold uppercase tracking-widest transition-all">
              <span>Our Process</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-charcoal/10">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              onClick={() => setSelectedService(service)}
              role="button"
              aria-label={`Learn more about ${service.title}`}
              className="group p-10 border-r border-b border-charcoal/10 hover:bg-white relative flex flex-col justify-between h-[450px] transition-colors duration-500 cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <span className="text-5xl font-black text-charcoal/5 group-hover:text-primary transition-colors">{service.index}</span>
                <span className="material-symbols-outlined text-charcoal/20 group-hover:text-primary transition-colors" aria-hidden="true">{service.icon}</span>
              </div>
              <div>
                <div className="mb-6 overflow-hidden aspect-video grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img 
                    alt={`Hunar Service: ${service.title}`} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" 
                    src={`${service.image.split('&q=')[0]}&q=60&w=800`} 
                    loading="lazy"
                    width="400"
                    height="225"
                  />
                </div>
                <h3 className="text-2xl font-headline font-bold text-charcoal mb-3 uppercase tracking-tight">{service.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed font-light">{service.description}</p>
              </div>
            </div>
          ))}
          
          {/* Turnkey Feature */}
          <div 
            onClick={() => setSelectedService(SERVICES.find(s => s.id === 's3') || null)}
            role="button"
            aria-label="View our turnkey execution process"
            className="lg:col-span-3 group p-10 border-r border-b border-charcoal/10 hover:bg-white relative flex flex-col md:flex-row items-center gap-12 min-h-[400px] transition-all duration-500 cursor-pointer"
          >
            <div className="flex-shrink-0">
              <span className="text-8xl font-black text-charcoal/5 group-hover:text-primary transition-colors">03</span>
            </div>
            <div className="flex-grow flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2 overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700">
                <img 
                    alt="Comprehensive Turnkey Construction Site" 
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-1000" 
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=60&w=1200" 
                    loading="lazy"
                    width="800"
                    height="256"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="material-symbols-outlined text-primary text-3xl" aria-hidden="true">verified</span>
                  <h3 className="text-4xl font-headline font-bold text-charcoal uppercase">Turnkey Execution</h3>
                </div>
                <p className="text-charcoal/60 text-lg leading-relaxed mb-6 font-light italic">
                  End-to-end management from concept to completion. We handle designers, vendors, and contractors to deliver your vision flawlessly, backed by MBSYS project control.
                </p>
                <button aria-label="Explore our detailed turnkey project process" className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.3em] group/btn">
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
