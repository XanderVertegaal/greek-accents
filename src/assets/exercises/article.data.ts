import { Case, Gender, NominalForm, Number } from "../types";

export const articles: NominalForm[] = [
    {
        form: 'ἡ',
        case: Case.NOMINATIVE,
        number: Number.SINGULAR,
        gender: Gender.FEMININE
    },
    {
        form: 'τῆς',
        case: Case.GENITIVE,
        number: Number.SINGULAR,
        gender: Gender.FEMININE,
    },
    {
        form: 'τῇ',
        case: Case.DATIVE,
        number: Number.SINGULAR,
        gender: Gender.FEMININE
    },
    {
        form: 'τήν',
        case: Case.ACCUSATIVE,
        number: Number.SINGULAR,
        gender: Gender.FEMININE
    },
    {
        form: 'ὁ',
        case: Case.NOMINATIVE,
        number: Number.SINGULAR,
        gender: Gender.MASCULINE
    },
    {
        form: 'τοῦ',
        case: Case.GENITIVE,
        number: Number.SINGULAR,
        gender: Gender.MASCULINE,
    },
    {
        form: 'τῷ',
        case: Case.DATIVE,
        number: Number.SINGULAR,
        gender: Gender.MASCULINE
    },
    {
        form: 'τόν',
        case: Case.ACCUSATIVE,
        number: Number.SINGULAR,
        gender: Gender.MASCULINE
    },
    {
        form: 'τό',
        case: Case.NOMINATIVE_ACCUSATIVE,
        number: Number.SINGULAR,
        gender: Gender.NEUTER
    },
    {
        form: 'τώ',
        case: Case.NOMINATIVE_ACCUSATIVE,
        number: Number.DUAL,
        gender: Gender.FEMININE_MASCULINE_NEUTER
    },
    {
        form: 'τοῖν',
        case: Case.GENITIVE_DATIVE,
        number: Number.DUAL,
        gender: Gender.FEMININE_MASCULINE_NEUTER
    },
    {
        form: 'αἱ',
        case: Case.NOMINATIVE,
        number: Number.PLURAL,
        gender: Gender.FEMININE
    },
    {
        form: 'τῶν',
        case: Case.GENITIVE,
        number: Number.PLURAL,
        gender: Gender.FEMININE_MASCULINE_NEUTER
    },
    {
        form: 'ταῖς',
        case: Case.DATIVE,
        number: Number.PLURAL,
        gender: Gender.FEMININE
    },
    {
        form: 'τάς',
        case: Case.ACCUSATIVE,
        number: Number.PLURAL,
        gender: Gender.FEMININE
    },
    {
        form: 'οἱ',
        case: Case.NOMINATIVE,
        number: Number.PLURAL,
        gender: Gender.MASCULINE
    },
    {
        form: 'τοῖς',
        case: Case.DATIVE,
        number: Number.PLURAL,
        gender: Gender.MASCULINE_NEUTER
    },
    {
        form: 'τούς',
        case: Case.ACCUSATIVE,
        number: Number.PLURAL,
        gender: Gender.MASCULINE
    },
    {
        form: 'τά',
        case: Case.NOMINATIVE_ACCUSATIVE,
        number: Number.PLURAL,
        gender: Gender.NEUTER
    }
]