"use client";
import React from 'react';
import Link from 'next/link';
import { 
  Award, CheckCircle2, Share2, ShieldCheck, 
  ExternalLink, Rocket, ArrowRight, Trophy,
  Medal, Star,
  FileText,
  Globe,
  BookOpen
} from 'lucide-react';

interface Insignia {
  id: number;
  titulo: string;
  desc: string;
  skills: string[];
  img: string;
  color: string;
}

const insigniasData: Insignia[] = [
  {
    id: 1,
    titulo: "Master Unicomer",
    desc: "Otorgada por el desarrollo exitoso de una Master Class.",
    skills: ["Comunicación", "Innovación"],
    img: "/Insignia1.png",
    color: "from-amber-400 to-orange-600"
  },
  {
    id: 2,
    titulo: "Formador Talento Único",
    desc: "Reconocimiento por impartir sesiones de formación interna.",
    skills: ["Mentoría", "Liderazgo"],
    img: "/Insignia2.png",
    color: "from-blue-400 to-indigo-600"
  }
];

export default function SeccionInsignias() {
  function setSelectedInsignia(insignia: any): void {
    throw new Error('Function not implemented.');
  }

  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. HERO RECONOCIMIENTO */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-linear-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-8">
            <img src="/logo-unicomer.png" alt="Grupo Unicomer" className="h-12 w-auto" />
          </div>
          
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#002855] px-6 py-2 rounded-full text-sm font-black uppercase tracking-[0.3em] mb-8">
            <Trophy size={16} className="text-red-600" /> Aventura de Reconocimiento
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-[#002855] mb-8 leading-tight">
            Tus logros merecen <br />
            <span className="text-red-600 italic">ser celebrados</span>
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            En <strong>Universidad Unicomer</strong> nos enorgullecemos de nuestro talento. Distinguimos tu excelencia, destrezas y aprendizaje mediante insignias digitales que validan tu evolución profesional ante el mundo.
          </p>
        </div>
        
        {/* Decoración de fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-red-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#002855] rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* 2. EXPLICACIÓN ACREDITTA (Efecto Glassmorphism) */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#002855] rounded-[40px] p-8 md:p-16 text-white grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-4xl font-black">¿Qué son las <br /><span className="text-red-500">Insignias Digitales?</span></h2>
              <p className="text-blue-100 leading-relaxed">
                Es una solución tecnológica que certifica tus títulos y habilidades. Con el respaldo de <strong>Acreditta</strong>, gestionamos tus competencias de forma segura y confiable en el ecosistema digital.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <ShieldCheck className="text-red-500 shrink-0" size={24} />
                  <p className="text-sm">Certificación verificable y segura al 100%.</p>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <Share2 className="text-red-500 shrink-0" size={24} />
                  <p className="text-sm">Comparte tus logros en LinkedIn, Facebook y Twitter.</p>
                </div>
              </div>
            </div>
            <div className="relative z-10 flex justify-center">
              <img 
                src="/Insignia.WEBP" 
                alt="Insignia Digital" 
                className="w-full max-w-sm drop-shadow-[0_0_50px_rgba(239,68,68,0.3)] animate-float" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. ANATOMÍA DE LA INSIGNIA */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black text-[#002855] uppercase tracking-tighter">Anatomía de tu Éxito</h3>
            <p className="text-slate-500 mt-4">¿Qué hace que una insignia sea valiosa?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Medal />, title: "Representación Gráfica", desc: "Imagen única que simboliza visualmente el logro alcanzado." },
              { icon: <FileText />, title: "Metadatos Reales", desc: "Datos que validan origen, emisor y autenticidad del logro." },
              { icon: <Globe />, title: "Impacto Global", desc: "Reconocimiento verificable en línea y redes sociales profesionales." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-4xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-[#002855] mb-4">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <img src="/3Insignias.WEBP" alt="Ejemplos de Insignias" className="max-w-2xl w-full" />
          </div>
        </div>
      </section>

      {/* 4. CÓMO OBTENERLAS (UX Paso a Paso) */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <img src="/Mujer5.WEBP" alt="Colaboradora Exitosa" className="rounded-[40px] shadow-2xl" />
          </div>
          <div className="order-1 lg:order-2 space-y-12">
            <div>
              <h2 className="text-4xl font-black text-[#002855] mb-4">¿Cómo obtengo mis <br/><span className="text-red-600">Insignias Digitales?</span></h2>
              <p className="text-slate-600">Es un proceso automático basado en tu excelencia y participación.</p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-black shadow-lg shadow-red-200">1</div>
                <div>
                  <h4 className="font-bold text-[#002855] text-lg">Cumple los Criterios</h4>
                  <p className="text-slate-500 text-sm">Alcanza metas, completa cursos o demuestra comportamientos clave definidos por la Universidad.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-black shadow-lg shadow-red-200">2</div>
                <div>
                  <h4 className="font-bold text-[#002855] text-lg">Recibe la Notificación</h4>
                  <p className="text-slate-500 text-sm">Llegará un correo de <strong>Acreditta</strong> y de Grupo Unicomer con las instrucciones para reclamar tu premio.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-black shadow-lg shadow-red-200">3</div>
                <div>
                  <h4 className="font-bold text-[#002855] text-lg">¡Presume tu Logro!</h4>
                  <p className="text-slate-500 text-sm">Configura tu cuenta, descarga tu certificado y compártelo en tus redes profesionales.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA VIVA DE INSIGNIAS */}
      <section className="py-24 bg-[#002855] text-white overflow-hidden relative"  text-white>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <Award className="mx-auto text-red-500 mb-6" size={60} />
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">
            Tu Colección de <span className="text-red-500">Victorias</span>
          </h2>
          <p className="text-blue-200 text-lg mb-16 max-w-2xl mx-auto">
            Explora el catálogo de insignias que puedes comenzar a ganar hoy mismo. Cada una representa un paso más hacia tu cima profesional.
          </p>
          
        </div>

          {/* El Slider Infinito */}
          <div className="relative group mb-20 overflow-hidden py-10">
            <div className="flex gap-10 animate-infinite-scroll hover:[animation-play-state:paused] w-max">
              {[...insigniasData, ...insigniasData].map((insignia, index) => (
                <button
                  key={`${insignia.id}-${index}`}
                  onClick={() => setSelectedInsignia(insignia)}
                  className="w-56 h-56 shrink-0 transition-transform hover:scale-110 active:scale-95"
                >
                  <img 
                    src={insignia.img} 
                    alt={insignia.titulo} 
                    className="w-full h-full object-contain drop-shadow-2xl" 
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Cuadro de Colección Completa */}
          <div className="bg-slate-50 rounded-[40px] p-8 md:p-12 border border-slate-100 flex flex-col md:flex-row items-center gap-10 shadow-inner">
            <div className="w-full md:w-1/3 group">
                <img 
                  src="/Insignias.WEBP" 
                  alt="Colección" 
                  className="rounded-2xl group-hover:rotate-2 transition-transform" 
                />
            </div>
            <div className="w-full md:w-2/3 space-y-4">
                <h3 className="text-2xl font-black text-[#002855]">¡Y muchas más por descubrir!</h3>
                <p className="text-slate-500 text-sm">
                  Explora nuestro catálogo completo de reconocimientos en la plataforma oficial.
                </p>
                <Link href="https://www.acreditta.com" target="_blank" className="inline-flex items-center gap-2 text-red-600 font-bold uppercase text-xs tracking-widest">
                  Ver catálogo completo <ExternalLink size={14} />
                </Link>
            </div>
          </div>
        </div>
      </section>
      {/* CIERRE ÉPICO Y NAVEGACIÓN ESTRATÉGICA */}
      <section className="py-32 px-6 bg-white relative text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <Rocket className="mx-auto text-red-600 animate-bounce" size={48} />
            <h2 className="text-5xl md:text-7xl font-black text-[#002855] leading-[1.1]">
                El mundo digital espera <br />
                <span className="text-red-600">por tu talento</span>
            </h2>
            <p className="text-slate-500 text-xl font-light">
                No te detengas. Cada insignia es el reflejo de tu compromiso con la excelencia. Empezá hoy mismo a construir tu identidad profesional digital.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10">
            <Link href="/plataforma" className="group flex flex-col items-center p-8 bg-slate-50 rounded-4xl border border-slate-100 hover:bg-[#002855] hover:text-white transition-all duration-500">
              <div className="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <BookOpen size={24} />
              </div>
              <span className="font-black uppercase text-xs tracking-widest mb-2">Seguir Aprendiendo</span>
              <span className="text-sm opacity-60">Explora nuestros contenidos</span>
              <ArrowRight size={20} className="mt-4 group-hover:translate-x-2 transition-transform" />
            </Link>

            <Link href="/beneficios" className="group flex flex-col items-center p-8 bg-slate-50 rounded-4xl border border-slate-100 hover:bg-red-600 hover:text-white transition-all duration-500">
              <div className="w-12 h-12 bg-[#002855] text-white rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:bg-white group-hover:text-red-600">
                <Star size={24} />
              </div>
              <span className="font-black uppercase text-xs tracking-widest mb-2">Más Beneficios</span>
              <span className="text-sm opacity-60">Becas y convenios para vos</span>
              <ArrowRight size={20} className="mt-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="pt-12">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.5em]">
              Universidad Unicomer • Reconociendo tu Evolución
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}