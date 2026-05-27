"use client";

import React, { createContext, useContext, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { DarkModeProvider } from '../context/DarkModeContext';
import messagesEs from '../i18n/messages_es';
import messagesEn from '../i18n/messages_en';

// Importación exacta compatible con el index.js de la v4.0.5
import { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const LocaleContext = createContext(null);

export const useLocale = () => useContext(LocaleContext);

function flattenMessages(nestedMessages, prefix = '') {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      messages[prefixedKey] = value;
    } else if (typeof value === 'object' && value !== null) {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
}

const allMessages = {
  es: flattenMessages(messagesEs),
  en: flattenMessages(messagesEn),
};

export default function Providers({ children }) {
  const [locale, setLocale] = useState('es');

  // Función directa para alimentar al cargador de contextos de tsParticles
  const initEngine = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={locale} messages={allMessages[locale]}>
        <DarkModeProvider>
          {/* El ParticlesProvider absorbe la inicialización asíncrona y la distribuye por sub-contexto */}
          <ParticlesProvider init={initEngine}>
            {children}
          </ParticlesProvider>
        </DarkModeProvider>
      </IntlProvider>
    </LocaleContext.Provider>
  );
}