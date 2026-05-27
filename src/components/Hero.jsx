"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
// Importamos únicamente el componente limpio, tal y como lo pide la v4
import Particles from "@tsparticles/react"; 
import { useDarkMode } from "../context/DarkModeContext";
import { FormattedMessage } from 'react-intl';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const { darkMode } = useDarkMode();
  const robotRef = useRef(null);

  // Evitamos errores de Hidratación en Next.js
  useEffect(() => {
    setMounted(true);
  }, []);

 const particlesOptions = {
    // Mantener en false para que se queden detrás del robot y no tapen el resto de secciones
    fullScreen: { enable: false }, 
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    
    // INTERACTIVIDAD con el mouse para crear una experiencia más inmersiva y dinámica
    interactivity: {
      events: {
        // Al pasar el mouse, las partículas se conectan con el puntero
        onHover: {
          enable: true,
          mode: "grab", 
        },
        // Al hacer click, se inyectan ráfagas de partículas temporales
        onClick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 180, // Distancia a la que el mouse atrapa las líneas
          links: {
            opacity: 0.6, // Sube la intensidad de los enlaces al interactuar
            color: "#00ffff" ,
          },
        },
        push: {
          quantity: 4, // Cuántas partículas nuevas nacen por click
        },
      },
    },

    particles: {
      // Nodos 
      color: { value: ["#00ffff"] }, 
      links: {
        color:  "#00ffff", 
        distance: 130, // Un poco más corto para crear constelaciones más densas y limpias
        enable: true,
        opacity:  0.35,
        width: 0.5,
        triangles: {
          enable: true, // Crea sutiles polígonos sombreados entre nodos cercanos
          opacity: 0.03,
        },
      },
      move: { 
        enable: true, 
        speed: 1.2, // Un pelín más rápido para que se note el flujo orgánico
        direction: "none",
        outModes: { default: "out" }, // Las partículas que salen reaparecen fluidamente
        random: true, // Movimiento menos lineal y más natural
        straight: false,
      },
      number: { 
        density: { enable: true, area: 700 }, // Densidad optimizada para no saturar la CPU
        value: 75, 
      },
      opacity: {
        value: { min: 0.2, max: 0.7 }, // Opacidad variable nativa
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
          sync: false, // Animación asíncrona para simular un "brillo de datos" independiente
        },
      },
      size: { 
        value: { min: 1, max: 4 }, // Variación de tamaño para dar profundidad de campo (3D)
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.5,
          sync: false,
        }
      },
      // EFECTO TWINKLE (Parpadeo cuántico aleatorio)
      twinkle: {
        particles: {
          enable: true,
          color: "#ff003c",
          frequency: 0.05, // 5% de los nodos destellan en blanco por frame
          opacity: 0.6,
        },
      },
    },
    detectRetina: true,
  };

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
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 font-sans bg-secundary dark:bg-background"
    >
      {/* Estructura idéntica a tu inspector; ahora el canvas nacerá dentro de forma nativa */}
      {mounted && (
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <Particles 
            id="tsparticles" 
            className="w-full h-full" 
            options={particlesOptions} 
          />
        </div>
      )}

      <div className={`
        absolute inset-0 z-10 transition-opacity duration-500
        ${darkMode
          ? "bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_85%)]"
          : "bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08)_0%,rgba(255,255,255,1)_85%)]"
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
            <a href="#contact" className="px-8 py-4 bg-primary text-background font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/20 active:scale-95 text-center">
              <FormattedMessage id="hero.quote" defaultMessage="Cotizar Proyecto" />
            </a>
            
          </div>
        </div>

        {/* LADO DERECHO: ROBOT */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-[320px] md:max-w-full flex justify-center" style={{ perspective: 1200 }}>
            <div ref={robotRef} style={{ willChange: 'transform' }} className="animate-float w-full h-auto max-h-[350px] md:max-h-[550px] relative">
              <Image
                src="/images/robot-IA-transp.png"
                alt="Robot IA"
                width={550}  
                height={550} 
                priority    
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