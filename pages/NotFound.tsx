import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-charcoal">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-3xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="relative inline-block mb-12">
            <span className="text-[12rem] md:text-[16rem] font-headline font-black text-white/5 leading-none select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-px h-full bg-primary/30 absolute left-1/2 -translate-x-1/2 hidden md:block" />
              <div className="h-px w-full bg-primary/30 absolute top-1/2 -translate-y-1/2 hidden md:block" />
              <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-white uppercase tracking-tighter bg-charcoal px-8 py-4 relative z-10">
                Out of Scope
              </h2>
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <p className="text-white/40 text-lg mb-12 font-light leading-relaxed uppercase tracking-[0.1em]">
              The blueprint you're looking for doesn't exist in our current design phase. Let's redirect you to the main studio.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link
                to="/"
                className="w-full sm:w-auto px-12 py-5 bg-primary text-white font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-charcoal transition-all duration-500 shadow-2xl"
              >
                Return Home
              </Link>
              
              <button
                onClick={() => navigate(-1)}
                className="w-full sm:w-auto px-12 py-5 border border-white/10 text-white/60 font-bold uppercase tracking-[0.3em] text-[10px] hover:border-primary hover:text-primary transition-all duration-500"
              >
                Previous View
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Coordinates */}
      <div className="absolute top-10 left-10 text-[8px] font-mono text-primary/40 uppercase tracking-[0.5em] hidden lg:block">
        Lat: 12.9067° N <br />
        Lng: 77.5685° E
      </div>
      <div className="absolute bottom-10 right-10 text-[8px] font-mono text-primary/40 uppercase tracking-[0.5em] hidden lg:block">
        Project: Hunar_Interiors <br />
        Status: Void_Space
      </div>
    </div>
  );
};

export default NotFound;
