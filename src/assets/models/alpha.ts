import { Aspiration, Character, Tone, Vowel } from '../types';

export const alphaLongShort: string[] = ['ᾱ', 'ᾰ', 'Ᾱ', 'Ᾰ'];

export const alpha: Character[] = [
  {
    glyph: 'ᾋ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: true,
      subscripted: true,
      aspiration: Aspiration.ASPER,
      tone: Tone.GRAVE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ᾍ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: true,
      subscripted: true,
      aspiration: Aspiration.ASPER,
      tone: Tone.ACUTE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ᾏ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: true,
      subscripted: true,
      aspiration: Aspiration.ASPER,
      tone: Tone.CIRCUMFLEX,
      diaeresis: false,
    },
  },
  {
    glyph: 'Ἃ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: true,
      subscripted: false,
      aspiration: Aspiration.ASPER,
      tone: Tone.GRAVE,
      diaeresis: false
    }
  },
  {
    glyph: 'Ἅ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: true,
      subscripted: false,
      aspiration: Aspiration.ASPER,
      tone: Tone.ACUTE,
      diaeresis: false
    }
  },
  {
    glyph: 'Ἇ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: true,
      subscripted: false,
      aspiration: Aspiration.ASPER,
      tone: Tone.CIRCUMFLEX,
      diaeresis: false
    }
  },
  {
    glyph: 'ᾊ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: true,
      subscripted: true,
      aspiration: Aspiration.LENIS,
      tone: Tone.GRAVE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ᾌ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: true,
      subscripted: true,
      aspiration: Aspiration.LENIS,
      tone: Tone.ACUTE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ᾎ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: true,
      subscripted: true,
      aspiration: Aspiration.LENIS,
      tone: Tone.CIRCUMFLEX,
      diaeresis: false,
    },
  },
  {
    glyph: 'Ἂ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: true,
      subscripted: false,
      aspiration: Aspiration.LENIS,
      tone: Tone.GRAVE,
      diaeresis: false,
    }
  },
  {
    glyph: 'Ἄ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: true,
      subscripted: false,
      aspiration: Aspiration.LENIS,
      tone: Tone.ACUTE,
      diaeresis: false,
    }
  },
  {
    glyph: 'Ἆ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: true,
      subscripted: false,
      aspiration: Aspiration.LENIS,
      tone: Tone.CIRCUMFLEX,
      diaeresis: false,
    }
  },
  {
    glyph: 'ᾃ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: false,
      subscripted: true,
      aspiration: Aspiration.ASPER,
      tone: Tone.GRAVE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ᾅ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: false,
      subscripted: true,
      aspiration: Aspiration.ASPER,
      tone: Tone.ACUTE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ᾇ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: false,
      subscripted: true,
      aspiration: Aspiration.ASPER,
      tone: Tone.CIRCUMFLEX,
      diaeresis: false,
    },
  },
  {
    glyph: 'ἃ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: false,
      subscripted: false,
      aspiration: Aspiration.ASPER,
      tone: Tone.GRAVE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ἅ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: false,
      subscripted: false,
      aspiration: Aspiration.ASPER,
      tone: Tone.ACUTE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ἇ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: false,
      subscripted: false,
      aspiration: Aspiration.ASPER,
      tone: Tone.CIRCUMFLEX,
      diaeresis: false,
    },
  },
  {
    glyph: 'ᾂ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: false,
      subscripted: true,
      aspiration: Aspiration.LENIS,
      tone: Tone.GRAVE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ᾄ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: false,
      subscripted: true,
      aspiration: Aspiration.LENIS,
      tone: Tone.ACUTE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ᾆ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: false,
      subscripted: true,
      aspiration: Aspiration.LENIS,
      tone: Tone.CIRCUMFLEX,
      diaeresis: false,
    },
  },
  {
    glyph: 'ἂ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: false,
      subscripted: false,
      aspiration: Aspiration.LENIS,
      tone: Tone.GRAVE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ἄ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: false,
      subscripted: false,
      aspiration: Aspiration.LENIS,
      tone: Tone.ACUTE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ἆ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: false,
      subscripted: false,
      aspiration: Aspiration.LENIS,
      tone: Tone.CIRCUMFLEX,
      diaeresis: false,
    },
  },
  {
    glyph: 'ᾲ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: false,
      subscripted: true,
      aspiration: Aspiration.NONE,
      tone: Tone.GRAVE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ᾴ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: false,
      subscripted: true,
      aspiration: Aspiration.NONE,
      tone: Tone.ACUTE,
      diaeresis: false,
    },
  },
  {
    glyph: 'ᾷ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: false,
      subscripted: true,
      aspiration: Aspiration.NONE,
      tone: Tone.CIRCUMFLEX,
      diaeresis: false,
    },
  },
  {
    glyph: 'ὰ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: false,
      subscripted: false,
      aspiration: Aspiration.NONE,
      tone: Tone.GRAVE,
      diaeresis: false
    }
  },
  {
    glyph: 'ά',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: false,
      subscripted: false,
      aspiration: Aspiration.NONE,
      tone: Tone.ACUTE,
      diaeresis: false
    }
  },
  {
    glyph: 'ᾶ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: false,
      subscripted: false,
      aspiration: Aspiration.NONE,
      tone: Tone.CIRCUMFLEX,
      diaeresis: false
    }
  },
];

export const alphaToneless: Character[] = [
  {
    glyph: 'ᾉ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: true,
      subscripted: true,
      aspiration: Aspiration.ASPER,
      tone: Tone.NONE,
      diaeresis: false
    }
  },
  {
    glyph: 'Ἁ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: true,
      subscripted: false,
      aspiration: Aspiration.ASPER,
      tone: Tone.NONE,
      diaeresis: false
    }
  },
  {
    glyph: 'ᾁ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: false,
      subscripted: true,
      aspiration: Aspiration.ASPER,
      tone: Tone.NONE,
      diaeresis: false
    }
  },
  {
    glyph: 'ἁ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: false,
      subscripted: false,
      aspiration: Aspiration.ASPER,
      tone: Tone.NONE,
      diaeresis: false
    }
  },

  {
    glyph: 'ᾈ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: true,
      subscripted: true,
      aspiration: Aspiration.LENIS,
      tone: Tone.NONE,
      diaeresis: false
    }
  },
  {
    glyph: 'Ἀ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: true,
      subscripted: false,
      aspiration: Aspiration.LENIS,
      tone: Tone.NONE,
      diaeresis: false
    }
  },
  {
    glyph: 'ᾀ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: false,
      subscripted: true,
      aspiration: Aspiration.LENIS,
      tone: Tone.NONE,
      diaeresis: false
    }
  },
  {
    glyph: 'ἀ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: false,
      subscripted: false,
      aspiration: Aspiration.LENIS,
      tone: Tone.NONE,
      diaeresis: false
    }
  },
  {
    glyph: 'ᾼ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: true,
      subscripted: true,
      aspiration: Aspiration.NONE,
      tone: Tone.NONE,
      diaeresis: false
    }
  },
  {
    glyph: 'Α',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: true,
      subscripted: false,
      aspiration: Aspiration.NONE,
      tone: Tone.NONE,
      diaeresis: false
    }
  },
  {
    glyph: 'ᾳ',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: false,
      subscripted: true,
      aspiration: Aspiration.NONE,
      tone: Tone.NONE,
      diaeresis: false
    }
  },
  {
    glyph: 'α',
    props: {
      vowel: Vowel.ALPHA,
      uppercase: false,
      subscripted: false,
      aspiration: Aspiration.NONE,
      tone: Tone.NONE,
      diaeresis: false
    }
  },
];
