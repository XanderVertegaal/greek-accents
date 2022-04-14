import { Aspiration, Character, Tone, Vowel } from '../types';

export const epsilon: Character[] = [
  {
    glyph: 'Ἓ',
    props: {
      vowel: Vowel.EPSILON,
      uppercase: true,
      subscripted: false,
      aspirated: Aspiration.ASPER,
      tone: Tone.GRAVE,
      diaeresis: false,
    },
  },
  {
    glyph: 'Ἕ',
    props: {
      vowel: Vowel.EPSILON,
      uppercase: true,
      subscripted: false,
      aspirated: Aspiration.ASPER,
      tone: Tone.ACUTE,
      diaeresis: false,
    },
  },
  {
    glyph: 'Ἒ',
    props: {
      vowel: Vowel.EPSILON,
      uppercase: true,
      subscripted: false,
      aspirated: Aspiration.LENIS,
      tone: Tone.GRAVE,
      diaeresis: false,
    },
  },
  {
    glyph: 'Ἔ',
    props: {
      vowel: Vowel.EPSILON,
      uppercase: true,
      subscripted: false,
      aspirated: Aspiration.LENIS,
      tone: Tone.ACUTE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ἓ',
    props: {
      vowel: Vowel.EPSILON,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.ASPER,
      tone: Tone.GRAVE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ἕ',
    props: {
      vowel: Vowel.EPSILON,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.ASPER,
      tone: Tone.ACUTE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ἒ',
    props: {
      vowel: Vowel.EPSILON,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.LENIS,
      tone: Tone.GRAVE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ἔ',
    props: {
      vowel: Vowel.EPSILON,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.LENIS,
      tone: Tone.ACUTE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ὲ',
    props: {
      vowel: Vowel.EPSILON,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.NONE,
      tone: Tone.GRAVE,
      diaeresis: false,
    },
  },
  {
    glyph: 'έ',
    props: {
      vowel: Vowel.EPSILON,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.NONE,
      tone: Tone.ACUTE,
      diaeresis: false,
    },
  },
];

export const epsilonToneless: Character[] = [
  {
    glyph: 'Ἑ',
    props: {
      vowel: Vowel.EPSILON,
      uppercase: true,
      subscripted: false,
      aspirated: Aspiration.ASPER,
      tone: Tone.NONE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ἑ',
    props: {
      vowel: Vowel.EPSILON,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.ASPER,
      tone: Tone.NONE,
      diaeresis: false
    }
  },
  {
    glyph: 'Ἐ',
    props: {
      vowel: Vowel.EPSILON,
      uppercase: true,
      subscripted: false,
      aspirated: Aspiration.LENIS,
      tone: Tone.NONE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ἐ',
    props: {
      vowel: Vowel.EPSILON,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.LENIS,
      tone: Tone.NONE,
      diaeresis: false
    }
  },{
    glyph: 'Ε',
    props: {
      vowel: Vowel.EPSILON,
      uppercase: true,
      subscripted: false,
      aspirated: Aspiration.NONE,
      tone: Tone.NONE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ε',
    props: {
      vowel: Vowel.EPSILON,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.NONE,
      tone: Tone.NONE,
      diaeresis: false
    }
  },
];