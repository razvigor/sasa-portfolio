import React, { useState, createContext, useContext } from 'react';

import { languageOptions, dictionaryList } from '../languages';

// create the language context with default selected language
export const LanguageContext = createContext({
  userLanguage: 'en',
  dictionary: dictionaryList.en,
});

// it provides the language context to app
export function LanguageProvider({ children }) {
  const defaultLanguage = window.localStorage.getItem('lang');
  const [userLanguage, setUserLanguage] = useState(defaultLanguage || 'en');

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selected) => {
      const newLanguage = languageOptions[selected] ? selected : 'en';
      setUserLanguage(newLanguage);
      window.localStorage.setItem('lang', newLanguage);
    },
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}

// get text according to id & current language
export function Text({ tid }) {
  const languageContext = useContext(LanguageContext);
  if (Array.isArray(languageContext.dictionary[tid])) {
    return languageContext.dictionary[tid].map((item, key) => (
      <li
        key={`expierence-${key}`}
        className='text-white-100 text-[14px] pl-1 tracking-wider'
      >
        {item}
      </li>
    ));
  }
  return languageContext.dictionary[tid] || tid;
}
