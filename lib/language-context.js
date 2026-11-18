'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext({
  lang: 'es',
  toggleLanguage: () => {},
  setLanguage: () => {},
})

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('efra_portfolio_lang')
      if (saved === 'en' || saved === 'es') {
        setLang(saved)
      }
    } catch (e) {
      // Ignore storage errors
    }
  }, [])

  const setLanguage = newLang => {
    setLang(newLang)
    try {
      localStorage.setItem('efra_portfolio_lang', newLang)
    } catch (e) {
      // Ignore storage errors
    }
  }

  const toggleLanguage = () => {
    setLanguage(lang === 'es' ? 'en' : 'es')
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
