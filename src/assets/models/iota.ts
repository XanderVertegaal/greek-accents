import { Aspiration, Character, Tone, Vowel } from "./types";

export const iota: Character[] = [
  {
    glyph: 'Ἳ',
    props: {
      vowel: Vowel.IOTA,
      uppercase: true,
      subscripted: false,
      aspirated: Aspiration.ASPER,
      tone: Tone.GRAVE,
      diaeresis: false,
    },
  },
  {
    glyph: 'Ἵ',
    props: {
      vowel: Vowel.IOTA,
      uppercase: true,
      subscripted: false,
      aspirated: Aspiration.ASPER,
      tone: Tone.ACUTE,
      diaeresis: false,
    },
  },
  {
    glyph: 'Ἷ',
    props: {
      vowel: Vowel.IOTA,
      uppercase: true,
      subscripted: false,
      aspirated: Aspiration.ASPER,
      tone: Tone.CIRCUMFLEX,
      diaeresis: false,
    },
  },
  {
    glyph: 'Ἲ',
    props: {
      vowel: Vowel.IOTA,
      uppercase: true,
      subscripted: false,
      aspirated: Aspiration.LENIS,
      tone: Tone.GRAVE,
      diaeresis: false,
    },
  },
  {
    glyph: 'Ἴ',
    props: {
      vowel: Vowel.IOTA,
      uppercase: true,
      subscripted: false,
      aspirated: Aspiration.LENIS,
      tone: Tone.ACUTE,
      diaeresis: false,
    },
  },
  {
    glyph: 'Ἶ',
    props: {
      vowel: Vowel.IOTA,
      uppercase: true,
      subscripted: false,
      aspirated: Aspiration.LENIS,
      tone: Tone.CIRCUMFLEX,
      diaeresis: false,
    },
  },
  {
    glyph: 'ἳ',
    props: {
      vowel: Vowel.IOTA,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.ASPER,
      tone: Tone.GRAVE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ἵ',
    props: {
      vowel: Vowel.IOTA,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.ASPER,
      tone: Tone.ACUTE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ἷ',
    props: {
      vowel: Vowel.IOTA,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.ASPER,
      tone: Tone.CIRCUMFLEX,
      diaeresis: false,
    },
  },
  {
    glyph: 'ἲ',
    props: {
      vowel: Vowel.IOTA,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.LENIS,
      tone: Tone.GRAVE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ἴ',
    props: {
      vowel: Vowel.IOTA,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.LENIS,
      tone: Tone.ACUTE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ἶ',
    props: {
      vowel: Vowel.IOTA,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.LENIS,
      tone: Tone.CIRCUMFLEX,
      diaeresis: false,
    },
  },
  {
    glyph: 'ὶ',
    props: {
      vowel: Vowel.IOTA,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.NONE,
      tone: Tone.GRAVE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ί',
    props: {
      vowel: Vowel.IOTA,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.NONE,
      tone: Tone.ACUTE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ῖ',
    props: {
      vowel: Vowel.IOTA,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.NONE,
      tone: Tone.CIRCUMFLEX,
      diaeresis: false,
    },
  },
  {
    glyph: 'ῒ',
    props: {
      vowel: Vowel.IOTA,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.NONE,
      tone: Tone.GRAVE,
      diaeresis: true,
    },
  },
  {
    glyph: 'ΐ',
    props: {
      vowel: Vowel.IOTA,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.NONE,
      tone: Tone.ACUTE,
      diaeresis: true,
    },
  },
  {
    glyph: 'ῗ',
    props: {
      vowel: Vowel.IOTA,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.NONE,
      tone: Tone.CIRCUMFLEX,
      diaeresis: true,
    },
  },
];
 
export const iotaToneless: Character[] = [
  {
    glyph: 'Ἱ',
    props: {
      vowel: Vowel.IOTA,
      uppercase: true,
      subscripted: false,
      aspirated: Aspiration.ASPER,
      tone: Tone.NONE,
      diaeresis: false
    }
  },
  {
    glyph: 'ἱ',
    props: {
      vowel: Vowel.IOTA,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.ASPER,
      tone: Tone.NONE,
      diaeresis: false
    }
  },
  {
    glyph: 'Ἰ',
    props: {
      vowel: Vowel.IOTA,
      uppercase: true,
      subscripted: false,
      aspirated: Aspiration.LENIS,
      tone: Tone.NONE,
      diaeresis: false
    }
  },
  {
    glyph: 'ἰ',
    props: {
      vowel: Vowel.IOTA,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.LENIS,
      tone: Tone.NONE,
      diaeresis: false
    }
  },
  {
    glyph: 'Ι',
    props: {
      vowel: Vowel.IOTA,
      uppercase: true,
      subscripted: false,
      aspirated: Aspiration.NONE,
      tone: Tone.NONE,
      diaeresis: false
    }
  },
  {
    glyph: 'ϊ',
    props: {
      vowel: Vowel.IOTA,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.NONE,
      tone: Tone.NONE,
      diaeresis: true
    }
  },
  {
    glyph: 'ι',
    props: {
      vowel: Vowel.IOTA,
      uppercase: false,
      subscripted: false,
      aspirated: Aspiration.NONE,
      tone: Tone.NONE,
      diaeresis: false
    }
  }
];
