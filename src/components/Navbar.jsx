"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Importación clave para optimización de imágenes en Next.js
import { useLocale } from '../app/Providers';
import { useDarkMode } from '../context/DarkModeContext';
import { FormattedMessage } from 'react-intl';

export default function Navbar() {
  const { darkMode, setDarkMode } = useDarkMode();
  const { locale, setLocale } = useLocale();

  const navLinks = [
    { name: 'navbar.home', href: '/#home' },
    { name: 'navbar.about', href: '/about' },
    { name: 'navbar.services', href: '/#services' },
    { name: 'navbar.contact', href: '/#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 flex items-center px-4 sm:px-6 py-3 sm:py-4 bg-transparent text-primary dark:text-primary transition-colors duration-300 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 shadow-sm">
      
      {/* Contenedor del Logo de TonavTech */}
      <Link href="/#home" className="flex items-center gap-2 select-none group">
        <Image 
          src="/images/logo-tonavtech.png" // Asegúrate de colocar tu logo en esta ruta dentro de la carpeta public
          alt="TonavTech Logo"
          width={300}       // Ajusta el ancho según las dimensiones de tu logo
          height={300}       // Ajusta el alto según las dimensiones de tu logo
          className="object-contain h-8 w-auto brightness-100 dark:brightness-110" 
          priority          // Le dice a Next.js que cargue esta imagen de inmediato por estar en el viewport inicial
        />
      </Link>

      <div className="flex-1"></div>
      
      <ul className="flex gap-4 sm:gap-6 text-sm sm:text-base items-center">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="hover:text-accent transition-colors duration-200 text-gray-700 dark:text-primary"
            >
              <FormattedMessage id={link.name} />
            </Link>
          </li>
        ))}
        {/* Selector de Idioma */}
        <li>
          <select
            value={locale || 'es'}
            onChange={e => setLocale?.(e.target.value)}
            className="ml-2 px-2 py-1 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#222] text-xs text-black dark:text-white"
            aria-label="Select language"
          >
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>
        </li>
      </ul>
      
      <button
        aria-label="Toggle dark mode"
        className="ml-4 p-2 rounded-full bg-transparent text-accent dark:text-primary border-2 border-accent dark:border-primary hover:bg-accent/10 dark:hover:bg-primary/10 transition"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? '🌙' : '☀️'}
      </button>
    </nav>
  );
}