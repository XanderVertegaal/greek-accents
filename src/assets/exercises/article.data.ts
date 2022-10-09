import { Article, Casus, Genus, Numerus, TonePattern } from '../types';

export const articles: Article[] = [
    {
        type: 'article',
        form: 'ἡ',
        case: Casus.NOMINATIVE,
        gramNumber: Numerus.SINGULAR,
        gender: Genus.FEMININE,
        tone: TonePattern.TONELESS,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'της',
        case: Casus.GENITIVE,
        gramNumber: Numerus.SINGULAR,
        gender: Genus.FEMININE,
        tone: TonePattern.PERISPOMENON,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'τῃ',
        case: Casus.DATIVE,
        gramNumber: Numerus.SINGULAR,
        gender: Genus.FEMININE,
        tone: TonePattern.PERISPOMENON,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'την',
        case: Casus.ACCUSATIVE,
        gramNumber: Numerus.SINGULAR,
        gender: Genus.FEMININE,
        tone: TonePattern.OXYTONE_ACUTE,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'ὁ',
        case: Casus.NOMINATIVE,
        gramNumber: Numerus.SINGULAR,
        gender: Genus.MASCULINE,
        tone: TonePattern.TONELESS,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'του',
        case: Casus.GENITIVE,
        gramNumber: Numerus.SINGULAR,
        gender: Genus.MASCULINE,
        tone: TonePattern.PERISPOMENON,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'τῳ',
        case: Casus.DATIVE,
        gramNumber: Numerus.SINGULAR,
        gender: Genus.MASCULINE,
        tone: TonePattern.PERISPOMENON,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'τον',
        case: Casus.ACCUSATIVE,
        gramNumber: Numerus.SINGULAR,
        gender: Genus.MASCULINE,
        tone: TonePattern.OXYTONE_ACUTE,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'το',
        case: Casus.NOMINATIVE,
        gramNumber: Numerus.SINGULAR,
        gender: Genus.NEUTER,
        tone: TonePattern.OXYTONE_ACUTE,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'το',
        case: Casus.ACCUSATIVE,
        gramNumber: Numerus.SINGULAR,
        gender: Genus.NEUTER,
        tone: TonePattern.OXYTONE_ACUTE,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'τω',
        case: Casus.NOMINATIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.MASCULINE,
        tone: TonePattern.OXYTONE_ACUTE,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'τω',
        case: Casus.ACCUSATIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.MASCULINE,
        tone: TonePattern.OXYTONE_ACUTE,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'τω',
        case: Casus.NOMINATIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.FEMININE,
        tone: TonePattern.OXYTONE_ACUTE,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'τω',
        case: Casus.ACCUSATIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.FEMININE,
        tone: TonePattern.OXYTONE_ACUTE,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'τω',
        case: Casus.NOMINATIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.NEUTER,
        tone: TonePattern.OXYTONE_ACUTE,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'τω',
        case: Casus.ACCUSATIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.NEUTER,
        tone: TonePattern.OXYTONE_ACUTE,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'τοιν',
        case: Casus.GENITIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.MASCULINE,
        tone: TonePattern.PERISPOMENON,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'τοιν',
        case: Casus.DATIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.MASCULINE,
        tone: TonePattern.PERISPOMENON,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'ταιν',
        case: Casus.GENITIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.FEMININE,
        tone: TonePattern.PERISPOMENON,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'ταιν',
        case: Casus.DATIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.FEMININE,
        tone: TonePattern.PERISPOMENON,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'τοιν',
        case: Casus.GENITIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.NEUTER,
        tone: TonePattern.PERISPOMENON,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'τοιν',
        case: Casus.DATIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.NEUTER,
        tone: TonePattern.PERISPOMENON,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'αἱ',
        case: Casus.NOMINATIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.FEMININE,
        tone: TonePattern.TONELESS,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'των',
        case: Casus.GENITIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.FEMININE,
        tone: TonePattern.PERISPOMENON,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'ταις',
        case: Casus.DATIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.FEMININE,
        tone: TonePattern.PERISPOMENON,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'τας',
        case: Casus.ACCUSATIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.FEMININE,
        tone: TonePattern.OXYTONE_ACUTE,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'οἱ',
        case: Casus.NOMINATIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.MASCULINE,
        tone: TonePattern.TONELESS,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'των',
        case: Casus.GENITIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.MASCULINE,
        tone: TonePattern.PERISPOMENON,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'τοις',
        case: Casus.DATIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.MASCULINE,
        tone: TonePattern.PERISPOMENON,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'τους',
        case: Casus.ACCUSATIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.MASCULINE,
        tone: TonePattern.OXYTONE_ACUTE,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'τα',
        case: Casus.NOMINATIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.NEUTER,
        tone: TonePattern.OXYTONE_ACUTE,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'τα',
        case: Casus.ACCUSATIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.NEUTER,
        tone: TonePattern.OXYTONE_ACUTE,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'των',
        case: Casus.GENITIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.NEUTER,
        tone: TonePattern.PERISPOMENON,
        translation: 'the'
    },
    {
        type: 'article',
        form: 'τοις',
        case: Casus.DATIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.NEUTER,
        tone: TonePattern.PERISPOMENON,
        translation: 'the'
    },
];
