import React from 'react';
import Image from 'next/image'; // Reemplazo Senior para optimización nativa

const ProfileImage = ({ src }) => {
  return (
    <div className="relative flex items-center justify-center py-20 group">
      
      {/* Llave izquierda decorativa */}
      <span className="text-primary text-[12rem] md:text-[18rem] font-mono leading-none opacity-40 group-hover:opacity-100 group-hover:-translate-x-6 transition-all duration-700 select-none">
        {'{'}
      </span>
      
      {/* Contenedor central de la imagen de perfil */}
      <div className="relative mx-2 md:mx-8 w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
        
        {/* Efecto de resplandor de neón trasero con tus variables de Tailwind v4 */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur-xl opacity-20 group-hover:opacity-60 transition duration-700"></div>
        
        {/* Imagen optimizada con Next.js Image */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-md">
          <Image
            src={src} // Recibe el string de la ruta '/images/toledana_ico.png' desde About
            alt="ToledanaDev Profile"
            fill // Hace que se adapte al tamaño del contenedor padre de forma responsiva
            sizes="(max-width: 768px) 12rem, 16rem"
            className="object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700"
            priority // Prioriza la carga de esta imagen al ser la principal de la página /about
          />
        </div>
        
      </div>
      
      {/* Llave derecha decorativa */}
      <span className="text-accent text-[12rem] md:text-[18rem] font-mono leading-none opacity-40 group-hover:opacity-100 group-hover:translate-x-6 transition-all duration-700 select-none">
        {'}'}
      </span>
      
    </div>
  );
};

export default ProfileImage;