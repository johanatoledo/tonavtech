"use client"; // CRÍTICO: Indica a Next.js que este envoltorio maneja la hidratación del cliente

import React from 'react';
import dynamic from 'next/dynamic';

// Aquí sí está permitido al 100% usar ssr: false porque ya estamos en el entorno del cliente
const DescriptionCarousel = dynamic(() => import('./Description'), {
  ssr: false,
  loading: () => <div className="py-24 bg-transparent min-h-[320px]" />
});

export default function DynamicDescription() {
  return <DescriptionCarousel />;
}