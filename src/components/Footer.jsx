import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Importamos los iconos exactos desde react-icons (FontAwesome y Lucide)
import { FaLinkedinIn, FaGithub, FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  // Array de redes sociales mapeado de forma limpia para evitar duplicación de código
  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/tunombre-o-empresa', icon: <FaFacebookF size={18} /> },
    { name: 'Instagram', href: 'https://instagram.com/tunombre-o-empresa', icon: <FaInstagram size={18} /> },
    { name: 'WhatsApp', href: 'https://wa.me/tu-numero-con-codigo-pais', icon: <FaWhatsapp size={18} /> },
    { name: 'TikTok', href: 'https://tiktok.com/@tunombre-o-empresa', icon: <FaTiktok size={18} /> },
  ];

  return (
    <footer className="py-12 px-4 md:px-8 bg-white/95 dark:bg-[#0a0a0a] text-gray-700 dark:text-white mt-12 transition-colors duration-300 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* LADO IZQUIERDO: Redes Sociales con Iconos Circulares */}
        <div className="flex flex-wrap gap-4 order-2 md:order-1 justify-center">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visitar nuestro perfil de ${social.name}`}
              className="flex items-center justify-center w-9 h-9 rounded-full border-2 border-gray-300 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-primary hover:border-primary dark:hover:text-primary dark:hover:border-primary transition-all duration-300 transform hover:-translate-y-1"
            >
              {social.icon}
            </a>
          ))}
        </div>
        
        {/* CENTRO: Logo de TonavTech Enmarcado */}
        <div className="order-1 md:order-2 flex items-center gap-2 select-none">
          <Image 
            src="/images/logo-tonavtech.png" // Apunta al mismo archivo en tu carpeta public/images/
            alt="TonavTech Logo"
            width={600} 
            height={600} 
            className="object-contain h-7 w-auto brightness-100 dark:brightness-110"
          />
        </div>

        {/* LADO DERECHO: Copyright / Texto de Marca */}
        <div className="order-3 text-xs font-mono text-gray-500 dark:text-gray-400 tracking-wider text-center md:text-right">
          &copy; {new Date().getFullYear()} <span className="text-primary font-bold">TonavTech</span>. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
}