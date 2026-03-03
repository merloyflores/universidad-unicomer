"use client";
import Link from 'next/link';
import { BookOpen, ArrowLeft, Lightbulb } from 'lucide-react';

export default function AprendizajePage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="pt-48 pb-20 px-6 text-center">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Lightbulb size={40} className="text-red-600" />
        </div>
        <h1 className="text-5xl font-black text-[#002855] mb-4 uppercase">Aprendizaje Continuo</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">Metodologías 70-20-10 y recursos diseñados para potenciar tus habilidades técnicas y blandas.</p>
      </header>

      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <div className="p-20 border-4 border-dashed border-slate-200 rounded-[40px] text-slate-300 font-bold text-xl uppercase tracking-widest">
           Catálogo de Cursos en Preparación
        </div>
      </section>
    </main>
  );
}