export enum TonePattern {
  OXYTONE_ACUTE = 'oxytone_acute',
  OXYTONE_GRAVE = 'oxytone_grave',
  PAROXYTONE = 'paroxytone',
  PROPAROXYTONE = 'proparoxytone',
  PERISPOMENON = 'perispomenon',
  PROPERISPOMENON = 'properispomenon',
  PROPAROXYTONE_AND_OXYTONE = 'proparoxytone and oxytone',
  PROPERISPOMENON_AND_OXYTONE = 'properispomenon and oxytone',
  TONELESS = 'toneless'
}

export enum Tone {
  GRAVE = 'grave',
  ACUTE = 'acute',
  CIRCUMFLEX = 'perispomenon',
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

export interface MorpheusReponse {
  
}