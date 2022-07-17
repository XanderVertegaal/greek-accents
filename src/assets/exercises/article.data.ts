import { Article, Casus, Genus, Numerus, TonePattern } from '../types';

export const articles: Article[] = [
    {
        form: 'ἡ',
        case: Casus.NOMINATIVE,
        gramNumber: Numerus.SINGULAR,
        gender: Genus.FEMININE,
        tone: TonePattern.TONELESS
    },
    {
        form: 'της',
        case: Casus.GENITIVE,
        gramNumber: Numerus.SINGULAR,
        gender: Genus.FEMININE,
        tone: TonePattern.PERISPOMENON
    },
    {
        form: 'τῃ',
        case: Casus.DATIVE,
        gramNumber: Numerus.SINGULAR,
        gender: Genus.FEMININE,
        tone: TonePattern.PERISPOMENON
    },
    {
        form: 'την',
        case: Casus.ACCUSATIVE,
        gramNumber: Numerus.SINGULAR,
        gender: Genus.FEMININE,
        tone: TonePattern.OXYTONE_ACUTE
    },
    {
        form: 'ὁ',
        case: Casus.NOMINATIVE,
        gramNumber: Numerus.SINGULAR,
        gender: Genus.MASCULINE,
        tone: TonePattern.TONELESS
    },
    {
        form: 'του',
        case: Casus.GENITIVE,
        gramNumber: Numerus.SINGULAR,
        gender: Genus.MASCULINE,
        tone: TonePattern.PERISPOMENON
    },
    {
        form: 'τῳ',
        case: Casus.DATIVE,
        gramNumber: Numerus.SINGULAR,
        gender: Genus.MASCULINE,
        tone: TonePattern.PERISPOMENON
    },
    {
        form: 'τον',
        case: Casus.ACCUSATIVE,
        gramNumber: Numerus.SINGULAR,
        gender: Genus.MASCULINE,
        tone: TonePattern.OXYTONE_ACUTE
    },
    {
        form: 'το',
        case: Casus.NOMINATIVE,
        gramNumber: Numerus.SINGULAR,
        gender: Genus.NEUTER,
        tone: TonePattern.OXYTONE_ACUTE
    },
    {
        form: 'το',
        case: Casus.ACCUSATIVE,
        gramNumber: Numerus.SINGULAR,
        gender: Genus.NEUTER,
        tone: TonePattern.OXYTONE_ACUTE
    },
    {
        form: 'τω',
        case: Casus.NOMINATIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.MASCULINE,
        tone: TonePattern.OXYTONE_ACUTE
    },
    {
        form: 'τω',
        case: Casus.ACCUSATIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.MASCULINE,
        tone: TonePattern.OXYTONE_ACUTE
    },
    {
        form: 'τω',
        case: Casus.NOMINATIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.FEMININE,
        tone: TonePattern.OXYTONE_ACUTE
    },
    {
        form: 'τω',
        case: Casus.ACCUSATIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.FEMININE,
        tone: TonePattern.OXYTONE_ACUTE
    },
    {
        form: 'τω',
        case: Casus.NOMINATIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.NEUTER,
        tone: TonePattern.OXYTONE_ACUTE
    },
    {
        form: 'τω',
        case: Casus.ACCUSATIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.NEUTER,
        tone: TonePattern.OXYTONE_ACUTE
    },
    {
        form: 'τοιν',
        case: Casus.GENITIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.MASCULINE,
        tone: TonePattern.PERISPOMENON
    },
    {
        form: 'τοιν',
        case: Casus.DATIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.MASCULINE,
        tone: TonePattern.PERISPOMENON
    },
    {
        form: 'ταιν',
        case: Casus.GENITIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.FEMININE,
        tone: TonePattern.PERISPOMENON
    },
    {
        form: 'ταιν',
        case: Casus.DATIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.FEMININE,
        tone: TonePattern.PERISPOMENON
    },
    {
        form: 'τοιν',
        case: Casus.GENITIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.NEUTER,
        tone: TonePattern.PERISPOMENON
    },
    {
        form: 'τοιν',
        case: Casus.DATIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.NEUTER,
        tone: TonePattern.PERISPOMENON
    },
    {
        form: 'αἱ',
        case: Casus.NOMINATIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.FEMININE,
        tone: TonePattern.TONELESS
    },
    {
        form: 'των',
        case: Casus.GENITIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.FEMININE,
        tone: TonePattern.PERISPOMENON
    },
    {
        form: 'ταις',
        case: Casus.DATIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.FEMININE,
        tone: TonePattern.PERISPOMENON
    },
    {
        form: 'τας',
        case: Casus.ACCUSATIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.FEMININE,
        tone: TonePattern.OXYTONE_ACUTE
    },
    {
        form: 'οἱ',
        case: Casus.NOMINATIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.MASCULINE,
        tone: TonePattern.TONELESS
    },
    {
        form: 'των',
        case: Casus.GENITIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.MASCULINE,
        tone: TonePattern.PERISPOMENON
    },
    {
        form: 'τοις',
        case: Casus.DATIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.MASCULINE,
        tone: TonePattern.PERISPOMENON
    },
    {
        form: 'τους',
        case: Casus.ACCUSATIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.MASCULINE,
        tone: TonePattern.OXYTONE_ACUTE
    },
    {
        form: 'τα',
        case: Casus.NOMINATIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.NEUTER,
        tone: TonePattern.OXYTONE_ACUTE
    },
    {
        form: 'τα',
        case: Casus.ACCUSATIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.NEUTER,
        tone: TonePattern.OXYTONE_ACUTE
    },
    {
        form: 'των',
        case: Casus.GENITIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.NEUTER,
        tone: TonePattern.PERISPOMENON
    },
    {
        form: 'τοις',
        case: Casus.DATIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.NEUTER,
        tone: TonePattern.PERISPOMENON
    },
];
