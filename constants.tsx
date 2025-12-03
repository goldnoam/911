import { Category, EmergencyContact, TranslationResource } from './types';

export const UI_TRANSLATIONS: TranslationResource = {
  appTitle: {
    he: 'מוקדי חירום',
    en: 'Emergency Center',
    ru: 'Экстренные службы'
  },
  appSubtitle: {
    he: 'ישראל',
    en: 'Israel',
    ru: 'Израиль'
  },
  searchPlaceholder: {
    he: 'חפש מוקד, מספר או תיאור...',
    en: 'Search contact, number or description...',
    ru: 'Поиск службы, номера или описания...'
  },
  callNow: {
    he: 'חייג עכשיו',
    en: 'Call Now',
    ru: 'Позвонить'
  },
  share: {
    he: 'שתף',
    en: 'Share',
    ru: 'Поделиться'
  },
  copy: {
    he: 'העתק מספר',
    en: 'Copy Number',
    ru: 'Копировать'
  },
  numberCopied: {
    he: 'המספר הועתק!',
    en: 'Number Copied!',
    ru: 'Номер скопирован!'
  },
  noResults: {
    he: 'לא נמצאו תוצאות',
    en: 'No results found',
    ru: 'Результатов не найдено'
  },
  clearFilter: {
    he: 'נקה סינון',
    en: 'Clear filter',
    ru: 'Очистить фильтр'
  },
  disclaimer: {
    he: 'שירות זה מוגש כשירות לציבור. במקרה של סכנת חיים מיידית יש לחייג 100 או 101.',
    en: 'Public service. In case of immediate life danger dial 100 or 101.',
    ru: 'Общественный сервис. В случае опасности для жизни звоните 100 или 101.'
  },
  all: {
    he: 'הכל',
    en: 'All',
    ru: 'Все'
  },
  dialConfirm: {
    he: 'האם לחייג למספר',
    en: 'Dial',
    ru: 'Позвонить на номер'
  },
  callConfirmation: {
    he: 'האם לחייג למספר',
    en: 'Call number',
    ru: 'Вызвать номер'
  }
};

export const CATEGORY_TRANSLATIONS: Record<Category, Record<'he' | 'en' | 'ru', string>> = {
  [Category.EMERGENCY]: { he: 'חירום והצלה', en: 'Emergency', ru: 'Экстренные' },
  [Category.HEALTH]: { he: 'קופות חולים', en: 'Health Funds', ru: 'Больничные кассы' },
  [Category.UTILITY]: { he: 'תשתיות ועיריה', en: 'Utilities', ru: 'Коммунальные' },
  [Category.SECURITY]: { he: 'ביטחון וסייבר', en: 'Security', ru: 'Безопасность' },
  [Category.WELFARE]: { he: 'רווחה וסיוע', en: 'Welfare', ru: 'Соц. помощь' },
  [Category.GOVERNMENT]: { he: 'ממשל', en: 'Government', ru: 'Правительство' }
};

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  {
    id: '100',
    number: '100',
    name: { he: 'משטרת ישראל', en: 'Israel Police', ru: 'Полиция Израиля' },
    description: { he: 'מוקד חירום משטרה', en: 'Police Emergency Hotline', ru: 'Экстренный вызов полиции' },
    category: Category.EMERGENCY,
    colorClass: 'blue',
    iconName: 'Shield'
  },
  {
    id: '101',
    number: '101',
    name: { he: 'מגן דוד אדום', en: 'Magen David Adom', ru: 'Маген Давид Адом' },
    description: { he: 'מוקד חירום רפואי ואמבולנס', en: 'Medical Emergency & Ambulance', ru: 'Скорая медицинская помощь' },
    category: Category.EMERGENCY,
    colorClass: 'red',
    iconName: 'Ambulance'
  },
  {
    id: '102',
    number: '102',
    name: { he: 'כבאות והצלה', en: 'Fire & Rescue', ru: 'Пожарная служба' },
    description: { he: 'מוקד חירום לשריפות וחילוץ', en: 'Fire and Rescue Services', ru: 'Пожары и спасательные работы' },
    category: Category.EMERGENCY,
    colorClass: 'orange',
    iconName: 'Flame'
  },
  {
    id: '103',
    number: '103',
    name: { he: 'חברת חשמל', en: 'Electric Corp', ru: 'Электрическая компания' },
    description: { he: 'דיווח על תקלות והפסקות חשמל', en: 'Power Outages & Faults', ru: 'Сбои электроснабжения' },
    category: Category.UTILITY,
    colorClass: 'yellow',
    iconName: 'Zap'
  },
  {
    id: '104',
    number: '104',
    name: { he: 'פיקוד העורף', en: 'Home Front Command', ru: 'Командование тыла' },
    description: { he: 'מידע והנחיות התגוננות אזרחית', en: 'Civil Defense Guidelines', ru: 'Инструкции по гражданской обороне' },
    category: Category.SECURITY,
    colorClass: 'orange',
    iconName: 'Siren'
  },
  {
    id: '104-health',
    number: '104',
    name: { he: 'פיקוד העורף - סיוע נפשי', en: 'HFC - Mental Support', ru: 'Командование тыла - Психолог' },
    description: { he: 'תמיכה וסיוע נפשי במצבי חירום', en: 'Mental health support in emergencies', ru: 'Психологическая поддержка в ЧС' },
    category: Category.HEALTH,
    colorClass: 'orange',
    iconName: 'HeartHandshake'
  },
  {
    id: '105',
    number: '105',
    name: { he: 'מוקד 105', en: 'Hotline 105', ru: 'Центр 105' },
    description: { he: 'הגנה על ילדים ברשת', en: 'Child Online Protection', ru: 'Защита детей в интернете' },
    category: Category.SECURITY,
    colorClass: 'purple',
    iconName: 'ShieldAlert'
  },
  {
    id: '106',
    number: '106',
    name: { he: 'מוקד עירוני', en: 'Municipal Hotline', ru: 'Муниципальный центр' },
    description: { he: 'דיווח על מפגעים עירוניים', en: 'Municipal Hazards Reporting', ru: 'Отчетность о городских проблемах' },
    category: Category.UTILITY,
    colorClass: 'green',
    iconName: 'Building2'
  },
  {
    id: '112',
    number: '112',
    name: { he: 'חירום בינלאומי', en: 'International Emergency', ru: 'Экстренный (SOS)' },
    description: { he: 'חיוג ללא קליטה/SIM', en: 'Emergency from any phone/No SIM', ru: 'Вызов без SIM-карты' },
    category: Category.EMERGENCY,
    colorClass: 'slate',
    iconName: 'PhoneCall'
  },
  {
    id: '118',
    number: '118',
    name: { he: 'משרד הרווחה', en: 'Ministry of Welfare', ru: 'Мин. соцобеспечения' },
    description: { he: 'מידע ושירותים חברתיים', en: 'Social Services Info', ru: 'Социальные услуги' },
    category: Category.WELFARE,
    colorClass: 'teal',
    iconName: 'HeartHandshake'
  },
  {
    id: '119',
    number: '119',
    name: { he: 'מערך הסייבר', en: 'Cyber Directorate', ru: 'Кибербезопасность' },
    description: { he: 'דיווח על מתקפות סייבר', en: 'Cyber Attack Reporting', ru: 'Сообщить о кибератаке' },
    category: Category.SECURITY,
    colorClass: 'indigo',
    iconName: 'Lock'
  },
  {
    id: '2700',
    number: '*2700',
    name: { he: 'שירותי בריאות כללית', en: 'Clalit Health Services', ru: 'Клалит' },
    description: { he: 'מוקד שירות וזימון תורים', en: 'Service & Appointments', ru: 'Обслуживание и очереди' },
    category: Category.HEALTH,
    colorClass: 'teal',
    iconName: 'Stethoscope'
  },
  {
    id: '3555',
    number: '*3555',
    name: { he: 'מכבי שירותי בריאות', en: 'Maccabi Health Services', ru: 'Маккаби' },
    description: { he: 'מוקד שירות וזימון תורים', en: 'Service & Appointments', ru: 'Обслуживание и очереди' },
    category: Category.HEALTH,
    colorClass: 'blue',
    iconName: 'Activity'
  },
  {
    id: '3833',
    number: '*3833',
    name: { he: 'קופת חולים מאוחדת', en: 'Meuhedet Health Fund', ru: 'Меухедет' },
    description: { he: 'מוקד שירות וזימון תורים', en: 'Service & Appointments', ru: 'Обслуживание и очереди' },
    category: Category.HEALTH,
    colorClass: 'orange',
    iconName: 'Heart'
  },
  {
    id: '507',
    number: '*507',
    name: { he: 'לאומית שירותי בריאות', en: 'Leumit Health Services', ru: 'Леумит' },
    description: { he: 'מוקד שירות וזימון תורים', en: 'Service & Appointments', ru: 'Обслуживание и очереди' },
    category: Category.HEALTH,
    colorClass: 'blue',
    iconName: 'Stethoscope'
  },
  {
    id: '1220',
    number: '1220',
    name: { he: 'זק"א', en: 'ZAKA', ru: 'ЗАКА' },
    description: { he: 'איתור וחילוץ, זיהוי', en: 'Rescue & Recovery', ru: 'Поиск и спасение' },
    category: Category.EMERGENCY,
    colorClass: 'stone',
    iconName: 'Stethoscope'
  },
  {
    id: '1221',
    number: '1221',
    name: { he: 'איחוד הצלה', en: 'United Hatzalah', ru: 'Ихуд Ацала' },
    description: { he: 'רשת מתנדבים להצלת חיים', en: 'Emergency Volunteer Network', ru: 'Волонтерская скорая помощь' },
    category: Category.EMERGENCY,
    colorClass: 'orange',
    iconName: 'Activity'
  },
  {
    id: '1201',
    number: '1201',
    name: { he: 'ער"ן', en: 'ERAN', ru: 'ЭРАН' },
    description: { he: 'עזרה ראשונה נפשית', en: 'Mental First Aid', ru: 'Психологическая помощь' },
    category: Category.WELFARE,
    colorClass: 'pink',
    iconName: 'Ear'
  },
  {
    id: '1202',
    number: '1202',
    name: { he: 'סיוע לנפגעות', en: 'Sexual Assault (Women)', ru: 'Помощь пострадавшим (Ж)' },
    description: { he: 'מרכז סיוע לנשים', en: 'Assistance Center for Women', ru: 'Центр помощи женщинам' },
    category: Category.WELFARE,
    colorClass: 'rose',
    iconName: 'Heart'
  },
  {
    id: '1203',
    number: '1203',
    name: { he: 'סיוע לנפגעים', en: 'Sexual Assault (Men)', ru: 'Помощь пострадавшим (М)' },
    description: { he: 'מרכז סיוע לגברים', en: 'Assistance Center for Men', ru: 'Центр помощи мужчинам' },
    category: Category.WELFARE,
    colorClass: 'sky',
    iconName: 'Heart'
  },
  {
    id: '1299',
    number: '1299',
    name: { he: 'מענה ממשלתי', en: 'Gov Info', ru: 'Правительственная инфо' },
    description: { he: 'שירותי משרדי הממשלה', en: 'Government Services', ru: 'Государственные услуги' },
    category: Category.GOVERNMENT,
    colorClass: 'blue',
    iconName: 'Landmark'
  }
];