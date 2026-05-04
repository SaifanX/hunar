
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import ProjectModal from '../components/ProjectModal';
import { Project } from '../types';
import SEO from '../components/SEO';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const categories = ['All', 'Residential', 'Luxury Interiors', 'Corporate', 'Hospitality'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="bg-bg-light animate-in fade-in slide-in-from-bottom-4 duration-500">
      <SEO title="Our Portfolio | Hunar Selected Works" description="Explore our curated selection of high-end architectural transformations and luxury interiors in Bengaluru." />
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=60&w=1920" 
            alt="Showcase of Premium Architectural Projects" 
            width="1920"
            height="1080"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-80"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl px-6">
          <span className="text-primary font-headline text-xs font-bold uppercase tracking-[0.4em] mb-6 block animate-in fade-in slide-in-from-bottom-4 duration-700">Selected Works</span>
          <h1 className="text-[clamp(2.5rem,8vw,5rem)] md:text-[clamp(4rem,10vw,8rem)] font-headline font-extrabold text-white uppercase leading-none tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">Our Portfolio</h1>
          <p className="text-white/70 text-lg font-light leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Crafting Spaces, Building Legacies. Explore our curated selection of high-end architectural transformations powered by engineering excellence.
          </p>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-24">
        <section className="mb-16 flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-4 items-center" role="tablist" aria-label="Project Categories">
            {categories.map(cat => (
              <button 
                key={cat}
                role="tab"
                aria-selected={filter === cat}
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

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8" aria-label="Project Grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden aspect-[4/3] bg-charcoal cursor-pointer"
              onClick={() => setSelectedProject(project)}
              role="button"
              aria-label={`View details for ${project.title}`}
            >
              <img 
                src={`${project.image.split('&q=')[0]}&q=60&w=1000`} 
                alt={`${project.title} - ${project.category} in ${project.location}`} 
                width="800"
                height="600"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 animate-in fade-in duration-1000"
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
          <button aria-label="Load more architectural projects" className="group flex items-center gap-4 bg-charcoal text-white px-12 py-6 transition-all hover:bg-primary">
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
