/* eslint-disable @typescript-eslint/naming-convention */
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
  aspiration: Aspiration;
  tone: Tone;
  diaeresis: boolean;
}

export interface CounterState {
  correct: number;
  incorrect: number;
  total: number;
}

export type IndexWord = [number, string];

export type GameState = 'waiting' | 'correct' | 'incorrect';

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

export enum Persona {
  FIRST = '1st',
  SECOND = '2nd',
  THIRD = '3rd'
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
  gramNumber: Numerus;
  gender: Genus;
  baseTone: TonePattern;
}

export interface Verbal {
  modus: Modus;
  tempus: Tempus;
  diathesis: Diathesis;
  gramNumber: Numerus;
  persona: Persona;
}

export type NominalException = Required<Pick<NominalForm, 'case' | 'gramNumber' | 'inflectedTone' | 'inflectedForm'>>;

export interface NominalForm extends Nominal {
  baseForm: string;
  inflectedForm?: string;
  inflectedTone?: TonePattern;
  translation: string;
  exception?: NominalException[];
}

export interface Article extends NominalForm {
  type: 'article';
}

export interface Substantive extends NominalForm {
  type: 'substantive';
}

export interface VerbalForm extends Verbal {
  type: 'verbalForm';
  inflectedForm?: string;
  baseForm: string;
  translation: string;
  exception?: Partial<VerbalForm>[];
}

export type WordClass = Article | Substantive | VerbalForm;

export type Hint = Casus | Numerus | Genus | Modus | Tempus | Diathesis | Numerus | Persona;

export enum Question {
  SELECT_TONE = 'select-tone',   // Tone select buttons
  WRITE_TONE = 'write-tone',    // Toneless form provided, type input
  WRITE_WORD = 'write-word'    // Gramm. analysis provided, type input
}

export interface Answer {
  enteredForm: string;
  isCorrect: boolean;
}

export interface Assignment<T extends WordClass> {
  word: T;
  question: Question;
  finished: boolean;
}

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export enum Declension {
  FIRST_DECLENSION = '1st decl.',
  SECOND_DECLENSION = '2nd decl.',
  THIRD_DECLENSION = '3rd decl.',
}

export enum Diathesis {
  ACTIVUM = 'act.',
  MEDIUM = 'med.',
  MEDIOPASSIVUM = 'med.-pass.',
  PASSIVUM = 'pass.',
}

export enum Tempus {
  PRAESENS = 'prs.',
  IMPERFECTUM = 'ipf.',
  AORISTUS = 'aor.',
  FUTURUM = 'fut.',
  PERFECTUM = 'pf.',
  PLUSQUAMPERFECTUM = 'pl.q.pf.',
}

export enum Modus {
  INDICATIVUS = 'ind.',
  IMPERATIVUS = 'imp.',
  CONIUNCTIVUS = 'con.',
  OPTATIVUS = 'opt.',
  INFINITIVUS = 'inf.',
}
