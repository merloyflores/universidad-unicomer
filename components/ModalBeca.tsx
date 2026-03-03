"use client";
import React, { useState } from 'react';
import { X, Send, GraduationCap } from 'lucide-react';

interface ModalBecaProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalBeca({ isOpen, onClose }: ModalBecaProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    cedula: '',
    universidad: '',
    carrera: ''
  });

  if (!isOpen) return null;

  // ESTA ES LA FUNCIÓN QUE ACCIONA EL ENVÍO
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Evita que la página se recargue

    const emailDestino = "universidad_cr@unicomer.com";
    const asunto = encodeURIComponent(`Solicitud de Beca UU - ${formData.nombre}`);
    
    // Construimos el cuerpo del mensaje
    const cuerpo = encodeURIComponent(
      `Hola equipo de Capacitación y Desarrollo,\n\n` +
      `Deseo solicitar información para aplicar al convenio de becas bajo el Reglamento R-028.\n\n` +
      `Mis datos son los siguientes:\n` +
      `- Nombre: ${formData.nombre}\n` +
      `- Cédula: ${formData.cedula}\n` +
      `- Universidad: ${formData.universidad}\n` +
      `- Carrera: ${formData.carrera}\n\n` +
      `Quedo a la espera de los pasos a seguir. Saludos.`
    );

    // ESTA LÍNEA ES LA QUE "DISPARA" EL CORREO
    window.location.href = `mailto:${emailDestino}?subject=${asunto}&body=${cuerpo}`;
    
    // Opcional: Cerrar el modal después de enviar
    onClose();
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#002855]/60 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Contenedor del Modal */}
      <div className="relative bg-white w-full max-w-lg rounded-4xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        
        <div className="bg-[#002855] p-8 text-white relative">
          <button 
            onClick={onClose} 
            aria-label="Cerrar"
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
          <GraduationCap size={40} className="text-red-500 mb-4" />
          <h2 className="text-2xl font-black uppercase tracking-tighter">Solicitud de Beca</h2>
          <p className="text-blue-200 text-sm">Completa los datos para el equipo de Capacitación.</p>
        </div>

        {/* IMPORTANTE: El onSubmit debe estar en la etiqueta <form> */}
        <form onSubmit={handleSubmit} className="p-8 space-y-4 text-slate-800">
          <div className="space-y-1">
            <label htmlFor="nombre" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Nombre Completo</label>
            <input 
              id="nombre"
              required
              type="text"
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 text-sm focus:ring-2 focus:ring-red-500 outline-none transition-all"
              placeholder="Ej: Juan Pérez"
              onChange={(e) => setFormData({...formData, nombre: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="cedula" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Cédula</label>
              <input 
                id="cedula"
                required
                type="text"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 text-sm focus:ring-2 focus:ring-red-500 outline-none"
                onChange={(e) => setFormData({...formData, cedula: e.target.value})}
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="universidad" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Universidad</label>
              <input 
                id="universidad"
                required
                type="text"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 text-sm focus:ring-2 focus:ring-red-500 outline-none"
                onChange={(e) => setFormData({...formData, universidad: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-1 pb-4">
            <label htmlFor="carrera" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Carrera / Programa</label>
            <input 
              id="carrera"
              required
              type="text"
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 text-sm focus:ring-2 focus:ring-red-500 outline-none"
              onChange={(e) => setFormData({...formData, carrera: e.target.value})}
            />
          </div>

          {/* EL BOTÓN DEBE SER type="submit" */}
          <button 
            type="submit"
            className="w-full bg-red-600 text-white py-4 rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-lg hover:bg-red-700 transition-all flex items-center justify-center gap-3"
          >
            <Send size={16} /> Enviar Solicitud
          </button>
        </form>
      </div>
    </div>
  );
}