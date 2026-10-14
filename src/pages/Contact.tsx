import { motion } from 'motion/react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { studio } from '../data/studio';

export default function Contact() {
  return (
    <main className="w-full pt-32 pb-20 min-h-screen">
      <section className="py-20 px-6 bg-[#FDFCFB]">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-[11px] uppercase tracking-[0.4em] font-bold text-stone-400 mb-4">Get In Touch</p>
          <h1 className="font-serif text-5xl md:text-7xl text-stone-900 leading-[0.95] tracking-tight mb-8">
            Contact Us
          </h1>
          <p className="text-stone-500 text-sm max-w-xl mx-auto leading-relaxed">
            Questions about programs, levels or a free trial class? Get in touch and we will help you find the right fit.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-12 bg-white rounded-[2rem] border border-stone-200/50 shadow-sm text-center transform hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mb-6 text-stone-600">
              <MapPin size={28} />
            </div>
            <h3 className="font-serif text-2xl text-stone-900 mb-4">Locations</h3>
            {studio.locations.map((loc, i) => (
              <div key={loc.name}>
                {i > 0 && <div className="w-8 h-px bg-stone-200 my-4 mx-auto"></div>}
                <p className="text-sm font-medium text-stone-800">{loc.name}</p>
                <p className="text-sm text-stone-500">{loc.address}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col items-center p-12 bg-white rounded-[2rem] border border-stone-200/50 shadow-sm text-center transform hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mb-6 text-stone-600">
              <Phone size={28} />
            </div>
            <h3 className="font-serif text-2xl text-stone-900 mb-4">Phone</h3>
            <p className="text-sm text-stone-500 mb-2">{studio.phone}</p>
            <p className="text-xs text-stone-400 mt-2">{studio.officeHours}</p>
          </div>

          <div className="flex flex-col items-center p-12 bg-white rounded-[2rem] border border-stone-200/50 shadow-sm text-center transform hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mb-6 text-stone-600">
              <Mail size={28} />
            </div>
            <h3 className="font-serif text-2xl text-stone-900 mb-4">Email</h3>
            <p className="text-sm text-stone-500 mb-2 break-all">{studio.email}</p>
            <p className="text-xs text-stone-400 mt-2">We try to reply within 24 hours.</p>
          </div>
        </div>
        <p className="max-w-6xl mx-auto mt-10 text-center text-xs text-stone-400">
          Sora Performing Arts is a fictional studio. The address, phone number and email on this page are examples.
        </p>
      </section>
    </main>
  );
}
