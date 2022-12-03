import { Casus, Genus, Numerus, Question, TonePattern } from 'src/assets/types';
import { Mistake } from '../services/mistake.service';

export const mockMistakes: Mistake[] = [
  {
      assignment: {
          finished: true,
          question: Question.WRITE_TONE,
          word: {
              type: 'substantive',
              inflectedForm: 'πολίταις',
              baseForm: 'πολῑτης',
              baseTone: TonePattern.PAROXYTONE,
              case: Casus.DATIVE,
              gender: Genus.MASCULINE,
              gramNumber: Numerus.PLURAL,
              inflectedTone: TonePattern.PAROXYTONE,
              translation: 'citizen'
          }
      },
      incorrectInput: 'πολιτος'
  },
  {
      assignment: {
          finished: true,
          question: Question.SELECT_TONE,
          word: {
              type: 'substantive',
              inflectedForm: 'οἰκίαν',
              baseForm: 'οἰκῐα',
              baseTone: TonePattern.PAROXYTONE,
              case: Casus.ACCUSATIVE,
              gender: Genus.FEMININE,
              gramNumber: Numerus.SINGULAR,
              inflectedTone: TonePattern.PAROXYTONE,
              translation: 'house'
          }
      },
      incorrectInput: 'οἰκίαν'
  },
  {
      assignment: {
          finished: true,
          question: Question.SELECT_TONE,
          word: {
              type: 'substantive',
              inflectedForm: 'ἀρχά',
              baseForm: 'ἀρχη',
              baseTone: TonePattern.OXYTONE_ACUTE,
              case: Casus.ACCUSATIVE,
              gender: Genus.FEMININE,
              gramNumber: Numerus.DUAL,
              inflectedTone: TonePattern.OXYTONE_ACUTE,
              translation: 'beginning'
          }
      },
      incorrectInput: 'ἀρχᾶ'
  },
  {
      assignment: {
          finished: true,
          question: Question.WRITE_WORD,
          word: {
              type: 'substantive',
              inflectedForm: 'Μούσα',
              baseForm: 'Μουσα',
              baseTone: TonePattern.PROPERISPOMENON,
              case: Casus.ACCUSATIVE,
              gender: Genus.FEMININE,
              gramNumber: Numerus.DUAL,
              inflectedTone: TonePattern.PAROXYTONE,
              translation: 'Muse'
          }
      },
      incorrectInput: 'φ'
  },
  {
      assignment: {
          finished: true,
          question: Question.SELECT_TONE,
          word: {
              type: 'substantive',
              inflectedForm: 'ἀρχά',
              baseForm: 'ἀρχη',
              baseTone: TonePattern.OXYTONE_ACUTE,
              case: Casus.ACCUSATIVE,
              gender: Genus.FEMININE,
              gramNumber: Numerus.DUAL,
              inflectedTone: TonePattern.OXYTONE_ACUTE,
              translation: 'beginning'
          }
      },
      incorrectInput: 'ἀρχά'
  }
];
