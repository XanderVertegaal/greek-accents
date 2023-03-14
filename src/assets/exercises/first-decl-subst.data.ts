/* eslint-disable max-len */
import { Casus, Genus, NominalException, NominalForm, Numerus, PartialBy, TonePattern } from '../types';

class FirstDeclensionSubstantive implements NominalForm {
  inflectedForm?: string;
  baseForm: string;
  translation: string;
  case: Casus;
  gender: Genus;
  gramNumber: Numerus;
  inflectedTone?: TonePattern;
  baseTone: TonePattern;
  exception?: NominalException[];

  constructor(props: PartialBy<NominalForm, 'case' | 'gender' | 'gramNumber'>) {
    this.case = props.case || Casus.NOMINATIVE;
    this.gender = props.gender || Genus.FEMININE;
    this.gramNumber = props.gramNumber || Numerus.SINGULAR;
    this.baseForm = props.baseForm;
    this.baseTone = props.baseTone;
    this.translation = props.translation;
    this.exception = props.exception ?? undefined;
   }
}

export const firstDeclensionSubstantives: NominalForm[] = [
  // Oxytone eta-final
  new FirstDeclensionSubstantive({ baseForm: 'ψυχη', translation: 'soul', baseTone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ baseForm: 'ἀρχη', translation: 'beginning', baseTone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ baseForm: 'ἀρετη', translation: 'virtue', baseTone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ baseForm: 'κεφαλη', translation: 'head', baseTone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ baseForm: 'τιμη', translation: 'honour', baseTone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ baseForm: 'βουλη', translation: 'counsel', baseTone: TonePattern.OXYTONE_ACUTE }),

  // // Oxytone alpha-final
  new FirstDeclensionSubstantive({ baseForm: 'στρατια', translation: 'army', baseTone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ baseForm: 'θεα', translation: 'goddess', baseTone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ baseForm: 'γενεα', translation: 'family', baseTone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ baseForm: 'ἐσχατια', translation: 'edge', baseTone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ baseForm: 'σκια', translation: 'shadow', baseTone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ baseForm: 'ἀγορα', translation: 'assembly', baseTone: TonePattern.OXYTONE_ACUTE }),

  // // Paroxytone eta-final
  new FirstDeclensionSubstantive({ baseForm: 'ἀνᾰγκη', translation: 'need', baseTone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ baseForm: 'τεχνη', translation: 'art', baseTone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ baseForm: 'ἡδονη', translation: 'pleasure', baseTone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ baseForm: 'τῠχη', translation: 'fortune', baseTone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ baseForm: 'μᾰχη', translation: 'battle', baseTone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ baseForm: 'δῐκη', translation: 'justice', baseTone: TonePattern.PAROXYTONE }),

  // // Paroxytone alpha-final
  new FirstDeclensionSubstantive({ baseForm: 'χωρα', translation: 'country', baseTone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ baseForm: 'αἰτῐα', translation: 'cause', baseTone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ baseForm: 'δοξα', translation: 'opinion', baseTone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ baseForm: 'Ἀσῐα', translation: 'Asia', baseTone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ baseForm: 'οἰκῐα', translation: 'house', baseTone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ baseForm: 'Ὀλυμπῐα', translation: 'Olympia', baseTone: TonePattern.PAROXYTONE }),

  // // Proparoxytone alpha-final
  new FirstDeclensionSubstantive({ baseForm: 'θαλαττα', translation: 'sea', baseTone: TonePattern.PROPAROXYTONE }),
  new FirstDeclensionSubstantive({ baseForm: 'ἀληθεια', translation: 'truth', baseTone: TonePattern.PROPAROXYTONE }),
  new FirstDeclensionSubstantive({ baseForm: 'τραπεζα', translation: 'table', baseTone: TonePattern.PROPAROXYTONE }),
  new FirstDeclensionSubstantive({ baseForm: 'ἀκανθα', translation: 'thorn', baseTone: TonePattern.PROPAROXYTONE }),
  new FirstDeclensionSubstantive({ baseForm: 'Ἰφιγενεια', translation: 'Iphigenia', baseTone: TonePattern.PROPAROXYTONE }),
  new FirstDeclensionSubstantive({ baseForm: 'Μηδεια', translation: 'Medea', baseTone: TonePattern.PROPAROXYTONE }),

  // // Perispomenon eta-final (contracted)
  new FirstDeclensionSubstantive({ baseForm: 'γη', translation: 'earth', baseTone: TonePattern.PERISPOMENON }),
  new FirstDeclensionSubstantive({ baseForm: 'συκη', translation: 'fig', baseTone: TonePattern.PERISPOMENON }),
  new FirstDeclensionSubstantive({ baseForm: 'λυκη', translation: 'wolf-skin', baseTone: TonePattern.PERISPOMENON }),
  new FirstDeclensionSubstantive({ baseForm: 'γαλη', translation: 'weasel', baseTone: TonePattern.PERISPOMENON }),
  new FirstDeclensionSubstantive({ baseForm: 'ἀδελφιδη', translation: 'niece', baseTone: TonePattern.PERISPOMENON }),
  new FirstDeclensionSubstantive({ baseForm: 'λεοντη', translation: 'lion-skin', baseTone: TonePattern.PERISPOMENON }),

  // // Perispomenon alpha-final (contracted)
  new FirstDeclensionSubstantive({ baseForm: 'μνα', translation: 'mina', baseTone: TonePattern.PERISPOMENON }),
  new FirstDeclensionSubstantive({ baseForm: 'Ἀθηνα', translation: 'Athena', baseTone: TonePattern.PERISPOMENON }),

  // // Properispomenon alpha-final
  new FirstDeclensionSubstantive({ baseForm: 'γλωσσα', translation: 'tongue', baseTone: TonePattern.PROPERISPOMENON }),
  new FirstDeclensionSubstantive({ baseForm: 'γαια', translation: 'earth', baseTone: TonePattern.PROPERISPOMENON }),
  new FirstDeclensionSubstantive({ baseForm: 'γραια', translation: 'old woman', baseTone: TonePattern.PROPERISPOMENON }),
  new FirstDeclensionSubstantive({ baseForm: 'μοιρα', translation: 'fate', baseTone: TonePattern.PROPERISPOMENON }),
  new FirstDeclensionSubstantive({ baseForm: 'Μουσα', translation: 'Muse', baseTone: TonePattern.PROPERISPOMENON }),
  new FirstDeclensionSubstantive({ baseForm: 'αἰσα', translation: 'destiny', baseTone: TonePattern.PROPERISPOMENON }),

  // // Oxytone masculine eta-final
  new FirstDeclensionSubstantive({ baseForm: 'κριτης', translation: 'judge', gender: Genus.MASCULINE, baseTone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ baseForm: 'μαθητης', translation: 'student', gender: Genus.MASCULINE, baseTone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ baseForm: 'βουλευτης', translation: 'councillor', gender: Genus.MASCULINE, baseTone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ baseForm: 'θηρευτης', translation: 'hunter', gender: Genus.MASCULINE, baseTone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ baseForm: 'δικαστης', translation: 'judge', gender: Genus.MASCULINE, baseTone: TonePattern.OXYTONE_ACUTE }),
  new FirstDeclensionSubstantive({ baseForm: 'ἑρμηνευτης', translation: 'interpreter', gender: Genus.MASCULINE, baseTone: TonePattern.OXYTONE_ACUTE }),

  // // Paroxytone masculine eta-final
  new FirstDeclensionSubstantive({ baseForm: 'πολῑτης', translation: 'citizen', gender: Genus.MASCULINE, baseTone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({
    baseForm: 'Ἀτρεϊδης', translation: 'son of Atreus', gender: Genus.MASCULINE, baseTone: TonePattern.PAROXYTONE}),
  new FirstDeclensionSubstantive({ baseForm: 'στρατιωτης', translation: 'soldier', gender: Genus.MASCULINE, baseTone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ baseForm: 'ναυτης', translation: 'sailor', gender: Genus.MASCULINE, baseTone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({
    baseForm: 'Περσης', translation: 'Persian', gender: Genus.MASCULINE, baseTone: TonePattern.PAROXYTONE, exception: [
      {
        inflectedForm: 'Περσα',
        inflectedTone: TonePattern.PROPAROXYTONE,
        case: Casus.VOCATIVE,
        gramNumber: Numerus.SINGULAR
      }
    ] }),
  new FirstDeclensionSubstantive({
    baseForm: 'δεσποτης', translation: 'tyrant', gender: Genus.MASCULINE, baseTone: TonePattern.PAROXYTONE,
    exception: [
      {
        inflectedForm: 'δεσποτα',
        case: Casus.VOCATIVE,
        gramNumber: Numerus.SINGULAR,
        inflectedTone: TonePattern.PROPAROXYTONE
      }
    ]}),

  // // Paroxytone masculine alpha-final
  new FirstDeclensionSubstantive({ baseForm: 'νεανῐας', translation: 'young man', gender: Genus.MASCULINE, baseTone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ baseForm: 'ταμῐας', translation: 'steward', gender: Genus.MASCULINE, baseTone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ baseForm: 'Αἰνειας', translation: 'Aeneas', gender: Genus.MASCULINE, baseTone: TonePattern.PAROXYTONE }),
  new FirstDeclensionSubstantive({ baseForm: 'Μῐδας', translation: 'Midas', gender: Genus.MASCULINE, baseTone: TonePattern.PAROXYTONE }),

  // // Perispomenon masculine eta-final (contracted)
  new FirstDeclensionSubstantive({ baseForm: 'Ἑρμης', translation: 'Hermes', gender: Genus.MASCULINE, baseTone: TonePattern.PERISPOMENON }),
  new FirstDeclensionSubstantive({ baseForm: 'Βορης', translation: 'Boreas', gender: Genus.MASCULINE, baseTone: TonePattern.PERISPOMENON }),
  new FirstDeclensionSubstantive({ baseForm: 'Θαλης', translation: 'Thales', gender: Genus.MASCULINE, baseTone: TonePattern.PERISPOMENON }),

  // // Perispomenon masculine alpha-final (contracted)
  new FirstDeclensionSubstantive({ baseForm: 'Βορρας', translation: 'Boreas', gender: Genus.MASCULINE, baseTone: TonePattern.PERISPOMENON }),
];
