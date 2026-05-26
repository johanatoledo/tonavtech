"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from '../app/Providers';
import { useDarkMode } from '../context/DarkModeContext';
import { FormattedMessage } from 'react-intl';

export default function Navbar() {
  const { darkMode, setDarkMode } = useDarkMode();
  const { locale, setLocale } = useLocale();
  const [mounted, setMounted] = useState(false);
  
  // Estado para controlar la apertura del menú hamburguesa
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Cerrar el menú automáticamente si se cambia el tamaño de pantalla a escritorio
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'navbar.home', href: '/#home' },
    { name: 'navbar.about', href: '/about' },
    { name: 'navbar.services', href: '/#services' },
    { name: 'navbar.contact', href: '/#contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-6 py-4 bg-white/70 dark:bg-[#050505]/40 text-black dark:text-secundary transition-colors duration-300 backdrop-blur-md border-b border-gray-100 dark:border-gray-900 shadow-sm">
        
        {/* Contenedor del Logo SVG */}
        <Link href="/#home" className="flex items-center select-none group focus:outline-none shrink-0">
          <Image 
            src="/images/logo-tonavtech.svg" 
            alt="TonavTech Logo"
            width={220}       
            height={55}       
            className="object-contain w-36 min-[390px]:w-44 sm:w-48 md:w-56 h-auto transition-transform duration-300 group-hover:scale-102 brightness-100 dark:brightness-110" 
            priority 
          />
        </Link>
        
        {/* Menú y Controles */}
        <div className="flex items-center gap-3 md:gap-6">
          
          {/* Enlaces de Escritorio: Visibles en md (tablets/PC) */}
          <ul className="hidden md:flex gap-6 text-sm sm:text-base items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-accent dark:hover:text-primary transition-colors duration-200 text-gray-700 dark:text-gray-300 font-medium"
                >
                  <FormattedMessage id={link.name} />
                </Link>
              </li>
            ))}
          </ul>

          {/* Acciones Globales */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Selector de Idioma */}
            <select
              value={locale || 'es'}
              onChange={e => setLocale?.(e.target.value)}
              className="px-2 py-1 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] text-xs text-black dark:text-secundary focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
              aria-label="Select language"
            >
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
            
            {/* Botón de Dark Mode */}
            <button
              aria-label="Toggle dark mode"
              className="p-2 text-xs sm:text-sm rounded-full bg-transparent text-accent dark:text-primary border-2 border-accent dark:border-primary hover:bg-accent/10 dark:hover:bg-primary/10 transition-all duration-200 active:scale-95 shrink-0"
              onClick={() => setDarkMode(!darkMode)}
            >
              {mounted ? (darkMode ? '🌙' : '☀️') : '☀️'}
            </button>

            {/* Botón Hamburguesa Interactivo: Solo visible en móviles (< md) */}
            <button
              aria-label="Toggle menu"
              className="flex flex-col justify-center items-center w-8 h-8 md:hidden space-y-1.5 focus:outline-none z-50 rounded-md border border-gray-200 dark:border-gray-800 p-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              {/* Líneas de la hamburguesa animadas por CSS */}
              <span className={`block h-0.5 w-5 bg-black dark:bg-secundary transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-5 bg-black dark:bg-secundary transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-black dark:bg-secundary transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>

        </div>
      </nav>

      {/* Menú Desplegable Lateral (Mobile Drawer) */}
      <div 
        className={`fixed top-0 right-0 h-screen w-[75%] sm:w-[60%] max-w-[300px] bg-white/95 dark:bg-[#050505]/95 backdrop-blur-lg z-40 border-l border-gray-200 dark:border-gray-900 p-6 pt-24 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col gap-6 text-lg font-semibold">
          {navLinks.map((link) => (
            <li key={link.name} className="border-b border-gray-100 dark:border-gray-900 pb-3">
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)} // Cierra el menú al hacer click
                className="block hover:text-accent dark:hover:text-primary transition-colors duration-200 text-gray-800 dark:text-gray-200"
              >
                <FormattedMessage id={link.name} />
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer pequeño decorativo del menú */}
        <div className="text-xs text-gray-400 dark:text-gray-600 font-medium tracking-widest uppercase">
          © TonavTech 2026
        </div>
      </div>

      {/* Capa oscura de fondo (Overlay) al abrir el menú móvil */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-xs z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}