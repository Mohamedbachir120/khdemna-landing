import { useState, useEffect, createContext, useContext, ReactNode, FC } from 'react';

// Import your message files
import enMessages from '../messages/en.json';
import arMessages from '../messages/ar.json';
import frMessages from '../messages/fr.json';

// Combine messages into a single object
const messages = {
  en: enMessages,
  ar: arMessages,
  fr: frMessages,
};

// Define types
export type Language = 'en' | 'ar' | 'fr';
type Messages = typeof enMessages;
type Namespace = keyof Messages;

// Utility function to access nested properties using dot notation
const getNestedTranslation = (obj: any, key: string): string => {
  const keys = key.split('.'); // Split key into parts (e.g., "section1.title" -> ["section1", "title"])
  let current = obj;

  for (const k of keys) {
    if (current && typeof current === 'object' && k in current) {
      current = current[k];
    } else {
      return key; // Return the key as fallback if the path is invalid
    }
  }

  return typeof current === 'string' ? current : key; // Return translation or fallback
};

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
}

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Define props for the provider
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as Language | null;
    if (storedLanguage && messages[storedLanguage]) {
      setLanguage(storedLanguage);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    if (messages[lang]) {
      localStorage.setItem('language', lang);
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Modified translation hook to handle nested keys
export const useTranslations = <N extends Namespace>(namespace: N) => {
  const { language } = useLanguage();

  // Fallback to English if the selected language is not found
  const translations = messages[language] || messages.en;

  // The translation function `t`
  const t = (key: string): string => {
    const namespaceTranslations = translations[namespace];
    if (!namespaceTranslations || typeof namespaceTranslations !== 'object') {
      return `${String(namespace)}.${key}`; // Fallback if namespace is invalid
    }

    // Use the utility function to handle dot notation
    return getNestedTranslation(namespaceTranslations, key);
  };

  return t;
};