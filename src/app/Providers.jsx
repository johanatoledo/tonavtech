"use client";

import React, { createContext, useContext, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { DarkModeProvider } from '../context/DarkModeContext';
import messagesEs from '../i18n/messages_es';
import messagesEn from '../i18n/messages_en';

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

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={locale} messages={allMessages[locale]}>
        <DarkModeProvider>
          {children}
        </DarkModeProvider>
      </IntlProvider>
    </LocaleContext.Provider>
  );
}