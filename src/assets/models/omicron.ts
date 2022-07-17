import { Aspiration, Character, Tone, Vowel } from '../types';


export const omicron: Character[] = [
  {
    glyph: 'Ὃ',
    props: {
      vowel: Vowel.OMICRON,
      uppercase: true,
      subscripted: false,
      aspiration: Aspiration.ASPER,
      tone: Tone.GRAVE,
      diaeresis: false,
    },
  },
  {
    glyph: 'Ὅ',
    props: {
      vowel: Vowel.OMICRON,
      uppercase: true,
      subscripted: false,
      aspiration: Aspiration.ASPER,
      tone: Tone.ACUTE,
      diaeresis: false,
    },
  },
  {
    glyph: 'Ὂ',
    props: {
      vowel: Vowel.OMICRON,
      uppercase: true,
      subscripted: false,
      aspiration: Aspiration.LENIS,
      tone: Tone.GRAVE,
      diaeresis: false,
    },
  },
  {
    glyph: 'Ὄ',
    props: {
      vowel: Vowel.OMICRON,
      uppercase: true,
      subscripted: false,
      aspiration: Aspiration.LENIS,
      tone: Tone.ACUTE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ὃ',
    props: {
      vowel: Vowel.OMICRON,
      uppercase: false,
      subscripted: false,
      aspiration: Aspiration.ASPER,
      tone: Tone.GRAVE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ὅ',
    props: {
      vowel: Vowel.OMICRON,
      uppercase: false,
      subscripted: false,
      aspiration: Aspiration.ASPER,
      tone: Tone.ACUTE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ὂ',
    props: {
      vowel: Vowel.OMICRON,
      uppercase: false,
      subscripted: false,
      aspiration: Aspiration.LENIS,
      tone: Tone.GRAVE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ὄ',
    props: {
      vowel: Vowel.OMICRON,
      uppercase: false,
      subscripted: false,
      aspiration: Aspiration.LENIS,
      tone: Tone.ACUTE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ὸ',
    props: {
      vowel: Vowel.OMICRON,
      uppercase: false,
      subscripted: false,
      aspiration: Aspiration.NONE,
      tone: Tone.GRAVE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ό',
    props: {
      vowel: Vowel.OMICRON,
      uppercase: false,
      subscripted: false,
      aspiration: Aspiration.NONE,
      tone: Tone.ACUTE,
      diaeresis: false,
    },
  },
];

export const omicronToneless: Character[] = [
  {
    glyph: 'Ὁ',
    props: {
      vowel: Vowel.OMICRON,
      uppercase: true,
      subscripted: false,
      aspiration: Aspiration.ASPER,
      tone: Tone.NONE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ὁ',
    props: {
      vowel: Vowel.OMICRON,
      uppercase: false,
      subscripted: false,
      aspiration: Aspiration.ASPER,
      tone: Tone.NONE,
      diaeresis: false
    }
  },
  {
    glyph: 'Ὀ',
    props: {
      vowel: Vowel.OMICRON,
      uppercase: true,
      subscripted: false,
      aspiration: Aspiration.LENIS,
      tone: Tone.NONE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ὀ',
    props: {
      vowel: Vowel.OMICRON,
      uppercase: false,
      subscripted: false,
      aspiration: Aspiration.LENIS,
      tone: Tone.NONE,
      diaeresis: false
    }
  },{
    glyph: 'Ο',
    props: {
      vowel: Vowel.OMICRON,
      uppercase: true,
      subscripted: false,
      aspiration: Aspiration.NONE,
      tone: Tone.NONE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ο',
    props: {
      vowel: Vowel.OMICRON,
      uppercase: false,
      subscripted: false,
      aspiration: Aspiration.NONE,
      tone: Tone.NONE,
      diaeresis: false
    }
  },
];
