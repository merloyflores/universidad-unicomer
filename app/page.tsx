"use client";
import Link from 'next/link';
import { useState } from 'react';
import { 
  Menu, X, Globe, Mail, Linkedin, Star, Sparkles,
  MapPin, // <--- Agrégalo aquí mismo
  Target, Map, Monitor, Gift, BookOpen, Award 
} from 'lucide-react';

const insigniasData = [
  {
    id: 1,
    titulo: "Master Unicomer",
    desc: "Tu descripción aquí...",
    skills: ["Liderazgo", "Innovación"],
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

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    { name: "PDI", link: "/pdi" },
    { name: "Planes de Carrera", link: "/planes-carrera" },
    { name: "Plataforma", link: "/plataforma" },
    { name: "Beneficios UU", link: "/beneficios" },
    { name: "Aprendizaje", link: "/aprendizaje" },
    { name: "Insignias y certificados", link: "/certificados" }
  ];

  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans">

      {/* SECCIÓN 1: BANNER BIENVENIDA */}
      <section className="relative pt-40 pb-20 px-6 from-slate-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-red-600 font-black text-sm uppercase tracking-[0.6em] mb-4">Bienvenidos</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#002855] mb-8 leading-tight">
            Potenciamos el crecimiento profesional en <br/><span className="text-red-600">Grupo Unicomer</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left items-center">
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>Somos la institución educativa corporativa dedicada a la formación y desarrollo de nuestros colaboradores. Nuestro propósito es impulsar el crecimiento personal y profesional a través de programas innovadores.</p>
              <p>Ofrecemos cursos y certificaciones en áreas clave como negocios, tecnología, liderazgo y desarrollo personal, combinando herramientas digitales de vanguardia.</p>
            </div>
            <div className="bg-[#002855] p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-xl italic font-light">"Creemos en el aprendizaje continuo como motor del éxito. ¡Lleva tu potencial al siguiente nivel!"</p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-600 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: VIDEO CORPORATIVO */}
      <section className="py-10 px-6 max-w-6xl mx-auto">
        <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-100">
          <video className="w-full aspect-video object-cover" controls autoPlay muted loop>
            <source 
            src="/Unicomer_Terminal.mp4" 
            type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
        </div>
      </section>

      {/* SECCIÓN 3: MISIÓN Y VISIÓN */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-black text-[#002855] flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-red-600"></div> MISIÓN
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">Somos una comunidad de aprendizaje que promueve el intercambio de conocimiento y buenas prácticas para fortalecer el desempeño de la organización y la mejora continua del cliente.</p>
          </div>
          <div>
            <h3 className="text-2xl font-black text-[#002855] flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-red-600"></div> VISIÓN DE APRENDIZAJE
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg font-medium italic">"Ser el modelo referente de formación combinada, donde nuestros colaboradores crecen y el negocio evoluciona."</p>
          </div>
        </div>
        <div className="relative">
          <img src="/Colaboradora1.WEBP" alt="Colaboradora" className="rounded-3xl shadow-2xl" />
          <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-2xl shadow-xl hidden md:block">
            <p className="font-bold text-2xl">+2,000</p>
            <p className="text-xs uppercase tracking-widest">Colaboradores</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: LIDERAZGO */}
      <section className="py-24 bg-[#0f172a] px-6 relative overflow-hidden">
        {/* Decoración de fondo sutil */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Imagen: Ahora con un leve resplandor para separarla del fondo oscuro */}
          <div className="order-2 md:order-1 group">
            <img 
              src="/Competencias.WEBP" 
              alt="Competencias" 
              className="rounded-3xl  group-hover:scale-[1.03] transition-transform duration-500" 
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
              LIDERAZGO QUE <br/>
              <span className="text-red-500">IMPULSA AL ÉXITO</span>
            </h2>
            <div className="h-1 w-20 bg-red-600 mb-6"></div>
            <p className="text-slate-300 text-lg leading-relaxed font-light">
              A través de estas competencias, potenciamos el talento de nuestros colaboradores, 
              asegurando un liderazgo que impulsa la <span className="text-white font-medium">innovación</span>, 
              el <span className="text-white font-medium">crecimiento</span> y la 
              <span className="text-white font-medium"> evolución del negocio</span>.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: ECOSISTEMA (MEJORADA CON TEXTO) */}
      <section className="py-24 px-6 text-center max-w-6xl mx-auto">
        <div className="mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-black text-[#002855] uppercase tracking-tighter">Nuestro Ecosistema de Aprendizaje</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Hemos construido una red integral que conecta <strong>plataformas 24/7</strong>, recursos multiformato y una 
            experiencia de usuario diseñada para la medición y el reconocimiento constante. Desde micro-aprendizaje 
            hasta certificaciones internacionales, todo está a tu alcance.
          </p>
        </div>
        <div className=" p-8 md:p-12 rounded-[50px]">
           <img 
             src="/Ecosistema_Aprendizaje.WEBP" 
             alt="Diagrama Ecosistema de Aprendizaje" 
             className="w-full h-auto hover:scale-[1.02] transition-transform duration-700" 
           />
        </div>
      </section>

      {/* SECCIÓN DE CIERRE DINÁMICO (NUEVO) */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#002855]">
        {/* Decoración geométrica */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 border-8 border-red-600 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            <Sparkles size={12} /> Tu futuro comienza aquí
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            ¿Listo para transformar <br/> tu trayectoria?
          </h2>
          
          <p className="text-blue-100 text-xl font-light max-w-2xl mx-auto">
            Explora todas las herramientas, cursos y beneficios que la <strong>Universidad Unicomer</strong> tiene preparados para ti.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Link href="/plataforma" className="bg-red-600 text-white px-10 py-5 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-red-700 hover:scale-105 transition-all shadow-xl">
              Ir a la Plataforma
            </Link>
            <Link href="/aprendizaje" className="bg-white text-[#002855] px-10 py-5 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-slate-100 hover:scale-105 transition-all shadow-xl">
              Ver Catálogo de Cursos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}