import { Aspiration, Character, Tone, Vowel } from "./types";

export const upsilon: Character[] = [
  {
    glyph: 'Ὓ',
    props: {
      vowel: Vowel.UPSILON,
      uppercase: true,
      subscripted: false,
      aspirated: Aspiration.ASPER,
      tone: Tone.GRAVE,
      diaeresis: false,
    },
  },
  {
    glyph: 'Ὕ',
    props: {
      vowel: Vowel.UPSILON,
      uppercase: true,
      subscripted: false,
      aspirated: Aspiration.ASPER,
      tone: Tone.ACUTE,
      diaeresis: false,
    },
  },
  {
    glyph: 'Ὗ',
    props: {
      vowel: Vowel.UPSILON,
      uppercase: true,
      subscripted: false,
      aspirated: Aspiration.ASPER,
      tone: Tone.CIRCUMFLEX,
      diaeresis: false,
    },
  },
  {
    glyph: 'ὓ',
    props: {
      vowel: Vowel.UPSILON,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.ASPER,
      tone: Tone.GRAVE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ὕ',
    props: {
      vowel: Vowel.UPSILON,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.ASPER,
      tone: Tone.ACUTE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ὗ',
    props: {
      vowel: Vowel.UPSILON,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.ASPER,
      tone: Tone.CIRCUMFLEX,
      diaeresis: false,
    },
  },
  {
    glyph: 'ὒ',
    props: {
      vowel: Vowel.UPSILON,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.LENIS,
      tone: Tone.GRAVE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ὔ',
    props: {
      vowel: Vowel.UPSILON,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.LENIS,
      tone: Tone.ACUTE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ὖ',
    props: {
      vowel: Vowel.UPSILON,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.LENIS,
      tone: Tone.CIRCUMFLEX,
      diaeresis: false,
    },
  },
  {
    glyph: 'ὺ',
    props: {
      vowel: Vowel.UPSILON,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.NONE,
      tone: Tone.GRAVE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ύ',
    props: {
      vowel: Vowel.UPSILON,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.NONE,
      tone: Tone.ACUTE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ῦ',
    props: {
      vowel: Vowel.UPSILON,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.NONE,
      tone: Tone.CIRCUMFLEX,
      diaeresis: false,
    },
  },
  {
    glyph: 'ῢ',
    props: {
      vowel: Vowel.UPSILON,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.NONE,
      tone: Tone.GRAVE,
      diaeresis: true,
    },
  },
  {
    glyph: 'ΰ',
    props: {
      vowel: Vowel.UPSILON,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.NONE,
      tone: Tone.ACUTE,
      diaeresis: true,
    },
  },
  {
    glyph: 'ῧ',
    props: {
      vowel: Vowel.UPSILON,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.NONE,
      tone: Tone.CIRCUMFLEX,
      diaeresis: true,
    },
  },
];

export const upsilonToneless: Character[] = [
  {
    glyph: 'Ὑ',
    props: {
      vowel: Vowel.UPSILON,
      uppercase: true,
      subscripted: false,
      aspirated: Aspiration.ASPER,
      tone: Tone.NONE,
      diaeresis: false
    }
  },
  {
    glyph: 'ὑ',
    props: {
      vowel: Vowel.UPSILON,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.ASPER,
      tone: Tone.NONE,
      diaeresis: false
    }
  },
  {
    glyph: 'ὐ',
    props: {
      vowel: Vowel.UPSILON,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.LENIS,
      tone: Tone.NONE,
      diaeresis: false
    }
  },
  {
    glyph: 'Υ',
    props: {
      vowel: Vowel.UPSILON,
      uppercase: true,
      subscripted: false,
      aspirated: Aspiration.NONE,
      tone: Tone.NONE,
      diaeresis: false
    }
  },
  {
    glyph: 'ϋ',
    props: {
      vowel: Vowel.UPSILON,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.NONE,
      tone: Tone.NONE,
      diaeresis: true
    }
  },
  {
    glyph: 'υ',
    props: {
      vowel: Vowel.UPSILON,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.NONE,
      tone: Tone.NONE,
      diaeresis: false
    }
  }
];
