import { useState } from 'react';
import type { Language } from '../i18n/utils';

interface LanguageSwitcherProps {
  currentLang: Language;
  currentPath: string;
}

export function LanguageSwitcher({ currentLang, currentPath }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'vi' as Language, label: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'en' as Language, label: 'English', flag: '🇬🇧' },
  ];

  const currentLanguage = languages.find((lang) => lang.code === currentLang);

  const getLocalizedPath = (targetLang: Language) => {
    // Remove current language prefix
    let path = currentPath;
    if (currentLang !== 'vi') {
      path = path.replace(`/${currentLang}`, '');
    }

    // Add new language prefix
    if (targetLang !== 'vi') {
      path = `/${targetLang}${path}`;
    }

    return path || '/';
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="hidden sm:inline">{currentLanguage?.label}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20">
            {languages.map((lang) => (
              <a
                key={lang.code}
                href={getLocalizedPath(lang.code)}
                className={`flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                  lang.code === currentLang
                    ? 'bg-gray-50 text-primary font-medium'
                    : 'text-gray-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.label}</span>
                {lang.code === currentLang && (
                  <svg
                    className="w-4 h-4 ml-auto text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
