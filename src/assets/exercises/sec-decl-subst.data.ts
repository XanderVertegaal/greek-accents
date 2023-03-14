import { Casus, Genus, NominalException, NominalForm, Numerus, PartialBy, TonePattern } from '../types';

class SecondDeclinationSubstantive implements NominalForm {
  inflectedForm?: string;
  baseForm: string;
  translation: string;
  case: Casus;
  gender: Genus;
  gramNumber: Numerus;
  inflectedTone?: TonePattern;
  baseTone: TonePattern;
  exception?: NominalException[];

  constructor(props: PartialBy<NominalForm, 'case' | 'gramNumber'>) {
    this.case = props.case || Casus.NOMINATIVE;
    this.gender = props.gender;
    this.gramNumber = props.gramNumber || Numerus.SINGULAR;
    this.baseForm = props.baseForm;
    this.baseTone = props.baseTone;
    this.translation = props.translation;
    this.exception = props.exception ?? undefined;
  }
}

export const secondDeclensionSubstantives: NominalForm[] = [
  // Masculine oxytone
  new SecondDeclinationSubstantive({
    baseForm: 'στρατος',
    translation: 'army',
    baseTone: TonePattern.OXYTONE_ACUTE,
    gender: Genus.MASCULINE
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'ἐνιαυτος',
    translation: 'year',
    baseTone: TonePattern.OXYTONE_ACUTE,
    gender: Genus.MASCULINE
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'ἀδελφος',
    translation: 'brother',
    baseTone: TonePattern.OXYTONE_ACUTE,
    gender: Genus.MASCULINE,
    exception: [{
      case: Casus.VOCATIVE,
      gramNumber: Numerus.SINGULAR,
      inflectedForm: 'ἀδελφε',
      inflectedTone: TonePattern.PROPAROXYTONE
    }]
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'χορος',
    translation: 'dance',
    baseTone: TonePattern.OXYTONE_ACUTE,
    gender: Genus.MASCULINE
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'ἰᾰτρος',
    translation: 'doctor',
    baseTone: TonePattern.OXYTONE_ACUTE,
    gender: Genus.MASCULINE
  }),

  // // Masculine paroxytone
  new SecondDeclinationSubstantive({
    baseForm: 'χρονος',
    translation: 'time',
    baseTone: TonePattern.PAROXYTONE,
    gender: Genus.MASCULINE
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'λογος',
    translation: 'word',
    baseTone: TonePattern.PAROXYTONE,
    gender: Genus.MASCULINE
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'Κᾰδμος',
    translation: 'Cadmus',
    baseTone: TonePattern.PAROXYTONE,
    gender: Genus.MASCULINE,
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'τοπος',
    translation: 'place',
    baseTone: TonePattern.PAROXYTONE,
    gender: Genus.MASCULINE
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'ἱππος',
    translation: 'horse',
    baseTone: TonePattern.PAROXYTONE,
    gender: Genus.MASCULINE,
    exception: [
      {
        case: Casus.NOMINATIVE,
        gramNumber: Numerus.PLURAL,
        inflectedTone: TonePattern.PAROXYTONE,
        inflectedForm: 'ἱπποι',
      },
      {
        case: Casus.VOCATIVE,
        gramNumber: Numerus.PLURAL,
        inflectedTone: TonePattern.PAROXYTONE,
        inflectedForm: 'ἱπποι',
      }
    ]
  }),

  // Paroxytone (contracts)
  new SecondDeclinationSubstantive({
    baseForm: 'περῐπλους',
    translation: 'sailing around',
    baseTone: TonePattern.PAROXYTONE,
    gender: Genus.MASCULINE
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'κατᾰρρους',
    translation: 'downstream',
    baseTone: TonePattern.PAROXYTONE,
    gender: Genus.MASCULINE
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'ἐκπλους',
    translation: 'sailing away',
    baseTone: TonePattern.PAROXYTONE,
    gender: Genus.MASCULINE
  }),

  // Masculine proparoxytone
  new SecondDeclinationSubstantive({
    baseForm: 'ἡλιος',
    translation: 'sun',
    baseTone: TonePattern.PROPAROXYTONE,
    gender: Genus.MASCULINE
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'ἀγγελος',
    translation: 'messenger',
    baseTone: TonePattern.PROPAROXYTONE,
    gender: Genus.MASCULINE
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'ἀνθρωπος',
    translation: 'human',
    baseTone: TonePattern.PROPAROXYTONE,
    gender: Genus.MASCULINE
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'πολεμος',
    translation: 'war',
    baseTone: TonePattern.PROPAROXYTONE,
    gender: Genus.MASCULINE
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'θανατος',
    translation: 'death',
    baseTone: TonePattern.PROPAROXYTONE,
    gender: Genus.MASCULINE
  }),

  // // Perispomenon (contracts)
  new SecondDeclinationSubstantive({
    baseForm: 'νους',
    translation: 'mind',
    baseTone: TonePattern.PERISPOMENON,
    gender: Genus.MASCULINE
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'πλους',
    translation: 'sailing',
    baseTone: TonePattern.PERISPOMENON,
    gender: Genus.MASCULINE
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'ῥους',
    translation: 'stream',
    baseTone: TonePattern.PERISPOMENON,
    gender: Genus.MASCULINE
  }),

  // Masculine properispomenon
  new SecondDeclinationSubstantive({
    baseForm: 'Φοιβος',
    translation: 'Phoebus',
    baseTone: TonePattern.PROPERISPOMENON,
    gender: Genus.MASCULINE
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'μυθος',
    translation: 'myth',
    baseTone: TonePattern.PROPERISPOMENON,
    gender: Genus.MASCULINE
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'Δαρειος',
    translation: 'Darius',
    baseTone: TonePattern.PROPERISPOMENON,
    gender: Genus.MASCULINE
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'ἑταιρος',
    translation: 'companion',
    baseTone: TonePattern.PROPERISPOMENON,
    gender: Genus.MASCULINE
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'οἰνος',
    translation: 'wine',
    baseTone: TonePattern.PROPERISPOMENON,
    gender: Genus.MASCULINE
  }),

  // Neuter oxytone
  new SecondDeclinationSubstantive({
    baseForm: 'ᾠον',
    translation: 'egg',
    baseTone: TonePattern.OXYTONE_ACUTE,
    gender: Genus.NEUTER
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'ζυγον',
    translation: 'yoke',
    baseTone: TonePattern.OXYTONE_ACUTE,
    gender: Genus.NEUTER
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'πλευρον',
    translation: 'side',
    baseTone: TonePattern.OXYTONE_ACUTE,
    gender: Genus.NEUTER
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'πτερον',
    translation: 'wing',
    baseTone: TonePattern.OXYTONE_ACUTE,
    gender: Genus.NEUTER
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'σφυρον',
    translation: 'ankle',
    baseTone: TonePattern.OXYTONE_ACUTE,
    gender: Genus.NEUTER
  }),

  // Neuter paroxytone
  new SecondDeclinationSubstantive({
    baseForm: 'ἐργον',
    translation: 'work',
    baseTone: TonePattern.PAROXYTONE,
    gender: Genus.NEUTER
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'παιδιον',
    translation: 'child',
    baseTone: TonePattern.PAROXYTONE,
    gender: Genus.NEUTER
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'ὁπλον',
    translation: 'weapon',
    baseTone: TonePattern.PAROXYTONE,
    gender: Genus.NEUTER
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'ὀστεον',
    translation: 'bone',
    baseTone: TonePattern.PAROXYTONE,
    gender: Genus.NEUTER
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'κρουνιον',
    translation: 'spring',
    baseTone: TonePattern.PAROXYTONE,
    gender: Genus.NEUTER
  }),

  // Neuter proparoxytone
  new SecondDeclinationSubstantive({
    baseForm: 'ὁριον',
    translation: 'boundary',
    baseTone: TonePattern.PROPAROXYTONE,
    gender: Genus.NEUTER
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'ῥοπαλον',
    translation: 'club',
    baseTone: TonePattern.PROPAROXYTONE,
    gender: Genus.NEUTER
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'πεδιλον',
    translation: 'shoe',
    baseTone: TonePattern.PROPAROXYTONE,
    gender: Genus.NEUTER
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'εἰδωλον',
    translation: 'idol',
    baseTone: TonePattern.PROPAROXYTONE,
    gender: Genus.NEUTER
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'γυμνασιον',
    translation: 'gymnasium',
    baseTone: TonePattern.PROPAROXYTONE,
    gender: Genus.NEUTER
  }),

  // Neuter perispomenon (contracts)
  new SecondDeclinationSubstantive({
    baseForm: 'ὀστουν',
    translation: 'bone',
    baseTone: TonePattern.PERISPOMENON,
    gender: Genus.NEUTER
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'κανουν',
    translation: 'basket',
    baseTone: TonePattern.PERISPOMENON,
    gender: Genus.NEUTER
  }),

  // Neuter properispomenon
  new SecondDeclinationSubstantive({
    baseForm: 'δωρον',
    translation: 'gift',
    baseTone: TonePattern.PROPERISPOMENON,
    gender: Genus.NEUTER
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'σημειον',
    translation: 'sign',
    baseTone: TonePattern.PROPERISPOMENON,
    gender: Genus.NEUTER
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'διδασκαλειον',
    translation: 'school',
    baseTone: TonePattern.PROPERISPOMENON,
    gender: Genus.NEUTER
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'Λητῳον',
    translation: 'sanctuary of Leto',
    baseTone: TonePattern.PROPERISPOMENON,
    gender: Genus.NEUTER
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'πληκτρον',
    translation: 'plectrum',
    baseTone: TonePattern.PROPERISPOMENON,
    gender: Genus.NEUTER
  }),

  // Attic declension
  new SecondDeclinationSubstantive({
    baseForm: 'λεως',
    translation: 'people',
    baseTone: TonePattern.OXYTONE_ACUTE,
    gender: Genus.MASCULINE
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'νεως',
    translation: 'temple',
    baseTone: TonePattern.OXYTONE_ACUTE,
    gender: Genus.MASCULINE
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'Μενελεως',
    translation: 'Menelaus',
    baseTone: TonePattern.PROPAROXYTONE,
    gender: Genus.MASCULINE
  }),

  new SecondDeclinationSubstantive({
    baseForm: 'προνεως',
    translation: 'portico',
    baseTone: TonePattern.PROPAROXYTONE,
    gender: Genus.MASCULINE
  })
];
