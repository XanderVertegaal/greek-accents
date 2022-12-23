import { Casus, Genus, Nominal, NominalForm, Numerus, PartialBy, TonePattern } from "../types";

class SecondDeclinationSubstantive implements NominalForm {
  inflectedForm?: string;
  baseForm: string;
  translation: string;
  case: Casus;
  gender: Genus;
  gramNumber: Numerus;
  inflectedTone?: TonePattern;
  baseTone: TonePattern;
  exception?: Partial<NominalForm>[];

  constructor(props: PartialBy<NominalForm, 'case' | 'gramNumber'>) {
    this.case = props.case || Casus.NOMINATIVE;
    this.gender = props.gender;
    this.gramNumber = props.gramNumber || Numerus.SINGULAR;
    this.baseForm = props.baseForm;
    this.baseTone = props.baseTone;
    this.translation = props.translation;
    this.exception = props.exception ?? undefined;
  }
}

export const secondDeclinationSubstantives: NominalForm[] = [
  new SecondDeclinationSubstantive({
    baseForm: 'δουλος',
    translation: 'slave',
    baseTone: TonePattern.PROPERISPOMENON,
    gender: Genus.MASCULINE
  })
];