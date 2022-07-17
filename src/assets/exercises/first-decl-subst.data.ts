/* eslint-disable max-len */
import { Casus, Genus, NominalForm, Numerus, PartialBy, TonePattern } from '../types';

class FirstDeclensionSubstantive implements NominalForm {
  form: string;
  translation: string;
  case: Casus;
  gender: Genus;
  gramNumber: Numerus;
  tone: TonePattern;
  exception: Partial<NominalForm>[] | undefined;

  constructor(props: PartialBy<NominalForm, 'case' | 'gender' | 'gramNumber'>) {
    this.case = props.case || Casus.NOMINATIVE;
    this.gender = props.gender || Genus.FEMININE;
    this.gramNumber = props.gramNumber || Numerus.SINGULAR;
    this.form = props.form;
    this.tone = props.tone;
    this.translation = props.translation;
    this.exception = props.exception ?? undefined;
   }
}

export const firstDeclensionSubstantives: NominalForm[] = [
  // Oxytone eta-final
  new FirstDeclensionSubstantive({ form: 'ψυχη', translation: 'soul', tone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ form: 'ἀρχη', translation: 'beginning', tone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ form: 'ἀρετη', translation: 'virtue', tone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ form: 'κεφαλη', translation: 'head', tone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ form: 'τιμη', translation: 'honour', tone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ form: 'βουλη', translation: 'counsel', tone: TonePattern.OXYTONE_ACUTE }),

  // // Oxytone alpha-final
  new FirstDeclensionSubstantive({ form: 'στρατια', translation: 'army', tone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ form: 'θεα', translation: 'goddess', tone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ form: 'γενεα', translation: 'family', tone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ form: 'ἐσχατια', translation: 'edge', tone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ form: 'σκια', translation: 'shadow', tone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ form: 'ἀγορα', translation: 'assembly', tone: TonePattern.OXYTONE_ACUTE }),

  // // Paroxytone eta-final
  new FirstDeclensionSubstantive({ form: 'ἀνᾰγκη', translation: 'need', tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'τεχνη', translation: 'art', tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'ἡδονη', translation: 'pleasure', tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'τῠχη', translation: 'fortune', tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'μᾰχη', translation: 'battle', tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'δῐκη', translation: 'justice', tone: TonePattern.PAROXYTONE }),

  // // Paroxytone alpha-final
  new FirstDeclensionSubstantive({ form: 'χωρα', translation: 'country', tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'αἰτῐα', translation: 'cause', tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'δοξα', translation: 'opinion', tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'Ἀσῐα', translation: 'Asia', tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'οἰκῐα', translation: 'house', tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'Ὀλυμπῐα', translation: 'Olympia', tone: TonePattern.PAROXYTONE }),

  // // Proparoxytone alpha-final
  new FirstDeclensionSubstantive({ form: 'θαλαττα', translation: 'sea', tone: TonePattern.PROPAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'ἀληθεια', translation: 'truth', tone: TonePattern.PROPAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'τραπεζα', translation: 'table', tone: TonePattern.PROPAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'ἀκανθα', translation: 'thorn', tone: TonePattern.PROPAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'Ἰφιγενεια', translation: 'Iphigenia', tone: TonePattern.PROPAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'Μηδεια', translation: 'Medea', tone: TonePattern.PROPAROXYTONE }),

  // // Perispomenon eta-final (contracted)
  new FirstDeclensionSubstantive({ form: 'γη', translation: 'earth', tone: TonePattern.PERISPOMENON }),
  new FirstDeclensionSubstantive({ form: 'συκη', translation: 'fig', tone: TonePattern.PERISPOMENON }),
  new FirstDeclensionSubstantive({ form: 'λυκη', translation: 'wolf-skin', tone: TonePattern.PERISPOMENON }),
  new FirstDeclensionSubstantive({ form: 'γαλη', translation: 'weasel', tone: TonePattern.PERISPOMENON }),
  new FirstDeclensionSubstantive({ form: 'ἀδελφιδη', translation: 'niece', tone: TonePattern.PERISPOMENON }),
  new FirstDeclensionSubstantive({ form: 'λεοντη', translation: 'lion-skin', tone: TonePattern.PERISPOMENON }),

  // // Perispomenon alpha-final (contracted)
  new FirstDeclensionSubstantive({ form: 'μνα', translation: 'mina', tone: TonePattern.PERISPOMENON }),
  new FirstDeclensionSubstantive({ form: 'Ἀθηνα', translation: 'Athena', tone: TonePattern.PERISPOMENON }),

  // // Properispomenon alpha-final
  new FirstDeclensionSubstantive({ form: 'γλωσσα', translation: 'tongue', tone: TonePattern.PROPERISPOMENON }),
  new FirstDeclensionSubstantive({ form: 'γαια', translation: 'earth', tone: TonePattern.PROPERISPOMENON }),
  new FirstDeclensionSubstantive({ form: 'γραια', translation: 'old woman', tone: TonePattern.PROPERISPOMENON }),
  new FirstDeclensionSubstantive({ form: 'μοιρα', translation: 'fate', tone: TonePattern.PROPERISPOMENON }),
  new FirstDeclensionSubstantive({ form: 'Μουσα', translation: 'Muse', tone: TonePattern.PROPERISPOMENON }),
  new FirstDeclensionSubstantive({ form: 'αἰσα', translation: 'destiny', tone: TonePattern.PROPERISPOMENON }),

  // // Oxytone masculine eta-final
  new FirstDeclensionSubstantive({ form: 'κριτης', translation: 'judge', gender: Genus.MASCULINE, tone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ form: 'μαθητης', translation: 'student', gender: Genus.MASCULINE, tone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ form: 'βουλευτης', translation: 'councillor', gender: Genus.MASCULINE, tone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ form: 'θηρευτης', translation: 'hunter', gender: Genus.MASCULINE, tone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ form: 'δικαστης', translation: 'judge', gender: Genus.MASCULINE, tone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ form: 'ἑρμηνευτης', translation: 'interpreter', gender: Genus.MASCULINE, tone: TonePattern.OXYTONE_ACUTE }),

  // // Paroxytone masculine eta-final
  new FirstDeclensionSubstantive({ form: 'πολῑτης', translation: 'citizen', gender: Genus.MASCULINE, tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({
    form: 'Ἀτρεϊδης', translation: 'son of Atreus', gender: Genus.MASCULINE, tone: TonePattern.PAROXYTONE}),
  new FirstDeclensionSubstantive({ form: 'στρατιωτης', translation: 'soldier', gender: Genus.MASCULINE, tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'ναυτης', translation: 'sailor', gender: Genus.MASCULINE, tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({
    form: 'Περσης', translation: 'Persian', gender: Genus.MASCULINE, tone: TonePattern.PAROXYTONE, exception: [
      {
        form: 'Περσα',
        case: Casus.VOCATIVE,
        gramNumber: Numerus.SINGULAR
      }
    ] }),
  new FirstDeclensionSubstantive({
    form: 'δεσποτης', translation: 'tyrant', gender: Genus.MASCULINE, tone: TonePattern.PAROXYTONE,
    exception: [
      {
        form: 'δεσποτα',
        case: Casus.VOCATIVE,
        gramNumber: Numerus.SINGULAR,
        tone: TonePattern.PROPAROXYTONE
      }
    ]}),

  // // Paroxytone masculine alpha-final
  new FirstDeclensionSubstantive({ form: 'νεανῐας', translation: 'young man', gender: Genus.MASCULINE, tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'ταμῐας', translation: 'steward', gender: Genus.MASCULINE, tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'Αἰνειας', translation: 'Aeneas', gender: Genus.MASCULINE, tone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ form: 'Μῐδας', translation: 'Midas', gender: Genus.MASCULINE, tone: TonePattern.PAROXYTONE }),

  // // Perispomenon masculine eta-final (contracted)
  new FirstDeclensionSubstantive({ form: 'Ἑρμης', translation: 'Hermes', gender: Genus.MASCULINE, tone: TonePattern.PERISPOMENON }),
  new FirstDeclensionSubstantive({ form: 'Βορης', translation: 'Boreas', gender: Genus.MASCULINE, tone: TonePattern.PERISPOMENON }),
  new FirstDeclensionSubstantive({ form: 'Θαλης', translation: 'Thales', gender: Genus.MASCULINE, tone: TonePattern.PERISPOMENON }),

  // // Perispomenon masculine alpha-final (contracted)
  new FirstDeclensionSubstantive({ form: 'Βορρας', translation: 'Boreas', gender: Genus.MASCULINE, tone: TonePattern.PERISPOMENON }),
];
