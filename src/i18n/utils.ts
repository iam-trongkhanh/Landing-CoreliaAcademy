import vi from './locales/vi.json';
import en from './locales/en.json';

// Supported languages
export const languages = {
  vi: 'Tiếng Việt',
  en: 'English',
} as const;

export type Language = keyof typeof languages;

// All translations
export const translations = {
  vi,
  en,
} as const;

// Default language
export const defaultLang: Language = 'vi';

// Get translation by key (supports nested keys like "nav.home")
export function useTranslations(lang: Language = defaultLang) {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: any = translations[lang];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to default language if key not found
        value = translations[defaultLang];
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Return key if not found
          }
        }
        break;
      }
    }

    return typeof value === 'string' ? value : key;
  };
}

// Get language from URL
export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in languages) {
    return lang as Language;
  }
  return defaultLang;
}

// Translate route paths
export function useTranslatedPath(lang: Language) {
  return function translatePath(path: string, targetLang: Language = lang): string {
    // Remove leading slash
    const cleanPath = path.replace(/^\//, '');

    // If target is default language and we don't prefix it
    if (targetLang === defaultLang) {
      return `/${cleanPath}`;
    }

    // Add language prefix for non-default languages
    return `/${targetLang}/${cleanPath}`;
  };
}

// Get localized route
export function getLocalizedRoute(route: string, locale: Language): string {
  if (locale === defaultLang) {
    return route;
  }
  return `/${locale}${route}`;
}

// Language switcher helper
export function getAlternateLanguageUrl(currentUrl: URL, targetLang: Language): string {
  const currentLang = getLangFromUrl(currentUrl);
  let pathname = currentUrl.pathname;

  // Remove current language prefix if exists
  if (currentLang !== defaultLang) {
    pathname = pathname.replace(`/${currentLang}`, '');
  }

  // Add target language prefix if not default
  if (targetLang !== defaultLang) {
    pathname = `/${targetLang}${pathname}`;
  }

  return pathname || '/';
}
