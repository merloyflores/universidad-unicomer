"use client";
import Link from 'next/link';
import { 
  Target, ArrowLeft, CheckCircle2, BookOpen, 
  Users, ClipboardCheck, Rocket, ExternalLink, QrCode,
  ChevronLeft
} from 'lucide-react';

export default function PdiPage() {
  return (
    <main className="min-h-screen bg-white">


      {/* HERO SECTION */}
      <header className="pt-48 pb-20 px-6 bg-linear-to-b from-slate-50 to-white text-center">
        <div className="max-w-4xl mx-auto">
          <span className="bg-red-100 text-red-600 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">
            Ciclo Anual de Talento
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-[#002855] mb-8 uppercase tracking-tighter">
            Tu Futuro, <span className="text-red-600">Tu Plan.</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            El Plan de Desarrollo Individual (PDI) se conecta con nuestro ciclo anual de talento. 
            Es la etapa que nos permite establecer nuestro <strong>objetivo anual de aprendizaje</strong> a través de tareas 
            o procesos que nos permiten crecer y mejorar nuestras capacidades.
          </p>
        </div>
      </header>

      {/* IMPORTANCIA + IMAGEN (Gente1) */}
      <section className="py-20 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-[#002855] uppercase">
              ¿Por qué es importante tu PDI anual?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Cuando te tomas el tiempo para pensar y trazar lo que necesitas para tu propio desarrollo, 
              te permitirá cosechar recompensas a largo plazo, gestionando un rubro tan vital como tu desarrollo profesional.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Te da dirección", desc: "En lugar de ir con la corriente, el PDI te ofrece trazar un objetivo y sus tareas. Te pone como protagonista de tu carrera." },
                { title: "Aumenta tu motivación", desc: "Nadie debe invertir más en tu futuro que tú. Al establecer metas, dejas de esperar y comienzas a actuar." },
                { title: "Aumenta tu realización", desc: "Al hacerte cargo, brindas un sentido de propiedad y felicidad a las horas que inviertes en crecer." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-6 bg-slate-50 rounded-2xl hover:bg-red-50 transition-colors border-l-4 border-red-600">
                  <span className="text-3xl font-black text-red-600/20">0{idx + 1}</span>
                  <div>
                    <h4 className="font-bold text-[#002855] text-lg">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-red-600/10 rounded-[40px] rotate-3"></div>
            <img src="/Gente1.WEBP" alt="Desarrollo Profesional" className="relative rounded-[40px] shadow-2xl w-full object-cover" />
          </div>
        </div>
      </section>

      {/* PROCESO PDI + IMAGEN (Gente2) */}
      <section className="py-24 bg-linear-to-br from-[#155195] via-[#003366] to-[#011225] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-16 text-center uppercase tracking-tighter">
            Proceso para crear nuestro PDI
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <img 
              src="/Gente2.WEBP" 
              alt="Proceso" 
              className="rounded-[40px] order-2 lg:order-1" 
            />
            
            <div className="space-y-4 order-1 lg:order-2">
              {[
                "Conversación de desempeño y desarrollo",
                "Identificación de brechas de conocimiento y competencias",
                "Definición de estrategia de desarrollo",
                "Declaración en la plataforma y cumplimiento",
                "Evaluación final de desempeño y análisis de mejora"
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-5 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold shrink-0">
                    {idx + 1}
                  </div>
                  <span className="font-semibold text-lg">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DECLARACIÓN + QR (QR1) */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto bg-white rounded-[50px] shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-200">
          <div className="p-12 md:w-2/3 space-y-6">
            <h3 className="text-2xl font-black text-[#002855] uppercase">Declaración del Plan</h3>
            <p className="text-gray-600 leading-relaxed">
              Se compone de dos procesos claves: primero la <strong>declaración del colaborador</strong> a través del portal 
              y segundo la <strong>aprobación del jefe o gerente inmediato</strong>.
            </p>
            <p className="text-sm font-bold text-slate-400">Escanea el QR o usa el botón para ver el manual:</p>
            <a 
              href="https://mcas-proxyweb.mcas.ms/certificate-checker?login=false&originalUrl=https%3A%2F%2Facrobat.adobe.com.mcas.ms%2Flink%2Freview%3Furi%3Durn%3Aaaid%3Ascds%3AUS%3Aa590dc3c-67cc-3c67-b55f-f42c6814b9f5%26McasTsid%3D20892&McasCSRF=040787c03e8e621a7aefbdacaf7eb8b8dcc511230005328c5494f319d7f02e74" // Enlace largo que pasaste
              target="_blank"
              rel="noopener noreferrer" // <--- Esto quita el error rojo
              className="inline-flex items-center gap-3 bg-[#002855] text-white px-8 py-4 rounded-full font-bold hover:bg-red-600 transition-all shadow-lg"
            >
              <BookOpen size={20} /> Ver Manual Paso a Paso
            </a>
          </div>
          <div className="bg-slate-100 p-12 flex flex-col items-center justify-center md:w-1/3 border-l border-slate-200 text-center">
            <img src="/QR1.WEBP" alt="QR Manual" className="w-40 h-40 mb-4 rounded-2xl shadow-md" />
            <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Manual Digital</span>
          </div>
        </div>
      </section>

      {/* TEST THT + Imagen1 */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 bg-linear-to-br from-blue-600 via-[#0a3a6a] to-[#023065] rounded-[50px] p-8 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          {/* Decoración de fondo */}
          <div className="absolute top-0 right-0 opacity-10"><Rocket size={300} /></div>
          
          <div className="lg:w-1/2 space-y-8 relative z-10">
            <h2 className="text-4xl font-black uppercase">Potencia tu PDI con THT</h2>
            <p className="text-red-100 text-lg">
              Solicita tu evaluación a través de un test con nuestra herramienta THT. 
              Conoce tus fortalezas y áreas de oportunidad de manera científica.
            </p>
            <a 
              href="https://mcas-proxyweb.mcas.ms/certificate-checker?login=false&originalUrl=https%3A%2F%2Fforms.office.com.mcas.ms%2FPages%2FResponsePage.aspx%3Fid%3DVBPCffFiIUuLlZbsHYyEtv2s2LyeqFlCtd8NVGKsxg5URUMxNFhOMlVPRDlPSFVMNUZFWDdDS0U0SC4u%26origin%3DQRCode%26McasTsid%3D20892&McasCSRF=040787c03e8e621a7aefbdacaf7eb8b8dcc511230005328c5494f319d7f02e74" // Enlace del Forms que pasaste
              target="_blank"
              rel="noopener noreferrer" // <--- Esto quita el error rojo
              className="inline-flex items-center gap-3 bg-white text-red-600 px-10 py-4 rounded-full font-black uppercase tracking-tight hover:scale-105 transition-transform shadow-xl"
            >
              Solicitar Evaluación <ExternalLink size={20} />
            </a>
          </div>
          <div className="lg:w-1/2 relative z-10">
            <img 
              src="/Mujer4.WEBP" 
              alt="THT Test" 
              className="rounded-[40px] shadow-2xl w-full h-auto object-cover" 
            />
          </div>
        </div>
      </section>

      {/* CIERRE INSPIRADOR (FINAL MEJORADO) */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex justify-center gap-4 text-red-600 mb-4">
            <Users size={40} />
            <ClipboardCheck size={40} />
            <Rocket size={40} />
          </div>
          <h2 className="text-5xl font-black text-[#002855] uppercase tracking-tighter">
            Tu crecimiento es <br /> nuestra mayor <span className="text-red-600">inversión.</span>
          </h2>
          <p className="text-xl text-gray-500 italic leading-relaxed">
            "El aprendizaje no es un destino, es un camino continuo. Al completar tu PDI hoy, 
            estás diseñando al líder que Unicomer y tú necesitan mañana. ¡Empecemos a construirlo juntos!"
          </p>
          <div className="mt-8">
           <Link href="/" className="inline-flex items-center gap-2 text-red-600 font-bold hover:underline">
             <ChevronLeft size={18}/> Volver al Menú Principal
           </Link>
        </div>
        </div>
      </section>

      {/* MINI FOOTER */}
      <footer className="bg-slate-900 py-10 text-center">
        <p className="text-slate-500 text-[10px] uppercase tracking-[0.5em]">
          Gestión de Talento Humano - Universidad Unicomer
        </p>
      </footer>
    </main>
  );
}