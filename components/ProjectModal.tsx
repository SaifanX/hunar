
import React from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300">
      <div 
        className="absolute inset-0 bg-charcoal/95 backdrop-blur-md" 
        onClick={onClose}
      />
      <div className="relative w-full max-w-6xl bg-white overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[95vh] animate-in slide-in-from-bottom-8 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-12 h-12 bg-charcoal text-white flex items-center justify-center hover:bg-primary transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="w-full md:w-1/2 relative h-64 md:h-auto overflow-hidden bg-charcoal">
          <img 
            src={project.image} 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col overflow-y-auto bg-white">
          <div className="mb-8">
            <span className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase mb-4 block">
              {project.category}
            </span>
            <h2 className="text-4xl font-headline font-extrabold text-charcoal uppercase leading-none mb-4">
              {project.title}
            </h2>
            <div className="flex items-center gap-2 text-charcoal/40 mb-8">
              <span className="material-symbols-outlined text-sm">location_on</span>
              <span className="text-xs uppercase tracking-widest font-medium">{project.location}</span>
            </div>
          </div>

          <div className="space-y-10 text-charcoal/70 leading-relaxed font-light mb-12">
            <section>
              <h4 className="text-[10px] font-bold text-charcoal uppercase tracking-[0.2em] mb-3 border-b border-charcoal/5 pb-2">Overview</h4>
              <p>{project.description}</p>
            </section>

            <section>
              <h4 className="text-[10px] font-bold text-charcoal uppercase tracking-[0.2em] mb-3 border-b border-charcoal/5 pb-2">Design Process</h4>
              <p className="text-sm">
                Our process for {project.title} began with an intensive spatial study. We utilized 3D BIM modeling (powered by MBSYS) to simulate lighting and structural feasibility, ensuring that the radical aesthetic vision was grounded in engineering precision. Every detail was curated through three phases: Conceptual Narrative, Technical Engineering, and Artisanal Execution.
              </p>
            </section>

            <section>
              <h4 className="text-[10px] font-bold text-charcoal uppercase tracking-[0.2em] mb-3 border-b border-charcoal/5 pb-2">Materials Used</h4>
              <div className="flex flex-wrap gap-2 mt-4">
                {['Italian Calacatta Marble', 'Brushed Champagne Brass', 'Reclaimed Smoked Oak', 'Custom Venetian Plaster', 'Architectural Smart Glass'].map((mat) => (
                  <span key={mat} className="text-[9px] uppercase tracking-wider bg-charcoal/5 px-3 py-1 font-medium">{mat}</span>
                ))}
              </div>
            </section>
          </div>

          <div className="pt-8 border-t border-charcoal/5 mt-auto">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border border-primary flex items-center justify-center">
                <span className="text-primary font-bold text-xs">M</span>
              </div>
              <div>
                <span className="block text-[8px] font-bold uppercase tracking-[0.2em] text-charcoal/40">Engineering Excellence</span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.1em] text-charcoal">Powered by MBSYS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
