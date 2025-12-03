export type Language = 'he' | 'en' | 'ru';

export enum Category {
  EMERGENCY = 'EMERGENCY',
  HEALTH = 'HEALTH',
  UTILITY = 'UTILITY',
  SECURITY = 'SECURITY',
  WELFARE = 'WELFARE',
  GOVERNMENT = 'GOVERNMENT'
}

export interface EmergencyContact {
  id: string;
  number: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  category: Category;
  colorClass: string; // Tailwind color class prefix (e.g., 'red', 'blue')
  iconName: string;
  keywords?: string[]; // Search keywords/tags
}

export interface TranslationResource {
  [key: string]: Record<Language, string>;
}