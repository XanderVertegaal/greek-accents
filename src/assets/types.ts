export enum TonePattern {
  TONELESS = 'toneless',
  OXYTONE_ACUTE = 'oxytone (acute)',
  OXYTONE_GRAVE = 'oxytone (grave)',
  PAROXYTONE = 'paroxytone',
  PROPAROXYTONE = 'proparoxytone',
  PERISPOMENON = 'perispomenon',
  PROPERISPOMENON = 'properispomenon',
  PROPAROXYTONE_AND_OXYTONE = 'proparoxytone and oxytone',
  PROPERISPOMENON_AND_OXYTONE = 'properispomenon and oxytone',
}

export enum Tone {
  GRAVE = 'grave',
  ACUTE = 'acute',
  CIRCUMFLEX = 'circumflex',
  NONE = 'none',
}

export enum Vowel {
  ALPHA = 'alpha',
  EPSILON = 'epsilon',
  ETA = 'eta',
  OMICRON = 'omicron',
  OMEGA = 'omega',
  IOTA = 'iota',
  UPSILON = 'upsilon',
}

export enum Aspiration {
  ASPER = 'asper',
  LENIS = 'lenis',
  NONE = 'none',
}

export interface Character {
  glyph: string;
  props: CharProps;
}

export interface CharProps {
  [key: string]: boolean | Vowel | Aspiration | Tone;
  vowel: Vowel;
  uppercase: boolean;
  subscripted: boolean;
  aspirated: Aspiration;
  tone: Tone;
  diaeresis: boolean;
}

export type IndexWord = [number, string];

export interface Text {
  id: string;
  author: string;
  work: string;
  passage: string;
  text: string;
}
export interface NucleusIndex {
  nucleus: string;
  index: number;
}

// export interface MorpheusReponse {}

export enum Casus {
  NOMINATIVE = 'nom.',
  GENITIVE = 'gen.',
  ACCUSATIVE = 'acc.',
  DATIVE = 'dat.',
  VOCATIVE = 'voc.',
}

export enum Numerus {
  SINGULAR = 'sg.',
  DUAL = 'du.',
  PLURAL = 'pl.',
}

export enum Genus {
  FEMININE = 'fem.',
  MASCULINE = 'masc.',
  NEUTER = 'neut.'
}
export interface Nominal {
  case: Casus;
  number: Numerus;
  gender: Genus;
  tone: TonePattern
}

export enum WordType {
  ARTICLE = 'article',
  SUBSTANTIVE = 'substantive',
  VERB = 'verb'
}

export interface Article extends Nominal {
  form: string;
}

export interface NominalForm extends Nominal {
  form: string;
  translation: string;
  exception?: Partial<NominalForm>[];
}

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export enum Declension {
  FIRST_DECLENSION,
  SECOND_DECLENSION,
  THIRD_DECLENSION,
}

export enum Diathesis {
  ACTIVUM,
  MEDIUM,
  MEDIOPASSIVUM,
  PASSIVUM,
}

export enum Tense {
  PRAESENS,
  IMPERFECTUM,
  AORISTUS,
  FUTURUM,
  PERFECTUM,
  PLUSQUAMPERFECTUM,
}

export enum Mood {
  INDICATIVUS,
  IMPERATIVUS,
  CONIUNCTIVUS,
  OPTATIVUS,
  INFINITIVUS,
}
