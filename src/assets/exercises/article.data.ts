import { Article, Casus, Genus, Numerus, TonePattern } from '../types';

export const articles: Article[] = [
    {
        type: 'article',
        baseForm: 'ἡ',
        case: Casus.NOMINATIVE,
        gramNumber: Numerus.SINGULAR,
        gender: Genus.FEMININE,
        baseTone: TonePattern.TONELESS,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'της',
        case: Casus.GENITIVE,
        gramNumber: Numerus.SINGULAR,
        gender: Genus.FEMININE,
        baseTone: TonePattern.PERISPOMENON,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'τῃ',
        case: Casus.DATIVE,
        gramNumber: Numerus.SINGULAR,
        gender: Genus.FEMININE,
        baseTone: TonePattern.PERISPOMENON,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'την',
        case: Casus.ACCUSATIVE,
        gramNumber: Numerus.SINGULAR,
        gender: Genus.FEMININE,
        baseTone: TonePattern.OXYTONE_ACUTE,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'ὁ',
        case: Casus.NOMINATIVE,
        gramNumber: Numerus.SINGULAR,
        gender: Genus.MASCULINE,
        baseTone: TonePattern.TONELESS,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'του',
        case: Casus.GENITIVE,
        gramNumber: Numerus.SINGULAR,
        gender: Genus.MASCULINE,
        baseTone: TonePattern.PERISPOMENON,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'τῳ',
        case: Casus.DATIVE,
        gramNumber: Numerus.SINGULAR,
        gender: Genus.MASCULINE,
        baseTone: TonePattern.PERISPOMENON,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'τον',
        case: Casus.ACCUSATIVE,
        gramNumber: Numerus.SINGULAR,
        gender: Genus.MASCULINE,
        baseTone: TonePattern.OXYTONE_ACUTE,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'το',
        case: Casus.NOMINATIVE,
        gramNumber: Numerus.SINGULAR,
        gender: Genus.NEUTER,
        baseTone: TonePattern.OXYTONE_ACUTE,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'το',
        case: Casus.ACCUSATIVE,
        gramNumber: Numerus.SINGULAR,
        gender: Genus.NEUTER,
        baseTone: TonePattern.OXYTONE_ACUTE,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'τω',
        case: Casus.NOMINATIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.MASCULINE,
        baseTone: TonePattern.OXYTONE_ACUTE,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'τω',
        case: Casus.ACCUSATIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.MASCULINE,
        baseTone: TonePattern.OXYTONE_ACUTE,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'τω',
        case: Casus.NOMINATIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.FEMININE,
        baseTone: TonePattern.OXYTONE_ACUTE,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'τω',
        case: Casus.ACCUSATIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.FEMININE,
        baseTone: TonePattern.OXYTONE_ACUTE,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'τω',
        case: Casus.NOMINATIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.NEUTER,
        baseTone: TonePattern.OXYTONE_ACUTE,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'τω',
        case: Casus.ACCUSATIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.NEUTER,
        baseTone: TonePattern.OXYTONE_ACUTE,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'τοιν',
        case: Casus.GENITIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.MASCULINE,
        baseTone: TonePattern.PERISPOMENON,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'τοιν',
        case: Casus.DATIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.MASCULINE,
        baseTone: TonePattern.PERISPOMENON,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'ταιν',
        case: Casus.GENITIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.FEMININE,
        baseTone: TonePattern.PERISPOMENON,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'ταιν',
        case: Casus.DATIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.FEMININE,
        baseTone: TonePattern.PERISPOMENON,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'τοιν',
        case: Casus.GENITIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.NEUTER,
        baseTone: TonePattern.PERISPOMENON,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'τοιν',
        case: Casus.DATIVE,
        gramNumber: Numerus.DUAL,
        gender: Genus.NEUTER,
        baseTone: TonePattern.PERISPOMENON,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'αἱ',
        case: Casus.NOMINATIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.FEMININE,
        baseTone: TonePattern.TONELESS,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'των',
        case: Casus.GENITIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.FEMININE,
        baseTone: TonePattern.PERISPOMENON,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'ταις',
        case: Casus.DATIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.FEMININE,
        baseTone: TonePattern.PERISPOMENON,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'τας',
        case: Casus.ACCUSATIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.FEMININE,
        baseTone: TonePattern.OXYTONE_ACUTE,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'οἱ',
        case: Casus.NOMINATIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.MASCULINE,
        baseTone: TonePattern.TONELESS,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'των',
        case: Casus.GENITIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.MASCULINE,
        baseTone: TonePattern.PERISPOMENON,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'τοις',
        case: Casus.DATIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.MASCULINE,
        baseTone: TonePattern.PERISPOMENON,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'τους',
        case: Casus.ACCUSATIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.MASCULINE,
        baseTone: TonePattern.OXYTONE_ACUTE,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'τα',
        case: Casus.NOMINATIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.NEUTER,
        baseTone: TonePattern.OXYTONE_ACUTE,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'τα',
        case: Casus.ACCUSATIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.NEUTER,
        baseTone: TonePattern.OXYTONE_ACUTE,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'των',
        case: Casus.GENITIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.NEUTER,
        baseTone: TonePattern.PERISPOMENON,
        translation: 'the'
    },
    {
        type: 'article',
        baseForm: 'τοις',
        case: Casus.DATIVE,
        gramNumber: Numerus.PLURAL,
        gender: Genus.NEUTER,
        baseTone: TonePattern.PERISPOMENON,
        translation: 'the'
    },
];
