"use client";
import React, { useState } from 'react';
import Link from 'next/link'; 
import ModalBeca from '@/components/ModalBeca';// Asegúrate de tener este import para los botones de Link
import { 
  GraduationCap, BookOpen, Laptop, ChevronRight, Plus, 
  Send, X, CheckCircle2, Info, Mail, Phone, ExternalLink,
  Award, Star, FileText, Microscope
} from 'lucide-react';

export default function SeccionBeneficios() {
  // Estado para controlar el formulario flotante (Modal)
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      {/* HERO BENEFICIOS */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Star size={14} fill="currentColor" /> Beneficios Exclusivos
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-[#002855] ">
              Tu crecimiento <br />
              <span className="text-red-600">es nuestro mayor éxito</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              En la <strong>Universidad Unicomer</strong> impulsamos tu evolución. Diseñamos un ecosistema de beneficios para facilitar tu acceso a la educación superior, apoyarte en tu formación continua y abrirte puertas hacia nuevas metas profesionales.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-bold text-[#002855]">
              <span className="flex items-center gap-2"><CheckCircle2 className="text-red-600" size={18}/> Becas</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="text-red-600" size={18}/> Convenios</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="text-red-600" size={18}/> Plataformas</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-50"></div>
            <img 
              src="/Universitarios.png" 
              alt="Colaborador Unicomer" 
              className="rounded-[40px] relative z-10 w-full h-100 object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECCIÓN BECAS */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start mb-10">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <img 
                src="/Hombre2.JFIF" 
                alt="Preparación continua" 
                className="rounded-[40px] shadow-xl" 
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-4xl font-black text-[#002855]">Programa de Becas <br/><span className="text-red-600">Reglamento R-028</span></h2>
              <p className="text-lg text-slate-600">
                Brindamos oportunidades reales a quienes demuestran potencial y compromiso. Nuestro programa de becas cubre hasta el <strong>50% de los costos</strong> para que alcances tu grado académico.
              </p>
              
              {/* BOTÓN EXPANDIBLE DE REQUISITOS */}
              <div className="space-y-3 w-full"> {/* w-full para asegurar que use todo el ancho disponible */}
                <details className="group bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-sm">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-[#002855] hover:bg-slate-50 transition-colors">
                    <span className="text-lg">Ver Criterios de Elegibilidad</span>
                    <Plus className="group-open:rotate-45 transition-transform text-red-600" />
                  </summary>
                  
                  <div className="p-8 pt-4 text-slate-600 border-t border-slate-100">
                    {/* Grid ajustado para aprovechar mejor el espacio horizontal */}
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-sm">
                      
                      {/* Punto 1 */}
                      <li className="flex items-start gap-4">
                        <span className="flex items-center justify-center bg-red-50 text-red-600 font-bold rounded-lg h-8 w-8 shrink-0">1</span>
                        <div>
                          <p className="font-bold text-[#002855]">Antigüedad Laboral</p>
                          <p className="text-slate-500">Mínimo 2 años de laborar de forma directa y continua.</p>
                        </div>
                      </li>

                      {/* Punto 2 */}
                      <li className="flex items-start gap-4">
                        <span className="flex items-center justify-center bg-red-50 text-red-600 font-bold rounded-lg h-8 w-8 shrink-0">2</span>
                        <div>
                          <p className="font-bold text-[#002855]">Desempeño</p>
                          <p className="text-slate-500">Evaluación satisfactoria y visto bueno de jefatura inmediata.</p>
                        </div>
                      </li>

                      {/* Punto 3 */}
                      <li className="flex items-start gap-4">
                        <span className="flex items-center justify-center bg-red-50 text-red-600 font-bold rounded-lg h-8 w-8 shrink-0">3</span>
                        <div>
                          <p className="font-bold text-[#002855]">Carrera Afín</p>
                          <p className="text-slate-500">Debe estar relacionada directamente a tu área de trabajo actual.</p>
                        </div>
                      </li>

                      {/* Punto 4 */}
                      <li className="flex items-start gap-4">
                        <span className="flex items-center justify-center bg-red-50 text-red-600 font-bold rounded-lg h-8 w-8 shrink-0">4</span>
                        <div>
                          <p className="font-bold text-[#002855]">Avance Académico</p>
                          <p className="text-slate-500">Contar con al menos 8 materias aprobadas de la carrera.</p>
                        </div>
                      </li>
                    </ul>

                    {/* Nota Importante al final ocupando todo el ancho */}
                    <div className="bg-red-50/50 p-5 rounded-xl mt-8 border border-red-100">
                      <p className="text-xs leading-relaxed text-red-900">
                        <strong className="uppercase tracking-wider">Procedimiento:</strong> Deberás redactar una carta formal dirigida a la Jefatura de Capacitación con tus datos personales, programa de carrera y costos por crédito.
                      </p>
                    </div>
                  </div>
                </details>
              </div>

              {/* BOTÓN QUE ABRE EL FORMULARIO FLOTANTE */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#002855] text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-red-600 transition-all shadow-lg"
              >
                <Mail size={18} /> Solicitar Información de Beca
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONVENIOS UNIVERSITARIOS - ESTRUCTURA MEJORADA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          
          {/* Encabezado de la Sección */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#002855] uppercase tracking-tighter">Alianzas Estratégicas</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Accedé a descuentos exclusivos en las mejores universidades para potenciar tu perfil profesional.
            </p>
          </div>

          {/* TARJETA ESPECIAL UNIR - DISEÑO LOGO > TITULO > COLUMNAS */}
          <div className="bg-linear-to-br from-slate-900 via-[#002855] to-slate-800 rounded-[30px] p-8 md:p-12 text-white mb-16 relative overflow-hidden shadow-2xl">
            
            {/* 1. LOGO AL INICIO (Alineado a la izquierda) */}
            <div className="flex justify-center mb-1">
              <img 
                src="/Logo_UniversidadUNir.png" 
                alt="UNIR" 
                className="h-24 md:h-60 w-auto object-contain brightness-0 invert" 
              />
            </div>

            {/* 2. TÍTULO (Más pequeño y elegante) */}
            <div className="max-w-6xl mb-12">
              <h3 className="text-2xl md:text-3xl font-bold leading-tight text-blue-50">
                Estudia en la Universidad Internacional de La Rioja (UNIR) con el respaldo de Grupo Unicomer
              </h3>
            </div>

            {/* 3. COLUMNAS DE CONTENIDO (Texto y Video) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
              
              {/* Lado Izquierdo: Descripción y Botones */}
              <div className="space-y-8">
                <p className="text-blue-100 text-lg font-light leading-relaxed italic border-l-4 border-red-600 pl-6">
                  Aprovecha becas de descuento entre el <strong className="text-white text-2xl font-black">40% y 60%</strong> sobre el precio de lista en programas internacionales. Aplica para colaboradores y familiares hasta el 2do grado de consanguinidad.
                </p>
                
                <div className="space-y-4">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">Programas disponibles:</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-xs">Licenciaturas</span>
                    <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-xs">Maestrías</span>
                    <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-xs">Doctorados</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link 
                    href="https://mcas-proxyweb.mcas.ms/certificate-checker?login=false&originalUrl=https%3A%2F%2Festudiar.unir.net.mcas.ms%2Frl%2Fsv-gen-ma-gene-unicomer%2F%3Futm_source%3Dcolectivos%26utm_medium%3Doff%26utm_content%3Dpdf%26utm_campaign%3Dcolectivosunireu_svpdfconvenio_Unicomer_MU_off%26McasTsid%3D20892&McasCSRF=040787c03e8e621a7aefbdacaf7eb8b8dcc511230005328c5494f319d7f02e74" 
                    className="bg-red-600 px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-red-700 hover:scale-105 transition-all shadow-lg flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    UNIR España <ExternalLink size={14}/>
                  </Link>
                  <Link 
                    href="https://mcas-proxyweb.mcas.ms/certificate-checker?login=false&originalUrl=https%3A%2F%2Festudiar.unir.net.mcas.ms%2Frl%2Fsv-gen-bec-gene-unicomer-mx%2F%3Futm_source%3Dcolectivos%26utm_medium%3Doff%26utm_content%3Dpdf%26utm_campaign%3Dcolectivosunireu_svpdfconvenio_Unicomer_MX_off%26McasTsid%3D20892&McasCSRF=040787c03e8e621a7aefbdacaf7eb8b8dcc511230005328c5494f319d7f02e74" 
                    className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white/20 hover:scale-105 transition-all flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    UNIR México <ExternalLink size={14}/>
                  </Link>
                </div>
              </div>

              {/* Lado Derecho: Video */}
              <div className="relative group/video">
                <div className="absolute -inset-4 bg-red-600/10 rounded-[40px] blur-3xl opacity-0 group-hover/video:opacity-100 transition-all duration-700"></div>
                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 aspect-video bg-black/40">
                  <video className="w-full h-full object-cover" controls autoPlay muted loop>
                    <source src="/Graduación_UNIR.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="mt-4 flex justify-between items-center px-2">
                  <p className="text-[10px] uppercase tracking-widest text-blue-300 font-bold">Fechas de inicio: Marzo y Octubre</p>
                  <p className="text-[10px] uppercase tracking-widest text-blue-300 font-bold">Duración: 12 - 24 meses</p>
                </div>
              </div>

            </div>

            {/* Decoración de fondo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          </div>

          {/* SECCIÓN INFERIOR: OTROS CONVENIOS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 space-y-6">
              <h4 className="font-black text-[#002855] text-2xl uppercase tracking-tighter">Beneficios Generales</h4>
              <ul className="space-y-4 text-slate-600">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 size={20} className="text-red-600 shrink-0 mt-1"/> 
                  <span>Descuentos en Técnicos, Bachillerato y Maestrías.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 size={20} className="text-red-600 shrink-0 mt-1"/> 
                  <span>Excelentes condiciones para estudiantes de primer ingreso.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 size={20} className="text-red-600 shrink-0 mt-1"/> 
                  <span>Consultas adicionales: universidad_cr@unicomer.com</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-600 p-10 rounded-[40px] text-white flex flex-col justify-center items-center text-center space-y-6 shadow-xl relative overflow-hidden group">
              <div className="relative z-10">
                <Info size={40} className="mx-auto mb-4" />
                <p className="font-black text-2xl uppercase tracking-tighter">¿Buscas otra universidad?</p>
                <p className="text-sm opacity-90 max-w-xs mx-auto mt-2">
                  Tenemos convenios con más de 15 instituciones. ¡Solicitá la tabla de descuentos actualizada!
                </p>
                <a 
                  href="mailto:universidad_cr@unicomer.com" 
                  className="inline-block bg-[#002855] px-10 py-4 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-slate-900 transition-all shadow-2xl mt-6"
                >
                  Consultar Tabla
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CIERRE ÉPICO */}
      <section className="py-32 px-6 bg-[#002855] relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-[150px] opacity-20 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-[150px] opacity-10 -ml-48 -mb-48"></div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-10">
          <div className="inline-block bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-2 rounded-full">
             <span className="text-white font-bold tracking-[0.3em] text-[10px] uppercase">Tu futuro no tiene límites</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1]">
            Avanza con el respaldo de la<span className="text-red-500 italic"><br></br> Universidad Unicomer</span>
          </h2>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Cada curso, cada título y cada nueva habilidad te acerca a la mejor versión de vos mismo. La Universidad Unicomer es el puente hacia tus metas.
          </p>
          
          <div className="pt-10">
            <Link href="/plataforma" className="group relative inline-flex items-center gap-4 bg-red-600 text-white px-12 py-6 rounded-full font-black uppercase text-sm tracking-[0.2em] shadow-2xl hover:bg-red-700 hover:scale-105 transition-all">
              Explorar Plataformas de Formación
              <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      {/* 2. AGREGA EL COMPONENTE MODAL AQUÍ AL FINAL */}
      <ModalBeca 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </main>
  );
}