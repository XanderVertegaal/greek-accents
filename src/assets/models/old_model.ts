interface Character {
  upper: Aspiration;
  lower: Aspiration;
}

interface Aspiration {
  aspirated: Subscript;
  unaspirated: Subscript;
}

interface Subscript {
  subscripted: Tone;
  unsubscripted: Tone;
}

interface Tone {
  barytone: string;
  oxytone: string;
  perispomenon: string;
}

export const chars: Character[] = [
  {
    upper: {
      aspirated: {
        subscripted: {
          barytone: 'ᾋ',
          oxytone: 'ᾍ',
          perispomenon: 'ᾏ',
        },
        unsubscripted: {
          barytone: 'Ἃ',
          oxytone: 'Ἅ',
          perispomenon: 'Ἇ',
        },
      },
      unaspirated: {
        subscripted: {
          barytone: 'ᾊ',
          oxytone: 'ᾌ',
          perispomenon: 'ᾎ',
        },
        unsubscripted: {
          barytone: 'Ἂ',
          oxytone: 'Ἄ',
          perispomenon: 'ἆ',
        },
      },
    },
    lower: {
      aspirated: {
        subscripted: {
          barytone: 'ᾃ',
          oxytone: 'ᾅ',
          perispomenon: 'ᾇ',
        },
        unsubscripted: {
          barytone: 'ἃ',
          oxytone: 'ἅ',
          perispomenon: 'ἇ',
        },
      },
      unaspirated: {
        subscripted: {
          barytone: 'ᾂ',
          oxytone: 'ᾄ',
          perispomenon: 'ᾆ',
        },
        unsubscripted: {
          barytone: 'ἂ',
          oxytone: 'ἄ',
          perispomenon: 'ἆ',
        },
      },
    },
  },
];
