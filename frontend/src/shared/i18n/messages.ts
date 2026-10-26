import en from './messages/en.json';
import { defaultLocale, locales, type Locale } from './config';

const catalogs = { en } as const;

export type AppMessages = typeof en;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function resolveLocale(value: string | null | undefined): Locale {
  if (value && isLocale(value)) {
    return value;
  }
  return defaultLocale;
}

export function getMessages(locale: Locale = defaultLocale): AppMessages {
  return catalogs[locale as keyof typeof catalogs] ?? catalogs[defaultLocale];
}

export function getDateLocale(): string {
  return 'en-US';
}
