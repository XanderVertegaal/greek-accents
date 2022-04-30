import { Article, Case, Gender, Nominal, NominalForm, Number, TonePattern } from "../types";

export const articles: Article[] = [
    {
        form: 'ἡ',
        case: Case.NOMINATIVE,
        number: Number.SINGULAR,
        gender: Gender.FEMININE,
        tone: TonePattern.TONELESS
    },
    {
        form: 'της',
        case: Case.GENITIVE,
        number: Number.SINGULAR,
        gender: Gender.FEMININE,
        tone: TonePattern.PERISPOMENON
    },
    {
        form: 'τῃ',
        case: Case.DATIVE,
        number: Number.SINGULAR,
        gender: Gender.FEMININE,
        tone: TonePattern.PERISPOMENON
    },
    {
        form: 'την',
        case: Case.ACCUSATIVE,
        number: Number.SINGULAR,
        gender: Gender.FEMININE,
        tone: TonePattern.OXYTONE_ACUTE
    },
    {
        form: 'ὁ',
        case: Case.NOMINATIVE,
        number: Number.SINGULAR,
        gender: Gender.MASCULINE,
        tone: TonePattern.TONELESS
    },
    {
        form: 'του',
        case: Case.GENITIVE,
        number: Number.SINGULAR,
        gender: Gender.MASCULINE,
        tone: TonePattern.PERISPOMENON
    },
    {
        form: 'τῳ',
        case: Case.DATIVE,
        number: Number.SINGULAR,
        gender: Gender.MASCULINE,
        tone: TonePattern.PERISPOMENON
    },
    {
        form: 'τον',
        case: Case.ACCUSATIVE,
        number: Number.SINGULAR,
        gender: Gender.MASCULINE,
        tone: TonePattern.OXYTONE_ACUTE
    },
    {
        form: 'το',
        case: Case.NOMINATIVE_ACCUSATIVE,
        number: Number.SINGULAR,
        gender: Gender.NEUTER,
        tone: TonePattern.OXYTONE_ACUTE
    },
    {
        form: 'τω',
        case: Case.NOMINATIVE_ACCUSATIVE,
        number: Number.DUAL,
        gender: Gender.FEMININE_MASCULINE_NEUTER,
        tone: TonePattern.OXYTONE_ACUTE
    },
    {
        form: 'τοιν',
        case: Case.GENITIVE_DATIVE,
        number: Number.DUAL,
        gender: Gender.FEMININE_MASCULINE_NEUTER,
        tone: TonePattern.PERISPOMENON
    },
    {
        form: 'αἱ',
        case: Case.NOMINATIVE,
        number: Number.PLURAL,
        gender: Gender.FEMININE,
        tone: TonePattern.TONELESS
    },
    {
        form: 'των',
        case: Case.GENITIVE,
        number: Number.PLURAL,
        gender: Gender.FEMININE_MASCULINE_NEUTER,
        tone: TonePattern.PERISPOMENON
    },
    {
        form: 'ταις',
        case: Case.DATIVE,
        number: Number.PLURAL,
        gender: Gender.FEMININE,
        tone: TonePattern.PERISPOMENON
    },
    {
        form: 'τας',
        case: Case.ACCUSATIVE,
        number: Number.PLURAL,
        gender: Gender.FEMININE,
        tone: TonePattern.OXYTONE_ACUTE
    },
    {
        form: 'οἱ',
        case: Case.NOMINATIVE,
        number: Number.PLURAL,
        gender: Gender.MASCULINE,
        tone: TonePattern.TONELESS
    },
    {
        form: 'τοις',
        case: Case.DATIVE,
        number: Number.PLURAL,
        gender: Gender.MASCULINE_NEUTER,
        tone: TonePattern.PERISPOMENON
    },
    {
        form: 'τους',
        case: Case.ACCUSATIVE,
        number: Number.PLURAL,
        gender: Gender.MASCULINE,
        tone: TonePattern.OXYTONE_ACUTE
    },
    {
        form: 'τα',
        case: Case.NOMINATIVE_ACCUSATIVE,
        number: Number.PLURAL,
        gender: Gender.NEUTER,
        tone: TonePattern.OXYTONE_ACUTE
    }
]