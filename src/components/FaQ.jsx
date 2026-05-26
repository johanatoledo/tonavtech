"use client"; // CRÍTICO: Requerido por el manejo de estados dinámicos del acordeón (useState)

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FaQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿Cuánto tiempo toma desarrollar una web?",
      answer: "Depende de la complejidad. Una Landing Page toma de 1 a 3 días, mientras que una App completa con Backend y DB puede tomar de 3 a 4 semanas."
    },
    {
      question: "¿Mi página será compatible con dispositivos móviles?",
      answer: "Absolutamente. Utilizo un enfoque 'Mobile-First', garantizando que tu web se vea perfecta en smartphones, tablets y desktops."
    },
    {
      question: "¿Qué tanto espacio consume en mi computadora?",
      answer: "No ocupa espacio ni consume recursos de su computadora. Todo vive en un servidor seguro de alta velocidad gestionado de manera independiente."
    },
    {
      question: "¿Realizas mantenimiento después del lanzamiento?",
      answer: "Claro que sí, hacemos un continuo seguimiento a tu app asegurándonos de su correcto funcionamiento."
    },
    {
      question: "¿Ofreces garantía?",
      answer: "Todos nuestros servicios vienen con hasta tres meses de garantía."
    },
    {
      question: "¿Mi página es personalizable?",
      answer: "Sí. En TonavTech todas las ideas son tomadas en cuenta de forma personalizada." // Corrección estratégica de marca
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 md:px-6 font-sans bg-white/95 dark:bg-background transition-colors duration-300 rounded-xl">
      <div className="max-w-4xl mx-auto">
        
        {/* Cabecera de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-secundary mb-6">
            Preguntas <span className="text-primary italic">Frecuentes</span>
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto rounded-full shadow-[0_0_8px_rgba(255,0,60,0.6)]"></div>
        </div>

        {/* Lista de Acordeones */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`
                rounded-2xl border-2 transition-all duration-500
                dark:diagonal-gradient-pro bg-white
                ${openIndex === index 
                  ? 'border-primary shadow-[0_0_15px_rgba(0,255,255,0.15)]' 
                  : 'border-gray-100 dark:border-gray-800/50 hover:border-primary/50 dark:hover:border-gray-700 shadow-sm'}
              `}
            >
              {/* Botón Disparador */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full p-6 text-left flex justify-between items-center group focus:outline-none"
              >
                <span className={`
                  text-base sm:text-lg font-bold transition-colors duration-300
                  ${openIndex === index 
                    ? 'text-primary' 
                    : 'text-gray-700 dark:text-gray-200 group-hover:text-primary'}
                `}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-500 ${
                    openIndex === index ? 'rotate-180 text-primary' : 'text-gray-400 dark:text-slate-400'
                  }`} 
                />
              </button>
              
              {/* Contenedor Desplegable */}
              <div 
                className={`
                  overflow-hidden transition-all duration-500 ease-in-out
                  ${openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                {/* Contenido de la Respuesta */}
                <div className="px-6 pb-8 text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed border-t border-gray-50 dark:border-gray-800/30 pt-4">
                  <div className="flex gap-4">
                    {/* Línea de acento vertical ciberpunk */}
                    <div className="w-1 bg-accent rounded-full shrink-0 shadow-[0_0_6px_rgba(255,0,60,0.4)]"></div>
                    <p className="text-justify">{faq.answer}</p>
                  </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaQ;