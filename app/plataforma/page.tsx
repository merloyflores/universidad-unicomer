"use client";
import Link from 'next/link';
import { 
  Monitor, ArrowLeft, PlayCircle, Play, ExternalLink, Cpu, ShoppingBag, GraduationCap, 
  Globe, BookOpen, Lightbulb, TrendingUp, ShieldCheck, 
  Languages, Microscope, Award, ChevronRight
} from 'lucide-react';

export default function PlataformaPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <header className="pt-48 pb-20 px-6 from-slate-50 to-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-black text-[#002855] leading-none uppercase tracking-tighter">
              Tu camino al <br /> éxito <span className="text-red-600">comienza aquí</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              <strong>SumTotal</strong> es nuestra plataforma corporativa de aprendizaje que centraliza tu crecimiento. Accede a rutas alineadas a tu rol y a las necesidades estratégicas del negocio.
            </p>
            <a 
              href="https://uu.sumtotal.host" 
              target="_blank"
              rel="noopener noreferrer" // <--- Esto quita el error rojo
              className="inline-flex items-center gap-3 bg-[#002855] text-white px-10 py-4 rounded-full font-black uppercase tracking-tight hover:bg-red-600 transition-all shadow-xl"
            >
              Ingresar a SumTotal <ExternalLink size={20} />
            </a>
          </div>
          <div className="relative">
            <img src="/U.png" alt="Crecimiento" className="rounded-[40px]" />
            <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-8 rounded-3xl shadow-xl hidden md:block">
              <span className="text-4xl font-black block">100%</span>
              <span className="text-[10px] uppercase font-bold tracking-widest">Digital Learning</span>
            </div>
          </div>
        </div>
      </header>

      {/* SECCIÓN TUTORIALES MEJORADA */}
      <section className="py-24 px-6 bg-linear-to-br from-[#09305d] via-[#113356] to-[#001125] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Conoce nuestra plataforma</h2>
            <p className="text-blue-200 max-w-2xl mx-auto text-lg">
              Descubre cómo navegar y aprovechar al máximo la Universidad Unicomer con estas guías rápidas y dinámicas.
            </p>
          </div>

          {/* VIDEO PRINCIPAL CON OVERLAY */}
          <div className="mb-16 group relative rounded-[20px] overflow-hidden border-2 border-white/44 shadow-2xl bg-slate-900">
            <div className="aspect-video relative">
              <video 
                src="/Tutorial_Ingreso.mp4" 
                controls autoPlay muted loop
                poster="/logo-unicomer.png" // Asegúrate de tener esta imagen
                className="w-full h-full object-cover" 
              />
              {/* Overlay decorativo que desaparece al reproducir (opcional con CSS) */}
              <div className="absolute inset-0 from-black/60 via-transparent to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
            </div>
            <div className="absolute bottom-8 left-8 bg-red-600 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
              Video Principal: Masterclass de Ingreso
            </div>
          </div>

          {/* GRILLA DE VIDEOS ESTILO "CARD" */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Panel de Gestor", file: "Tutorial_Plataforma_PaneldeGestor.mp4", thumb: "/logo-unicomer.png" },
              { title: "Ventanas Emergentes", file: "Tutorial_VentanasEmergentes.mp4", thumb: "/logo-unicomer.png" },
              { title: "Guía Usuario", file: "Guia_ObservaciónUsuario.mp4", thumb: "/logo-unicomer.png" },
              { title: "Guía Jefe Inmediato", file: "Proceo_Guiaobservación_JefeInmediato.mp4", thumb: "/logo-unicomer.png" }
            ].map((vid, i) => (
              <div key={i} className="group/item flex flex-col">
                <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-800 border-2 border-white/10 group-hover/item:border-red-500/50 transition-all duration-300 shadow-lg">
                  {/* Botón Play falso que da estética de video */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none group-hover/item:scale-110 transition-transform">
                    <div className="bg-red-600/90 p-3 rounded-full shadow-2xl backdrop-blur-sm opacity-0 group-hover/item:opacity-100 transition-opacity">
                      <PlayCircle size={32} fill="white" className="text-white" />
                    </div>
                  </div>
                  
                  <video 
                    src={`/${vid.file}`} 
                    controls 
                    poster={vid.thumb}
                    className="w-full h-full object-cover opacity-90 group-hover/item:opacity-100 transition-all" 
                  />
                </div>
                
                <div className="mt-4 px-2">
                  <h4 className="font-black text-[12px] uppercase tracking-wider text-blue-100 group-hover/item:text-red-500 transition-colors">
                    {vid.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-8 bg-red-600"></span>
                    <span className="text-[9px] font-bold text-white/40 uppercase">Tutorial UU</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMAS DE LIDERAZGO (Lidershift & Liderazgo12) */}
<section className="py-24 px-6">
  <div className="max-w-6xl mx-auto">
    {/* Título y Texto de Contexto */}
    <div className="mb-12 space-y-4">
      <div className="flex items-center gap-4">
        <TrendingUp className="text-red-600" size={40} />
        <h2 className="text-4xl font-black text-[#002855] uppercase tracking-tighter">Crece como líder</h2>
      </div>
      <p className="text-gray-600 text-lg max-w-4xl leading-relaxed">
        Como parte fundamental de nuestra oferta en la <strong>Universidad Unicomer</strong>, estos programas de liderazgo se encuentran integrados dentro de nuestra plataforma principal. Aquí podrás fortalecer las competencias clave para guiar equipos hacia el éxito. Si deseas formar parte de las próximas ediciones, puedes <strong>solicitar tu inscripción</strong> directamente a través de los botones correspondientes.
      </p>
    </div>
    
    {/* --- SECCIÓN PROGRAMAS DE LIDERAZGO (ESTANDARIZADA) --- */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      {/* CARD LIDERSHIFT */}
      <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
        <div className="flex-1 flex flex-col">
          <div className="h-16 flex items-center mb-8">
            <img 
              src="/Logo_Lidershift.WEBP" 
              alt="Lidershift" 
              className="h-12 w-auto object-contain" 
            />
          </div>
          
          <p className="text-gray-600 mb-8 font-medium leading-relaxed">
            Gestiona efectivamente a tus equipos con las mejores prácticas y los comportamientos esperados del líder Unicomer a través de este programa integral.
          </p>
          
          <div className="mt-auto">
            <div className="mb-8 p-6 bg-white rounded-2xl border border-slate-100">
              <p className="text-xs font-black text-slate-400 uppercase mb-1 tracking-widest">Inicio del programa</p>
              <p className="text-xl font-black text-[#002855]">Julio 2026</p>
            </div>       
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://mcas-proxyweb.mcas.ms/..." 
                target="_blank" 
                className="flex-1 bg-red-600 text-white text-center py-4 rounded-full font-bold uppercase text-[12px] hover:bg-red-700 transition-all shadow-md"
                rel="noopener noreferrer"
              >
                Inscribirse
              </a>
              <a 
                href="https://mcas-proxyweb.mcas.ms/..." 
                target="_blank" 
                className="flex-1 bg-[#002855] text-white text-center py-4 rounded-full font-bold uppercase text-[12px] hover:opacity-90 transition-all shadow-md"
                rel="noopener noreferrer"
              >
                Detalles
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CARD LIDERAZGO 12 */}
      <div className="bg-[#002855] p-10 rounded-[40px] text-white relative overflow-hidden shadow-xl flex flex-col h-full hover:shadow-2xl transition-shadow">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Award size={150} />
        </div>
        
        <div className="flex-1 flex flex-col relative z-10">
          <div className="h-16 flex items-center mb-8">
            <img 
              src="/Logo_LiderazGo12.WEBP" 
              alt="Liderazgo12" 
              className="h-24 w-auto object-contain" 
            />
          </div>
          
          <p className="text-blue-100 mb-8 font-medium leading-relaxed">
            En alianza con <strong>El Puerto de Liverpool</strong>, este programa busca brindar oportunidades para que seas un referente regional en materia de liderazgo.
          </p>
          
          <div className="mt-auto">
            <div className="mb-8 p-6 bg-white/10 rounded-2xl border border-white/10">
              <p className="text-xs font-black text-blue-300 uppercase mb-1 tracking-widest">Próxima Edición</p>
              <p className="text-xl font-black">Julio 2026</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://mcas-proxyweb.mcas.ms/..." 
                target="_blank" 
                className="flex-1 bg-white text-[#002855] text-center py-4 rounded-full font-bold uppercase text-[12px] hover:bg-slate-100 transition-all shadow-md"
                rel="noopener noreferrer"
              >
                Inscribirse
              </a>
              <a 
                href="https://mcas-proxyweb.mcas.ms/..." 
                target="_blank" 
                className="flex-1 border border-white/30 text-white text-center py-4 rounded-full font-bold uppercase text-[12px] hover:bg-white/10 transition-all"
                rel="noopener noreferrer"
              >
                Detalles
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ACADEMIAS (SumTotal) */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-[#002855] uppercase mb-12 text-center">Especialización por Áreas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Finanzas y Contabilidad", desc: "Gestión responsable y estratégica, análisis financiero y presupuestos.", icon: <TrendingUp /> },
              { title: "Marketing", desc: "Habilidades digitales, SEO, redes sociales e investigación de mercados.", icon: <Globe /> },
              { title: "Negocios Digitales", desc: "Transformación digital, analítica de datos y E-commerce.", icon: <Monitor /> },
              { title: "Retail", desc: "Excelencia en punto de venta y experiencia del cliente.", icon: <TrendingUp /> },
              { title: "Academia Funcional", desc: "Excel, Teams, Power BI y herramientas de productividad.", icon: <ShieldCheck /> }
            ].map((area, i) => (
              <div key={i} className="bg-white p-8 rounded-[30px] shadow-sm border border-slate-200 hover:shadow-xl transition-all">
                <div className="text-red-600 mb-6">{area.icon}</div>
                <h4 className="text-xl font-black text-[#002855] mb-4 uppercase">{area.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACADEMIA RADIOSHACK - VERSIÓN ROBUSTA */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto bg-[#050505] rounded-[60px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative">
          
          {/* Decoración de fondo tecnológica */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-125 h-125 bg-red-600 rounded-full blur-[120px]"></div>
          </div>

          <div className="flex flex-col lg:flex-row relative z-10">
            
            {/* Columna Izquierda: Información */}
            <div className="lg:w-3/5 p-10 lg:p-20 space-y-10 text-white">
              <div className="space-y-4">
                <img src="/Logo_AcademiaRadioshack.png" alt="RS" className="h-14" />
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                  Potenciamos tu <span className="text-red-600">ADN Tecnológico</span>
                </h2>
                <p className="text-slate-400 text-xl font-light max-w-xl">
                  No es solo capacitación, es especialización de clase mundial para dominar el ecosistema RadioShack.
                </p>
              </div>

              {/* Grid de Pilares de Formación */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                <div className="flex gap-4 items-start bg-white/5 p-4 rounded-2xl border border-white/10">
                  <Cpu className="text-red-500 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-sm uppercase">Hard-Tech</h4>
                    <p className="text-xs text-slate-400">Conocimiento profundo de componentes y gadgets.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-white/5 p-4 rounded-2xl border border-white/10">
                  <ShoppingBag className="text-red-500 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-sm uppercase">Retail Mastery</h4>
                    <p className="text-xs text-slate-400">Técnicas de venta consultiva para tecnología.</p>
                  </div>
                </div>
              </div>

              {/* Stats de impacto */}
              <div className="flex gap-10 border-t border-white/10 pt-8">
                <div>
                  <p className="text-3xl font-black text-white">+500</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-red-500 font-bold">Expertos Certificados</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white">24/7</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-red-500 font-bold">Acceso Global</p>
                </div>
              </div>

              <div className="pt-4">
                <a 
                  href="https://radioshack.academy" 
                  className="group relative inline-flex items-center gap-3 bg-red-600 px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest overflow-hidden transition-all hover:bg-red-700 shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative z-10">Ingresar a la Academia</span>
                  <ChevronRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </a>
              </div>
            </div>

            {/* Columna Derecha: Imagen con Overlay Creativo */}
            <div className="lg:w-2/5 relative min-h-100">
              <img 
                src="/RadioshackGente.jpg" 
                className="absolute inset-0 w-full h-full object-cover hover:grayscale-0 transition-all duration-900" 
                alt="Academia RadioShack" 
              />
              {/* Gradiente de fusión con la columna izquierda */}
              <div className="absolute inset-0 bg-linear-to-r from-[#050505] via-transparent to-transparent lg:block hidden"></div>
              
              {/* Badge Flotante */}
              <div className="absolute bottom-10 right-10 bg-red-600 p-6 rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <p className="text-white font-black text-center leading-tight uppercase text-sm">
                  Certificación <br />Radioshack
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LEONARDO & ÓPTICA MEJORADO */}
      <section className="py-24 px-6 bg-[#002855] text-white relative overflow-hidden">
        
        {/* --- VIDEO DE FONDO --- */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40" 
          /* Ajusta la opacity (0.1 a 0.5) según qué tanto protagonismo quieras darle al video */
        >
          <source src="/Leonardo.webm" type="video/webm" />
          Tu navegador no soporta videos.
        </video>

        {/* Capa de gradiente para suavizar la integración y asegurar legibilidad */}
        <div className="absolute inset-0 from-[#002855]/80 via-[#002855]/40 to-[#002855]/90 z-1"></div>

        {/* Decoración de patrón (opcional, ahora encima del video) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[url('/pattern.png')] opacity-5 pointer-events-none z-2"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-20 space-y-8">
            {/* Logo e Intro */}
            <div className="space-y-6">
              <img src="/LogoLeonardo.PNG" alt="Leonardo Logo" className="h-18 mx-auto brightness-0 invert object-contain" />
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Bienvenido a Leonardo</h2>
              <p className="text-blue-200 max-w-2xl text-xl font-medium mx-auto">
                El ecosistema digital diseñado para impulsar tu carrera con formación especializada en óptica, liderazgo e idiomas.
              </p>
            </div>

            {/* BOTÓN PRINCIPAL DE ACCESO */}
            <div className="group relative">
              <div className="absolute -inset-1 from-red-600 to-red-400 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              <a 
                href="https://leonardo.essilorluxottica.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative flex items-center gap-4 bg-red-600 px-12 py-5 rounded-full font-black uppercase text-sm tracking-[0.2em] shadow-2xl hover:bg-red-700 hover:scale-105 transition-all"
              >
                Acceder a la Plataforma Leonardo
                <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>

          {/* GRID DE CONTENIDO (Tarjetas) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* IDIOMAS */}
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-[40px] border border-white/10 flex flex-col justify-between transition-colors">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <Languages size={40} className="text-red-500" />
                  <h3 className="text-2xl font-black uppercase tracking-tighter">Domina un segundo idioma</h3>
                </div>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Abre las puertas al mundo con acceso 24/7 a cursos asíncronos de **Inglés, Francés, Italiano y Alemán**. 
                  Aprendizaje adaptativo para todos los niveles profesionales.
                </p>
                <div className="relative rounded-2xl overflow-hidden shadow-inner">
                  <img 
                    src="/GenteHablando.JPG" 
                    className="w-full h-auto object-cover hover:scale-110 transition-transform duration-700"
                    alt="Capacitación"
                  />
                </div>
              </div>
              
              <div className="mt-10 space-y-4">
                <a href="#" className="block bg-white text-[#002855] text-center py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-blue-50 transition-all shadow-xl">
                  Aplicar al formulario
                </a>
                <p className="text-[10px] text-blue-400 font-bold uppercase text-center tracking-widest italic opacity-70">Sujeto a revisión por Capital Humano</p>
              </div>
            </div>

            {/* ÓPTICA */}
            <div className="bg-white rounded-[40px] p-10 text-[#002855] shadow-2xl transform hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="bg-red-50 p-3 rounded-2xl">
                    <Microscope size={40} className="text-red-600" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter">Industria Óptica</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Especialízate en gestión de ópticas y domina las tecnologías de lentes de última generación. 
                </p>
              </div>

              <div className="relative rounded-3xl overflow-hidden shadow-inner group/img h-110">
                <img 
                  src="/Optica2.JPG" 
                  className="absolute inset-0 w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-1000"
                  alt="Óptica"
                />
                <div className="absolute inset-0 from-[#002855]/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#002855]">Especialización Técnica</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HABILIDADES BLANDAS (REEMPLAZO DE LA IMAGEN) */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <img src="/LogoLeonardo.PNG" alt="Leonardo Logo" className="h-18 mx-auto brightness-100 invert object-contain contrast-0 color-invert" />
            <h2 className="text-3xl font-black text-[#002855] uppercase tracking-tighter">
              Tus Habilidades de Liderazgo
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Dentro del ecosistema de <strong>Leonardo</strong>, hemos diseñado rutas de aprendizaje específicas para potenciar tu perfil profesional. Estas son las competencias clave que podrás desarrollar y fortalecer para llevar tu liderazgo al siguiente nivel:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Liderarse a uno mismo */}
            <div className="bg-white p-8 rounded-[30px] shadow-sm border border-slate-100 space-y-6 hover:shadow-md transition-shadow">
              <h4 className="bg-blue-600 text-white p-4 rounded-2xl font-black text-center uppercase tracking-tight text-sm">
                Liderarse a uno mismo
              </h4>
              <ul className="space-y-3 text-sm text-gray-600 px-2 font-medium">
                {["Ética en el trabajo", "Gestión de Carrera", "Gestión del Estrés", "Gestión del tiempo", "Presentación y Redacción"].map(item => (
                  <li key={item} className="flex gap-3 items-center">
                    <ChevronRight size={16} className="text-red-500"/> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Liderar a otros */}
            <div className="bg-white p-8 rounded-[30px] shadow-sm border border-slate-100 space-y-6 hover:shadow-md transition-shadow">
              <h4 className="bg-[#002855] text-white p-4 rounded-2xl font-black text-center uppercase tracking-tight text-sm">
                Liderar a otros
              </h4>
              <ul className="space-y-3 text-sm text-gray-600 px-2 font-medium">
                {["Atraer y cultivar talento", "Coaching", "Diversidad e inclusión", "Gestión de equipos", "Fundamentos de feedback"].map(item => (
                  <li key={item} className="flex gap-3 items-center">
                    <ChevronRight size={16} className="text-red-500"/> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Liderar el negocio */}
            <div className="bg-white p-8 rounded-[30px] shadow-sm border border-slate-100 space-y-6 hover:shadow-md transition-shadow">
              <h4 className="bg-red-600 text-white p-4 rounded-2xl font-black text-center uppercase tracking-tight text-sm">
                Liderar el negocio
              </h4>
              <ul className="space-y-3 text-sm text-gray-600 px-2 font-medium">
                {["Delegación", "Business Plan", "Gestión de crisis", "Marketing & Finanzas", "Innovación y creatividad"].map(item => (
                  <li key={item} className="flex gap-3 items-center">
                    <ChevronRight size={16} className="text-red-500"/> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CIERRE Y SOPORTE */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-10">
          <Award size={60} className="text-red-600 mx-auto" />
          <h2 className="text-4xl font-black text-[#002855] uppercase">¿Buscas otro programa?</h2>
          <p className="text-gray-500 text-lg">Si requieres apoyo para diplomas, certificaciones o acreditaciones externas, cuéntanos cómo podemos apoyarte.</p>
          <a 
            href="https://forms.office.com/..." 
            className="inline-block bg-[#002855] text-white px-12 py-5 rounded-full font-black uppercase tracking-tight hover:bg-red-600 transition-all shadow-xl"
            rel="noopener noreferrer"
            target="_blank"
          >
            Aplicar ahora
          </a>
          <div className="pt-10 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 space-y-2">
             <p>Sujeto a revisión por el área de Capital Humano</p>
             <p>Solicitar con 15 días de antelación mínimo</p>
          </div>
        </div>
      </section>
    </main>
  );
}