"use client";
import React from 'react';
import { Mail, MapPin, Globe, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#001b3a] text-white pt-20 pb-10 px-6 mt-20 relative overflow-hidden">
      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-red-600 via-[#002855] to-red-600"></div>
      
      <div className="max-w-6xl mx-auto">
        {/* CAMBIO CLAVE: grid-cols-1 por defecto, md:grid-cols-3 para tablets/PC */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16 border-b border-white/10 text-center md:text-left">
          
          {/* COLUMNA 1: Contacto Directo */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-red-500 uppercase tracking-widest text-xs mb-6">Capacitación y Desarrollo</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-center md:items-start gap-3 group">
                <Mail size={18} className="text-red-500 shrink-0" />
                <a href="mailto:universidad_cr@unicomer.com" className="group-hover:text-white transition-colors break-all md:break-normal">
                  universidad_cr@unicomer.com
                </a>
              </li>
              <li className="flex items-center md:items-start gap-3">
                <div className="w-4.5 flex justify-center text-red-500 font-bold text-sm">📞</div>
                <span>+506 2437 4848</span>
              </li>
            </ul>
          </div>

          {/* COLUMNA 2: Ubicación */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-red-500 uppercase tracking-widest text-[10px] mb-6">Sede Central</h4>
            <div className="flex items-center md:items-start gap-3 text-center md:text-left">
              <MapPin size={20} className="text-red-500 shrink-0 mt-1" /> 
              <p className="text-sm text-gray-400 leading-relaxed italic">
                <span className="text-white not-italic font-semibold">Centro Corporativo El Cafetal</span> <br />
                Edificio B, 2ndo piso <br />
                Heredia, Belén, Costa Rica.
              </p>
            </div>
          </div>

          {/* COLUMNA 3: Enlaces */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-red-500 uppercase tracking-widest text-xs mb-6">Sitios Oficiales</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://www.grupounicomer.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-300 hover:text-red-500 transition-colors">
                  <Globe size={16} /> Grupo Unicomer
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/grupo-unicomer/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  <Linkedin size={16} /> LinkedIn Corporativo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* CRÉDITOS */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] text-center md:text-left">
            © {new Date().getFullYear()} Universidad Unicomer - Gestión de Talento Humano
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-[10px] text-gray-600 uppercase tracking-widest">
            <span className="hover:text-white cursor-pointer transition-colors">Políticas de Privacidad</span>
            <span className="hover:text-white cursor-pointer transition-colors">Términos de Uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
}