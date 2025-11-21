import { useState, useEffect } from 'react'
import { LanguageContext } from './LanguageContext'

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en')

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
