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
  UPSILON = 'upsilon'
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

export interface MorpheusReponse {
  
}


export enum Case {
  NOMINATIVE,
  GENITIVE,
  ACCUSATIVE,
  DATIVE,
  VOCATIVE,
  NOMINATIVE_ACCUSATIVE,
  GENITIVE_DATIVE
}

export enum Number {
  SINGULAR,
  DUAL,
  PLURAL,
}

export enum Gender {
  FEMININE,
  MASCULINE,
  NEUTER,
  MASCULINE_NEUTER,
  FEMININE_MASCULINE,
  FEMININE_MASCULINE_NEUTER
}
export interface Nominal {
  case: Case,
  number: Number,
  gender: Gender
}

export interface NominalForm extends Nominal {
  form: string
}