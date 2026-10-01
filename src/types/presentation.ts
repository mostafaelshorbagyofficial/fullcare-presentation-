export type Language = 'ar' | 'en';

export type SectionKey = 
  | 'intro'
  | 'insight'
  | 'brand'
  | 'ecosystem'
  | 'expansion'
  | 'journey'
  | 'content'
  | 'campaign'
  | 'founder'
  | 'strategy'
  | 'vision';

export interface SectionMeta {
  key: SectionKey;
  slideRange: [number, number];
  ar: { label: string; tag: string };
  en: { label: string; tag: string };
}

export type SlideLayout =
  | 'intro'
  | 'statement'
  | 'split-content'
  | 'specialties'
  | 'ecosystem'
  | 'timeline'
  | 'geographic'
  | 'audience-split'
  | 'journey'
  | 'content-pillars'
  | 'campaign'
  | 'founder'
  | 'strategy'
  | 'roadmap'
  | 'metrics'
  | 'closing';

export interface SlideContent {
  title?: string;
  subtitle?: string;
  tagline?: string;
  quote?: string;
  lead?: string;
  paragraphs?: string[];
  bulletPoints?: {
    icon?: string;
    title: string;
    description: string;
  }[];
  steps?: {
    step: string;
    title: string;
    description?: string;
  }[];
  cards?: {
    icon?: string;
    badge?: string;
    title: string;
    subtitle?: string;
    description?: string;
    tags?: string[];
  }[];
  tableData?: {
    header: string[];
    rows: string[][];
  };
  keyTakeaway?: string;
  highlightText?: string;
  secondaryText?: string;
}

export interface SlideDefinition {
  id: number;
  slideNumber: number;
  section: SectionKey;
  layout: SlideLayout;
  ar: SlideContent;
  en: SlideContent;
  visual?: {
    type: 'image' | 'graphic' | 'founder' | 'logo-comparison' | 'map' | 'pillars' | 'ecosystem-diagram' | 'stepper' | 'chain';
    src?: string;
    alt?: string;
    captionAr?: string;
    captionEn?: string;
    overlayGradient?: boolean;
    founderIndex?: number;
  };
  accentColor?: 'primary' | 'cyan' | 'deep' | 'support' | 'secondary' | 'gold' | 'emerald';
}

export interface PresentationState {
  language: Language;
  activeSection: SectionKey;
  scrollProgress: number;
  isFullscreen: boolean;
  isLogosModalOpen: boolean;
  isShortcutsModalOpen: boolean;
}
