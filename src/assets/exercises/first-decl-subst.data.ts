import { Case, Gender, NominalForm, Number, PartialBy, TonePattern } from '../types';

class FirstDeclensionSubstantive implements NominalForm {
  form: string;
  translation: string;
  case: Case;
  gender: Gender;
  number: Number;
  tone: TonePattern;

  constructor(props: PartialBy<NominalForm, 'case' | 'gender' | 'number'>) {
    this.case = props.case || Case.NOMINATIVE;
    this.gender = props.gender || Gender.FEMININE;
    this.number = props.number || Number.SINGULAR;
    this.form = props.form;
    this.tone = props.tone;
    this.translation = props.translation;
   }
}

export const firstDeclensionSubstantives: NominalForm[] = [
  // Oxytone eta-final
  new FirstDeclensionSubstantive({ form: 'ψυχη', translation: "soul", tone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ form: 'ἀρχη', translation: "beginning", tone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ form: 'ἀρετη', translation: "virtue", tone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ form: 'κεφαλη', translation: "head", tone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ form: 'τιμη', translation: "honour", tone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ form: 'βουλη', translation: "counsel", tone: TonePattern.OXYTONE_ACUTE }),

  // Oxytone alpha-final
  new FirstDeclensionSubstantive({ form: 'στρατια', translation: "army", tone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ form: 'θεα', translation: "goddess", tone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ form: 'γενεα', translation: "family", tone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ form: 'ἐσχατια', translation: "edge", tone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ form: 'σκια', translation: "shadow", tone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ form: 'στοα', translation: "colonnade", tone: TonePattern.OXYTONE_ACUTE }),

  // Paroxytone eta-final
  new FirstDeclensionSubstantive({ form: 'ἀναγκη', translation: "need", tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'τεχνη', translation: "art", tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'ἡδονη', translation: "pleasure", tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'τυχη', translation: "fortune", tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'μαχη', translation: "battle", tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'δικη', translation: "justice", tone: TonePattern.PAROXYTONE }),

  // Paroxytone alpha-final
  new FirstDeclensionSubstantive({ form: 'χωρα', translation: "country", tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'αἰτια', translation: "cause", tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'δοξα', translation: "opinion", tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'Ἀσια', translation: "Asia", tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'οἰκια', translation: "house", tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'Ὀλυμπια', translation: "Olympia", tone: TonePattern.PAROXYTONE }),

  // Proparoxytone alpha-final
  new FirstDeclensionSubstantive({ form: 'θαλαττα', translation: "sea", tone: TonePattern.PROPAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'ἀληθεια', translation: "truth", tone: TonePattern.PROPAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'τραπεζα', translation: "table", tone: TonePattern.PROPAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'ἀκανθα', translation: "thorn", tone: TonePattern.PROPAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'Ἰφιγενεια', translation: "Iphigenia", tone: TonePattern.PROPAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'Μηδεια', translation: "Medea", tone: TonePattern.PROPAROXYTONE }),

  // Perispomenon eta-final (contracted)
  new FirstDeclensionSubstantive({ form: 'γη', translation: "earth", tone: TonePattern.PERISPOMENON }),
  new FirstDeclensionSubstantive({ form: 'συκη', translation: "fig", tone: TonePattern.PERISPOMENON }),
  new FirstDeclensionSubstantive({ form: 'λυκη', translation: "wolf-skin", tone: TonePattern.PERISPOMENON }),
  new FirstDeclensionSubstantive({ form: 'γαλη', translation: "weasel", tone: TonePattern.PERISPOMENON }),
  new FirstDeclensionSubstantive({ form: 'ἀδελφιδη', translation: "niece", tone: TonePattern.PERISPOMENON }),
  new FirstDeclensionSubstantive({ form: 'λεοντη', translation: "lion-skin", tone: TonePattern.PERISPOMENON }),

  // Perispomenon alpha-final (contracted)
  new FirstDeclensionSubstantive({ form: 'μνα', translation: "mina", tone: TonePattern.PERISPOMENON }),
  new FirstDeclensionSubstantive({ form: 'Ἀθηνα', translation: "Athena", tone: TonePattern.PERISPOMENON }),

  // Properispomenon alpha-final
  new FirstDeclensionSubstantive({ form: 'γλωσσα', translation: "tongue", tone: TonePattern.PROPERISPOMENON }),
  new FirstDeclensionSubstantive({ form: 'γαια', translation: "earth", tone: TonePattern.PROPERISPOMENON }),
  new FirstDeclensionSubstantive({ form: 'γραια', translation: "old woman", tone: TonePattern.PROPERISPOMENON }),
  new FirstDeclensionSubstantive({ form: 'μοιρα', translation: "fate", tone: TonePattern.PROPERISPOMENON }),
  new FirstDeclensionSubstantive({ form: 'Μουσα', translation: "Muse", tone: TonePattern.PROPERISPOMENON }),
  new FirstDeclensionSubstantive({ form: 'αἰσα', translation: "destiny", tone: TonePattern.PROPERISPOMENON }),

  // Oxytone masculine eta-final
  new FirstDeclensionSubstantive({ form: 'κριτης', translation: "judge", gender: Gender.MASCULINE, tone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ form: 'μαθητης', translation: "student", gender: Gender.MASCULINE, tone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ form: 'βουλευτης', translation: "councillor", gender: Gender.MASCULINE, tone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ form: 'θηρευτης', translation: "hunter", gender: Gender.MASCULINE, tone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ form: 'δικαστης', translation: "judge", gender: Gender.MASCULINE, tone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ form: 'ἑρμηνευτης', translation: "interpreter", gender: Gender.MASCULINE, tone: TonePattern.OXYTONE_ACUTE }),

  // Paroxytone masculine eta-final
  new FirstDeclensionSubstantive({ form: 'πολιτης', translation: "citizen", gender: Gender.MASCULINE, tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'Ἀτρεϊδης', translation: "son of Atreus", gender: Gender.MASCULINE, tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'στρατιωτης', translation: "soldier", gender: Gender.MASCULINE, tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'Περσης', translation: "Persian", gender: Gender.MASCULINE, tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'ναυτης', translation: "sailor", gender: Gender.MASCULINE, tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({
    form: 'δεσποτης', translation: "tyrant", gender: Gender.MASCULINE, tone: TonePattern.PAROXYTONE,
    exception: [
      {
        case: Case.VOCATIVE,
        gender: Gender.MASCULINE,
        number: Number.SINGULAR,
        tone: TonePattern.PROPAROXYTONE
      }
    ]}),

  // Paroxytone masculine alpha-final
  new FirstDeclensionSubstantive({ form: 'νεανιας', translation: "young man", gender: Gender.MASCULINE, tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'ταμιας', translation: "steward", gender: Gender.MASCULINE, tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'Αἰνειας', translation: "Aeneas", gender: Gender.MASCULINE, tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'Μιδας', translation: "Midas", gender: Gender.MASCULINE, tone: TonePattern.PAROXYTONE }),

  // Perispomenon masculine eta-final (contracted)
  new FirstDeclensionSubstantive({ form: 'Ἑρμης', translation: "Hermes", gender: Gender.MASCULINE, tone: TonePattern.PERISPOMENON }),
  new FirstDeclensionSubstantive({ form: 'Βορης', translation: "Boreas", gender: Gender.MASCULINE, tone: TonePattern.PERISPOMENON }),
  new FirstDeclensionSubstantive({ form: 'Θαλης', translation: "Thales", gender: Gender.MASCULINE, tone: TonePattern.PERISPOMENON }),

  // Perispomenon masculine alpha-final (contracted)
  new FirstDeclensionSubstantive({ form: 'Βορρας', translation: "Boreas", gender: Gender.MASCULINE, tone: TonePattern.PERISPOMENON }),
];
