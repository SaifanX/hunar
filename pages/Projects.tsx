
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import ProjectModal from '../components/ProjectModal';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const categories = ['All', 'Residential', 'Luxury Interiors', 'Corporate', 'Hospitality'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 bg-bg-light animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <section className="mb-12">
          <div className="max-w-3xl">
            <span className="text-primary font-headline text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Selected Works</span>
            <h2 className="text-5xl lg:text-7xl font-headline font-light leading-[1.1] tracking-tighter mb-6 uppercase">Our Portfolio</h2>
            <p className="text-charcoal/60 text-lg font-light leading-relaxed">
              Crafting Spaces, Building Legacies. Explore our curated selection of high-end architectural transformations powered by engineering excellence.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex flex-wrap gap-4 items-center">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2.5 text-xs font-bold uppercase tracking-widest transition-all ${
                  filter === cat ? 'bg-primary text-white' : 'bg-charcoal/5 text-charcoal/40 hover:bg-charcoal/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden aspect-[4/3] bg-charcoal cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent flex flex-col justify-end p-10 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-2">{project.category}</span>
                <h3 className="text-white font-headline text-3xl font-extrabold uppercase leading-none">{project.title}</h3>
                <p className="text-white/60 text-sm mt-4 uppercase tracking-widest font-light">{project.location}</p>
                <div className="mt-8 border border-white/30 px-6 py-2 text-white text-[10px] uppercase tracking-widest hover:bg-white hover:text-charcoal transition-colors self-start opacity-0 group-hover:opacity-100">
                  View Case Study
                </div>
              </div>
            </div>
          ))}
        </section>

        <div className="flex flex-col items-center justify-center mt-20 gap-4">
          <button className="group flex items-center gap-4 bg-charcoal text-white px-12 py-6 transition-all hover:bg-primary">
            <span className="font-headline text-[10px] font-bold uppercase tracking-[0.3em]">Load More Projects</span>
            <span className="material-symbols-outlined transition-transform group-hover:translate-y-1">expand_more</span>
          </button>
          <p className="text-[9px] text-charcoal/30 font-bold uppercase tracking-[0.4em] mt-4">Displaying {filteredProjects.length} Masterpieces</p>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

export default Projects;
