"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Particles from "@tsparticles/react"; // Solo importamos este
import { loadSlim } from "@tsparticles/slim";
import { useDarkMode } from "../context/DarkModeContext";
import { FormattedMessage } from 'react-intl';

const Hero = () => {
 const { darkMode } = useDarkMode();
  const robotRef = useRef(null);

  // Sintaxis v4: Función directa que se le pasa a la prop 'init' del componente
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const particlesOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    particles: {
      color: { value: ["#00ffff", "#ff003c"] },
      links: {
        color: darkMode ? "#ffffff" : "#00ffff",
        distance: 150,
        enable: true,
        opacity: darkMode ? 0.15 : 0.4,
        width: 1,
      },
      move: { enable: true, speed: 0.8 },
      number: { density: { enable: true, area: 800 }, value: 60 },
      opacity: { value: darkMode ? 0.3 : 0.6 },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  // El useEffect del mousemove se queda exactamente como lo tenías...
  useEffect(() => {
    const handleMouseMove = (e) => {
      const robot = robotRef.current;
      if (!robot) return;
      const rect = robot.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      const moveX = Math.max(Math.min(x / 20, 25), -25);
      const moveY = Math.max(Math.min(y / 20, 25), -25);
      robot.style.transform = `translate(${moveX}px, ${moveY}px) rotateY(${moveX / 2}deg) rotateX(${-moveY / 2}deg)`;
    };

    const area = document.getElementById("home");
    if (area) area.addEventListener("mousemove", handleMouseMove);
    return () => {
      if (area) area.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 font-sans bg-white dark:diagonal-gradient-pro">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
       }}
/>
      <div className={`
        absolute inset-0 z-10 transition-opacity duration-500
       ${darkMode
        ? "bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.75)_90%)]"
        : "bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0%,rgba(255,255,255,0.65)_90%)]"
        }
      `}></div>

      <div className="relative z-20 flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-6 gap-8">

        {/* LADO IZQUIERDO: TEXTO */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
          
          <span className="inline-block px-4 py-1 border border-primary/30 rounded-full text-primary text-[8px] sm:text-xs font-mono mb-6 tracking-[0.2em] uppercase bg-primary/5">
            <FormattedMessage id="hero.badge" defaultMessage="Desarrollo Web & IA" />
          </span>

          <h1 className="text-2xl sm:text-2xl lg:text-5xl leading-[1.1] mb-6 text-background dark:text-secundary">
            <FormattedMessage
              id="hero.title"
              values={{
                span1: (chunks) => <span className="text-primary italic">{chunks}</span>,
                span2: (chunks) => <span className="text-accent italic">{chunks}</span>
              }}
              defaultMessage="Transformo tus ideas en <span1>Soluciones</span1> de <span2>alto impacto</span2>."
            />
          </h1>

          <p className="text-base sm:text-lg mb-10 max-w-md lg:max-w-lg leading-relaxed text-background/70 dark:text-secundary/60">
            <FormattedMessage
              id="hero.description"
              values={{
                bold: (chunks) => <strong className="font-semibold ml-1 uppercase tracking-tighter">{chunks}</strong>
              }}
              defaultMessage="Especialista en plataformas de alta conversión e integración de <bold>Agentes de IA</bold>."
            />
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a href="#contact" className="px-8 py-4 bg-primary text-background font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/20 active:scale-95 text-center text-black">
              <FormattedMessage id="hero.quote" defaultMessage="Cotizar Proyecto" />
            </a>
            <a href="#services" className="px-8 py-4 bg-transparent border border-background/20 dark:border-secundary/20 text-background dark:text-secundary rounded-full transition-all hover:border-accent hover:text-accent text-center">
              <FormattedMessage id="hero.seeServices" defaultMessage="Ver Servicios" />
            </a>
          </div>
        </div>

        {/* LADO DERECHO: ROBOT */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-[320px] md:max-w-full flex justify-center" style={{ perspective: 1200 }}>
            
            {/* Reemplazo Senior de la etiqueta img original */}
            <div ref={robotRef} style={{ willChange: 'transform' }} className="animate-float w-full h-auto max-h-[350px] md:max-h-[550px] relative">
              <Image
                src="/images/robot-IA-transp.png" // Mueve tu archivo de imagen a public/images/
                alt="Robot IA"
                width={550}  // Ancho nativo estimado de la imagen para reservar layout space
                height={550} // Alto nativo estimado de la imagen
                priority    // Carga prioritaria por estar por encima del pliegue (LCP optimization)
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,255,255,0.3)] pointer-events-none"
              />
            </div>

            <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full -z-10 opacity-50 dark:opacity-100"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;