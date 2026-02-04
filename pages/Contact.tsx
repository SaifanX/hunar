
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-bg-light animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" 
            alt="Contact Hero" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl px-6">
          <span className="text-primary font-headline text-xs font-bold uppercase tracking-[0.4em] mb-6 block animate-in fade-in slide-in-from-bottom-4 duration-700">Get In Touch</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-extrabold text-white uppercase leading-none tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">Let's Build <br/>Your Legacy</h1>
          <p className="text-white/70 text-lg font-light leading-relaxed max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
             Whether you're planning a bespoke residence or a large-scale commercial project, our team is ready to bring precision and luxury to your vision.
          </p>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-24">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <h3 className="text-3xl font-headline font-bold uppercase mb-12">Contact Information</h3>
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest mb-2">Our Studio</h4>
                  <p className="text-charcoal/60 font-light text-sm">Ilyasnagar, Bangalore<br/>Karnataka, India</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-primary text-3xl">mail</span>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest mb-2">Email Concierge</h4>
                  <p className="text-charcoal/60 font-light text-sm">concierge@hunar.archi</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-primary text-3xl">call</span>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest mb-2">Direct Line</h4>
                  <p className="text-charcoal/60 font-light text-sm">+91 98863 74122</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-16 shadow-2xl border-t-4 border-primary relative -mt-32 z-20">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40">Full Name</label>
                  <input type="text" className="border-b border-charcoal/10 py-3 focus:outline-none focus:border-primary transition-colors bg-transparent" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40">Email Address</label>
                  <input type="email" className="border-b border-charcoal/10 py-3 focus:outline-none focus:border-primary transition-colors bg-transparent" placeholder="john@example.com" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40">Inquiry Type</label>
                <select className="border-b border-charcoal/10 py-3 focus:outline-none focus:border-primary transition-colors bg-transparent appearance-none">
                  <option>Residential Interior</option>
                  <option>Turnkey Construction</option>
                  <option>Project Management</option>
                  <option>Design Consultation</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40">Project Details</label>
                <textarea className="border-b border-charcoal/10 py-3 h-32 resize-none focus:outline-none focus:border-primary transition-colors bg-transparent" placeholder="Tell us about your vision..."></textarea>
              </div>
              <button className="w-full bg-charcoal text-white py-6 text-xs font-bold uppercase tracking-[0.3em] hover:bg-primary transition-all">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
