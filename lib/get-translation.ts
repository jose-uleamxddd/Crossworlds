import { translations, Language, TranslationKey } from './i18n';

export function getTranslation(language: Language, key: string): string {
  const keys = key.split('.');
  let current: any = translations[language];
  
  for (const k of keys) {
    current = current?.[k];
  }
  
  return current || key;
}
