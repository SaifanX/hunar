
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-bg-light animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <span className="text-primary font-headline text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Get In Touch</span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold uppercase leading-none tracking-tighter mb-8">Let's build <br/>your legacy.</h1>
            <p className="text-charcoal/60 text-lg font-light leading-relaxed mb-12 max-w-lg">
              Whether you're planning a bespoke residence or a large-scale commercial project, our team is ready to bring precision and luxury to your vision.
            </p>

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

          <div className="bg-white p-10 md:p-16 shadow-sm border border-charcoal/5 relative">
            <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-primary/20"></div>
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
