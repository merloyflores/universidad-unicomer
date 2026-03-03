"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Rocket, BookOpen, Star, ArrowRight, X, 
  Award, LayoutGrid, ExternalLink 
} from 'lucide-react';

// 1. LA ESTRUCTURA (Para que no de error de "type never")
interface Insignia {
  id: number;
  titulo: string;
  desc: string;
  skills: string[];
  img: string;
  color: string;
}

// 2. LOS DATOS (Asegúrate de que las imágenes existan en /public)
const insigniasData: Insignia[] = [
  {
    id: 1,
    titulo: "Master Unicomer",
    desc: "Desarrollo exitoso de Master Class, demostrando experticia y compromiso con la formación profesional.",
    skills: ["Comunicación Efectiva", "Dedicación", "Innovación"],
    img: "/Insignia1.png",
    color: "from-amber-400 to-orange-600"
  },
  {
    id: 2,
    titulo: "Formador Talento Único",
    desc: "Reconocimiento por impartir sesiones de formación, compartiendo habilidades para el crecimiento del equipo.",
    skills: ["Mentoría", "Formación", "Liderazgo"],
    img: "/Insignia2.png",
    color: "from-blue-400 to-indigo-600"
  },
  {
    id: 3,
    titulo: "Negociación",
    desc: "Dominio de negociaciones efectivas y autoconocimiento para impactar positivamente los resultados.",
    skills: ["Negociación", "Planeación", "Comunicación"],
    img: "/Insignia3.png",
    color: "from-emerald-400 to-teal-600"
  },
  {
    id: 4,
    titulo: "Certificado de Coaching",
    desc: "Certificación de 60 horas en competencias para el acompañamiento y mejora del desempeño del equipo.",
    skills: ["Coaching", "Escucha Activa", "Gestión de Equipos"],
    img: "/Insignia4.png",
    color: "from-red-400 to-rose-600"
  },
  {
    id: 5,
    titulo: "LiderazGO12",
    desc: "Programa de liderazgo 360° enfocado en habilidades interpersonales y adaptación al cambio.",
    skills: ["Adaptación", "Autogestión", "Toma de Decisiones"],
    img: "/Insignia5.png",
    color: "from-purple-400 to-fuchsia-600"
  },
  {
    id: 6,
    titulo: "LIDERSHIFT",
    desc: "Gestión efectiva de equipos bajo la cultura y valores de liderazgo Unicomer.",
    skills: ["Empatía", "Delegar", "Trabajo en Equipo"],
    img: "/Insignia6.png",
    color: "from-sky-400 to-blue-600"
  },
  {
    id: 7,
    titulo: "Liderando en la Nueva Era",
    desc: "Herramientas de liderazgo integral para potenciar el talento humano en entornos cambiantes.",
    skills: ["Estrategia", "Gestión del Tiempo", "Coaching"],
    img: "/Insignia7.png",
    color: "from-orange-400 to-red-600"
  }
];

export default function SeccionCertificados() {
  const [selectedInsignia, setSelectedInsignia] = useState<Insignia | null>(null);

  return (
    <main className="min-h-screen bg-white">
      
      {/* SECCIÓN DE GALERÍA VIVA */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-[#002855] uppercase tracking-tighter">
              Insignias <span className="text-red-600">Disponibles</span>
            </h2>
            <p className="text-slate-500 mt-4">Haz clic en una insignia para ver los detalles de tu logro.</p>
          </div>

          {/* SLIDER INFINITO */}
          <div className="relative group mb-20 overflow-hidden py-10">
            <div className="flex gap-12 animate-infinite-scroll hover:[animation-play-state:paused] w-max">
              {[...insigniasData, ...insigniasData].map((insignia, index) => (
                <button
                  key={`${insignia.id}-${index}`}
                  onClick={() => setSelectedInsignia(insignia)}
                  className="w-48 h-48 md:w-56 md:h-56 shrink-0 transition-all hover:scale-110 active:scale-95"
                >
                  <img src={insignia.img} alt={insignia.titulo} className="w-full h-full object-contain drop-shadow-2xl" />
                </button>
              ))}
            </div>
          </div>

          {/* CUADRO DE COLECCIÓN */}
          <div className="bg-slate-50 rounded-[40px] p-8 md:p-12 border border-slate-100 flex flex-col md:flex-row items-center gap-10">
             <img src="/Insignias.WEBP" alt="Catálogo" className="w-full md:w-1/3 rounded-2xl shadow-xl" />
             <div className="space-y-4">
                <h3 className="text-2xl font-black text-[#ffffff]">¡Y muchas más por descubrir!</h3>
                <p className="text-slate-500 text-sm">Gestiona tus logros de forma segura y confiable a través de Acreditta.</p>
                <Link href="https://www.acreditta.com" target="_blank" className="inline-flex items-center gap-2 text-red-600 font-bold uppercase text-[10px] tracking-widest">
                  Ver catálogo completo <ExternalLink size={14} />
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* MODAL DINÁMICO (Sin errores de "never") */}
      {selectedInsignia && (
        <div className="fixed inset-0 z-200 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#002855]/90 backdrop-blur-md" onClick={() => setSelectedInsignia(null)}></div>
          <div className="relative bg-white w-full max-w-2xl rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in zoom-in duration-300">
            <button onClick={() => setSelectedInsignia(null)} className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full hover:bg-red-600 hover:text-white transition-all z-10">
              <X size={20} />
            </button>
            <div className={`w-full md:w-2/5 bg-linear-to-br ${selectedInsignia.color} p-12 flex items-center justify-center`}>
              <img src={selectedInsignia.img} alt={selectedInsignia.titulo} className="w-full drop-shadow-2xl" />
            </div>
            <div className="w-full md:w-3/5 p-8 md:p-12 space-y-6">
              <h3 className="text-2xl font-black text-[#002855] uppercase tracking-tighter">{selectedInsignia.titulo}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{selectedInsignia.desc}</p>
              <div className="flex flex-wrap gap-2">
                {selectedInsignia.skills.map(skill => (
                  <span key={skill} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-[10px] font-bold uppercase">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CIERRE ÉPICO */}
      <section className="py-32 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
             <Rocket className="mx-auto text-red-600 animate-bounce" size={48} />
             <h2 className="text-5xl md:text-7xl font-black text-[#002855] leading-[1.1]">
                El mundo digital espera <br />
                <span className="text-red-600">por tu talento</span>
             </h2>
             <p className="text-slate-500 text-xl font-light">Empezá hoy mismo a construir tu identidad profesional digital.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link href="/plataforma" className="group p-8 bg-slate-50 rounded-4xl border border-slate-100 hover:bg-[#002855] hover:text-white transition-all">
              <BookOpen size={24} className="mx-auto mb-4 text-red-600" />
              <span className="font-black uppercase text-xs tracking-widest">Seguir Aprendiendo</span>
            </Link>
            <Link href="/beneficios" className="group p-8 bg-slate-50 rounded-4xl border border-slate-100 hover:bg-red-600 hover:text-white transition-all">
              <Star size={24} className="mx-auto mb-4 text-[#002855] group-hover:text-white" />
              <span className="font-black uppercase text-xs tracking-widest">Más Beneficios</span>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
    </main>
  );
}