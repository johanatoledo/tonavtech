import React from "react";
import Image from "next/image"; // Reemplazo Senior para optimización nativa

/**
 * Image component for service images optimized for Next.js
 * @param {string} src - Image source path
 * @param {string} alt - Alt text for the image
 * @param {string} className - Optional Tailwind classes (se aplican al contenedor padre)
 */
const ServiceImage = ({ src, alt, className = "w-20 h-20 mx-auto mb-4" }) => {
  return (
    // Envolvemos con un div relativo para que el 'fill' de Next.js se acople al tamaño de la prop className
    <div className={`relative ${className}`}>
      <Image 
        src={src} 
        alt={alt} 
        fill
        sizes="(max-width: 768px) 5rem, 5rem" // Optimiza la caché según los tamaños por defecto (w-20 = 5rem)
        className="object-contain" 
        loading="lazy" 
      />
    </div>
  );
};

export default ServiceImage;