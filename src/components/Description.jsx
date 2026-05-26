"use client"; // CRÍTICO: Swiper depende directamente del objeto 'window' y APIs del navegador

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import { Code2, Layout, Server, Database, Smartphone, Globe, BotMessageSquare } from 'lucide-react';
import { FormattedMessage } from 'react-intl';

// Estilos base de Swiper (Next.js los resuelve nativamente desde node_modules)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Description = () => {
  // Tus objetos de datos e íconos originales se mantienen intactos
  const slides = [
    {
      titleId: "desc.web.title",
      contentId: "desc.web.content",
      icon: <Code2 className="w-10 h-10 text-primary" />,
    },
    {
      titleId: "desc.ia.title",
      contentId: "desc.ia.content",
      icon: <BotMessageSquare className="w-10 h-10 text-primary" />,
    },
    {
      titleId: "desc.stack.title",
      contentId: "desc.stack.content",
      icon: <Layout className="w-10 h-10 text-primary" />,
    },
    {
      titleId: "desc.system.title",
      contentId: "desc.system.content",
      icon: <Server className="w-10 h-10 text-primary" />,
    },
    {
      titleId: "desc.db.title",
      contentId: "desc.db.content",
      icon: <Database className="w-10 h-10 text-primary" />,
    },
    {
      titleId: "desc.digital.title",
      contentId: "desc.digital.content",
      icon: <Smartphone className="w-10 h-10 text-primary" />,
    },
    {
      titleId: "desc.deploy.title",
      contentId: "desc.deploy.content",
      icon: <Globe className="w-10 h-10 text-primary" />,
    },
  ];

  return (
    <section id="description" className="relative py-24 overflow-hidden bg-transparent transition-colors duration-300 rounded-xl">
      
      {/* Símbolos { y } decorativos de fondo con colores de tu tema ciberpunk */}
      <span className="absolute -top-10 -left-10 text-[15rem] text-primary/5 font-mono select-none pointer-events-none z-0">
        {'{'}
      </span>
      <span className="absolute -bottom-20 -right-10 text-[15rem] text-accent/5 font-mono select-none pointer-events-none z-0">
        {'}'}
      </span>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Swiper
          modules={[Navigation, Pagination, EffectFade, Autoplay]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          slidesPerView={1}
          className="pb-12 tonavtech-swiper" /* Clase añadida para estilizar las balas en global.css */
          style={{ minHeight: '320px' }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {/* Refactorizado bg-dark por clases adaptadas a tu estructura transparente/oscura */}
              <div className="relative border-l-2 border-primary/30 pl-8 md:pl-12 py-4 bg-transparent rounded-xl">
                {slide.icon}
                <h2 className="text-primary text-sm mt-4 uppercase tracking-[0.3em] font-bold mb-6">
                  <FormattedMessage id={slide.titleId} />
                </h2>
                {/* Corregido text-gray-700 en modo claro a text-background/80 para que se lea siempre bien en TonavTech */}
                <p className="text-xl md:text-2xl text-background/80 dark:text-gray-400 italic leading-relaxed font-light text-justify">
                  <FormattedMessage id={slide.contentId} />
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Description;