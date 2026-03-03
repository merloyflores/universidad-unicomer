"use client";
import Link from 'next/link';
import { 
  Map, ArrowLeft, PlayCircle, Users, 
  Lightbulb, GraduationCap, Monitor, ExternalLink, ChevronRight, 
  ChevronLeft
} from 'lucide-react';

export default function PlanesCarreraPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO: METODOLOGÍA 70-20-10 */}
      <section className="pt-40 pb-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-xs">Nuestra Metodología</span>
            <h1 className="text-5xl font-black text-[#002855] uppercase leading-none">
              Modelo <span className="text-red-600">70 · 20 · 10</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              En la <strong>Universidad Unicomer</strong>, impulsamos tu crecimiento profesional mediante un enfoque integral. Entendemos que el desarrollo no ocurre solo en un aula, sino en cada interacción y desafío diario.
            </p>
            
            <div className="grid grid-cols-1 gap-4 pt-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border-l-4 border-blue-500">
                <span className="text-2xl font-black text-blue-500">70%</span>
                <p className="text-sm font-bold text-[#002855]">Aprendizaje en el Trabajo (Experiencia real en PDV y Oficinas)</p>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border-l-4 border-red-500">
                <span className="text-2xl font-black text-red-500">20%</span>
                <p className="text-sm font-bold text-[#002855]">Aprendizaje Social (Mentoría, Feedback y Redes)</p>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border-l-4 border-slate-400">
                <span className="text-2xl font-black text-slate-400">10%</span>
                <p className="text-sm font-bold text-[#002855]">Aprendizaje Formal (Cursos y Certificaciones)</p>
              </div>
            </div>
          </div>

          {/* VIDEO CONTAINER */}
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-2 from-blue-600 to-[#002855] rounded-[10px] blur opacity-40 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative aspect-video bg-black rounded-[10px] overflow-hidden shadow-2xl border-white/10 flex items-center justify-center">
              <video 
                src="/Modelo70_20_10.mp4" 
                className="w-full h-full object-cover" 
                controls autoPlay muted loop
              />
              <PlayCircle size={64} className="absolute text-white/50 group-hover:text-red-500 transition-colors pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* PLANES DE CARRERA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <img src="/GrupoGente.jpg" alt="Equipo Unicomer" className="rounded-[40px] shadow-2xl" />
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2 space-y-6">
              <h2 className="text-4xl font-black text-[#002855] uppercase tracking-tighter">Tu Ruta de Crecimiento</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Diseñamos <strong>Planes de Carrera personalizados</strong> ajustados a la realidad de cada puesto, desde nuestras tiendas hasta nuestras oficinas corporativas.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nuestra meta es brindarte una ruta clara guiada por experiencias reales y formación estructurada, fortaleciendo tu talento individual y el éxito de nuestra gran familia.
              </p>
            </div>
          </div>

          {/* BLOQUE HORIZONTAL DE PERSONAS (MEJORADO) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: "/Mujer1.jpg", label: "Liderazgo" },
              { img: "/Hombre.jpg", label: "Estrategia" },
              { img: "/Mujer2.jpg", label: "Excelencia" }
            ].map((persona, i) => (
              <div key={i} className="relative h-80 rounded-[30px] overflow-hidden group shadow-lg">
                <img src={persona.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Talento" />
                <div className="absolute inset-0 from-[#002855]/90 to-transparent flex items-end p-8">
                  <span className="text-white font-black uppercase tracking-widest border-b-2 border-red-500 pb-1">{persona.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCESO A PLATAFORMA (BOTÓN NAF) */}
      <section className="py-24 px-6 bg-[#002855] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="inline-flex p-4 bg-white/10 rounded-full mb-4">
            <Monitor size={40} className="text-red-500" />
          </div>
          <h2 className="text-4xl font-black uppercase">Gestión en Tiempo Real</h2>
          <p className="text-blue-100 text-xl leading-relaxed">
            Desde nuestra plataforma oficial puedes revisar tu <strong>Plan de Carrera</strong>, consultar tus calificaciones y validar cada paso de tu formación. Todo el control de tu evolución profesional en un solo lugar.
          </p>
          
          <div className="bg-white/5 p-8 rounded-[40px] border border-white/10 space-y-6">
            <p className="text-sm font-bold text-blue-200 uppercase tracking-widest">Ingreso con cuenta NAF</p>
            <a 
              href="http://10.196.21.200:8001/apex/f?p=401:LOGIN_DESKTOP:108260914764743:::::" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-full font-black text-lg uppercase tracking-tight transition-all shadow-2xl hover:-translate-y-1 active:scale-95"
            >
              Acceder a la Universidad <ExternalLink size={22} />
            </a>
          </div>
          
          <p className="text-slate-400 text-xs italic">
            * Recuerda que para ingresar debes estar conectado a la red corporativa o VPN.
          </p>
        </div>
      </section>

      {/* FINAL INSPIRADOR */}
      <footer className="py-20 text-center bg-white border-t border-slate-100">
        <h3 className="text-2xl font-black text-[#002855] uppercase">¿Listo para el siguiente nivel?</h3>
        <p className="text-gray-500 mt-2">Tu futuro en Grupo Unicomer comienza con un plan sólido.</p>
        <div className="mt-8">
           <Link href="/" className="inline-flex items-center gap-2 text-red-600 font-bold hover:underline">
             <ChevronLeft size={18}/> Volver al Menú Principal
           </Link>
        </div>
      </footer>
    </main>
  );
}