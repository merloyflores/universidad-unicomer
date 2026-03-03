"use client";
import "./globals.css";
import React, { useState } from 'react'; // Importamos useState
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, Menu, X } from 'lucide-react'; // Importamos Menu y X
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú móvil

  const menuItems = [
    { name: "PDI", link: "/pdi" },
    { name: "Planes de Carrera", link: "/planes-carrera" },
    { name: "Plataformas", link: "/plataforma" },
    { name: "Beneficios UU", link: "/beneficios" },
    { name: "Aprendizaje", link: "/aprendizaje" },
    { name: "Insignias y certificados", link: "/certificados" }
  ];

  // Función para cerrar el menú al hacer clic en un link
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <html lang="es">
      <body className="antialiased">
        {/* NAVBAR GLOBAL */}
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
          <nav className="bg-linear-to-br from-[#155195] via-[#003366] to-[#011225] backdrop-blur-md border border-white/10 h-16 px-6 flex items-center justify-between w-full max-w-6xl rounded-full shadow-2xl relative">
            
            {/* LOGO */}
            <div className="flex items-center shrink-0 z-50">
              <Link href="/" onClick={closeMenu}>
                <img 
                  src="/logo-unicomer.png" 
                  alt="Logo Universidad Unicomer" 
                  className="h-8 md:h-10 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity" 
                />
              </Link>
            </div>

            {/* CENTRO: LINKS ESCRITORIO (Ocultos en móvil) */}
            <ul className="hidden lg:flex items-center justify-center gap-1 flex-1 px-4">
              {menuItems.map((item) => {
                const isActive = pathname === item.link;
                return (
                  <li key={item.name} className="whitespace-nowrap">
                    <Link 
                      href={item.link} 
                      className={`px-4 py-2 text-[11px] font-bold rounded-full transition-all uppercase tracking-wider ${
                        isActive 
                          ? "bg-red-600 text-white shadow-lg" 
                          : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* DERECHA: BOTÓN SITIOS Y HAMBURGUESA */}
            <div className="flex items-center gap-2 shrink-0 z-50">
              <button className="hidden sm:flex items-center gap-2 bg-white/10 text-white px-5 py-2 rounded-full text-[10px] font-black hover:bg-red-600 transition-all uppercase">
                <Globe size={14} /> Sitios
              </button>
              
              {/* BOTÓN HAMBURGUESA (Solo móvil) */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="Abrir menú"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* MENÚ DESPLEGABLE MÓVIL */}
            <div className={`
              absolute top-20 left-0 right-0 bg-[#002855] border border-white/10 rounded-4xl p-6 shadow-2xl transition-all duration-300 transform lg:hidden
              ${isMenuOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-4 pointer-events-none"}
            `}>
              <ul className="flex flex-col gap-2">
                {menuItems.map((item) => {
                  const isActive = pathname === item.link;
                  return (
                    <li key={item.name}>
                      <Link 
                        href={item.link} 
                        onClick={closeMenu}
                        className={`block w-full px-6 py-4 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all ${
                          isActive 
                            ? "bg-red-600 text-white shadow-lg" 
                            : "text-gray-300 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
                <li className="pt-4 mt-4 border-t border-white/10 sm:hidden">
                  <button className="w-full flex items-center justify-center gap-2 bg-white/10 text-white py-4 rounded-2xl text-xs font-black">
                    <Globe size={16} /> Ver Sitios
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* CONTENIDO DE LAS PÁGINAS */}
        <main className=""> {/* Añadimos padding top para que el contenido no quede bajo la nav fija */}
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}