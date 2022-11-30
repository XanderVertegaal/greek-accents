/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { articles } from 'src/assets/exercises/article.data';
import { firstDeclensionSubstantives } from 'src/assets/exercises/first-decl-subst.data';
import {allChars, allSemi, toneChars } from 'src/assets/models';
import { Article, Assignment, Casus, Character, Genus, NominalForm, Numerus, Question, Substantive, Tone, TonePattern, WordClass,
} from 'src/assets/types';
import { NucleusIndex } from 'src/assets/types';

export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function areCharPropsEqual(char1: Character, char2: Character): boolean {
  const differences = Object.keys(char1.props).filter(
    (key) => char1.props[key] !== char2.props[key]
  );
  return differences.length === 0;
}

function getAccChars(word: string): Character[] {
  const foundChars: Character[] = [];
  const letters = word.split('');
  letters.forEach((letter) => {
    for (const char of toneChars) {
      if (letter === char.glyph) {
        foundChars.push(char);
        continue;
      }
    }
  });
  return foundChars;
}

function removeAcc(char: Character): Character | undefined {
  const constructedBaseChar: Character = {
    ...char,
    props: {
      ...char.props,
      tone: Tone.NONE,
    },
  };
  const foundBaseChar = getCharFromProps(constructedBaseChar);
  if (!foundBaseChar) {
    return undefined;
  }
  return foundBaseChar;
}

export function getCharFromProps(char: Character): Character | null {
  const foundChar = allChars.find((c) => areCharPropsEqual(c, char));
  return foundChar ? foundChar : null;
}

export function getCharFromLetter(letter: string): Character | undefined {
  return allChars.find((c) => c.glyph === letter);
}

function isVowel(letter: string): boolean {
  return allChars.map((c) => c.glyph).includes(letter);
}

function isSemivowel(letter: string): boolean {
  return allSemi.map((u) => u.glyph).includes(letter);
}

export function getNuclei(word: string): NucleusIndex[] {
  let skipNext = false;
  const reversedLetters = word.split('').reverse();
  const nuclei: NucleusIndex[] = [];
  reversedLetters.forEach((letter, index) => {
    if (skipNext) {
      skipNext = false;
      return;
    }
    if (!isVowel(letter)) {
      return;
    }
    if (!isSemivowel(letter)) {
      nuclei.push({
        nucleus: letter,
        index,
      });
      return;
    }
    if (isSemivowel(letter)) {
      if (
        !reversedLetters[index + 1] || // word-initial semivowels
        !isVowel(reversedLetters[index + 1]) || // non-diphthongal semivowels
        getCharFromLetter(letter)?.props.diaeresis
      ) {
        // semivowels with diaeresis
        nuclei.push({ nucleus: letter, index });
        return;
      }
      skipNext = true;
      nuclei.push({
        nucleus: reversedLetters[index + 1] + letter,
        index,
      });
      return;
    } else {
      nuclei.push({ nucleus: letter, index });
    }
  });
  return nuclei;
}

export function removeWordAccents(word: string): string {
  const unaccentedWord = word.split('').map((letter) => {
    if (!isVowel(letter)) {return letter;}
    const char = getCharFromLetter(letter);
    if (char === undefined) {return;}
    return removeAcc(char)?.glyph;
  });
  return unaccentedWord.join('');
}

function applyToneToNucleus(
  { nucleus, index }: NucleusIndex,
  tone: Tone
): NucleusIndex | null {
  let unaccChar: Character | undefined;
  if (nucleus.length === 1) {
    unaccChar = getCharFromLetter(nucleus);
  } else if (nucleus.length === 2) {
    unaccChar = getCharFromLetter(nucleus[1]);
  } else {
    console.error('Invalid nucleus length');
    return null;
  }

  if (unaccChar === undefined) {return { nucleus, index };}
  const accCharProps: Character = {
    ...unaccChar,
    props: {
      ...unaccChar.props,
      tone,
    },
  };
  const accChar = getCharFromProps(accCharProps);

  if (!accChar) {return null;}
  return nucleus.length === 1
    ? { nucleus: accChar.glyph, index }
    : { nucleus: nucleus[0] + accChar.glyph, index };
}

function replaceNucleus(word: string, { nucleus, index }: NucleusIndex): string {
  const newWord = word.split('').reverse();
  newWord.splice(index, nucleus.length, nucleus);
  return newWord.reverse().join('');
}

export function applyTonePatternToWord(word: string, tonePattern: TonePattern): string | null {
  const nuclei = getNuclei(word);
  let selectedNucleus: NucleusIndex | null = null;
  let accentedNucleus: NucleusIndex | null = null;
  if (nuclei.length === 0) {
    if (tonePattern === TonePattern.TONELESS) {
      return word;
    }
    return null;
  }

  switch (tonePattern) {
    case TonePattern.TONELESS:
      return word;
    case TonePattern.OXYTONE_GRAVE:
      selectedNucleus = nuclei[0];
      accentedNucleus = applyToneToNucleus(selectedNucleus, Tone.GRAVE);
      if (!accentedNucleus) {return null;}
      return replaceNucleus(word, accentedNucleus);

    case TonePattern.OXYTONE_ACUTE:
      selectedNucleus = nuclei[0];
      accentedNucleus = applyToneToNucleus(selectedNucleus, Tone.ACUTE);
      if (!accentedNucleus) {return null;}
      return replaceNucleus(word, accentedNucleus);

    case TonePattern.PAROXYTONE:
      if (nuclei[1] === undefined) {return null;}
      selectedNucleus = nuclei[1];
      accentedNucleus = applyToneToNucleus(selectedNucleus, Tone.ACUTE);
      if (!accentedNucleus) {return null;}
      return replaceNucleus(word, accentedNucleus);

    case TonePattern.PROPAROXYTONE:
      if (nuclei[2] === undefined) {return null;}
      selectedNucleus = nuclei[2];
      accentedNucleus = applyToneToNucleus(selectedNucleus, Tone.ACUTE);
      if (!accentedNucleus) {return null;}
      return replaceNucleus(word, accentedNucleus);

    case TonePattern.PERISPOMENON:
      selectedNucleus = nuclei[0];
      accentedNucleus = applyToneToNucleus(selectedNucleus, Tone.CIRCUMFLEX);
      if (!accentedNucleus) {return null;}
      return replaceNucleus(word, accentedNucleus);

    case TonePattern.PROPERISPOMENON:
      if (nuclei[1] === undefined) {return null;}
      selectedNucleus = nuclei[1];
      accentedNucleus = applyToneToNucleus(selectedNucleus, Tone.CIRCUMFLEX);
      if (!accentedNucleus) {return null;}
      return replaceNucleus(word, accentedNucleus);

    case TonePattern.PROPAROXYTONE_AND_OXYTONE:
      if (nuclei[2] === undefined) {return null;}
      // eslint-disable-next-line no-case-declarations
      const ppoProparox = applyToneToNucleus(nuclei[2], Tone.ACUTE);
      // eslint-disable-next-line no-case-declarations
      const ppoOx = applyToneToNucleus(nuclei[0], Tone.ACUTE);
      if (!ppoProparox || !ppoOx) {return null;}
      return replaceNucleus(replaceNucleus(word, ppoProparox), ppoOx);

    case TonePattern.PROPERISPOMENON_AND_OXYTONE:
      if (nuclei[1] === undefined) {return null;}
      // eslint-disable-next-line no-case-declarations
      const prpPerisp = applyToneToNucleus(nuclei[1], Tone.CIRCUMFLEX);
      // eslint-disable-next-line no-case-declarations
      const prpOxy = applyToneToNucleus(nuclei[0], Tone.ACUTE);
      if (!prpPerisp || !prpOxy) {return null;}
      return replaceNucleus(replaceNucleus(word, prpPerisp), prpOxy);
  }
}

export function determineTonePattern(nuclei: NucleusIndex[]): TonePattern {
  const nucleusTones: Tone[] = nuclei.map((nucleus) => {
    const accChars = getAccChars(nucleus.nucleus);
    switch (accChars.length) {
      case 0:
        return Tone.NONE;
      case 1:
        return accChars[0].props.tone;
      default:
        return Tone.NONE;
    }
  });
  switch (nucleusTones[0]) {
    case Tone.GRAVE:
      return TonePattern.OXYTONE_GRAVE;
    case Tone.ACUTE:
      if (nucleusTones[1] === Tone.CIRCUMFLEX) {
        return TonePattern.PROPERISPOMENON_AND_OXYTONE;
      } else if (nucleusTones[2] === Tone.ACUTE) {
        return TonePattern.PROPAROXYTONE_AND_OXYTONE;
      } else {
        return TonePattern.OXYTONE_ACUTE;
      }
    case Tone.CIRCUMFLEX:
      return TonePattern.PERISPOMENON;
    default:
      break;
  }

  switch (nucleusTones[1]) {
    case Tone.ACUTE:
      return TonePattern.PAROXYTONE;
    case Tone.CIRCUMFLEX:
      return TonePattern.PROPERISPOMENON;
    default:
      break;
  }
  switch (nucleusTones[2]) {
    case Tone.ACUTE:
      return TonePattern.PROPAROXYTONE;
    default:
      break;
  }
  return TonePattern.TONELESS;
}

export function getRandomItem<T>(arrayOfItems: T[]): T {
  return arrayOfItems[randomInt(0, arrayOfItems.length - 1)];
}

export function getRandomEnumValue<T extends object>(anEnum: T): T[keyof T] {
  const enumValues = Object.values(anEnum) as T[keyof T][];
  const randomIndex = Math.floor(Math.random() * enumValues.length);
  return enumValues[randomIndex];
}

function removeMacraBreves(word: string): string {
  return word
    .replace(/[ᾱᾰ]/g, 'α')
    .replace(/[ῑῐ]/g, 'ι')
    .replace(/[ῡῠ]/g, 'υ');
}

function isPenultimateLong(longShort: string): boolean | undefined {
  const noLongShort = removeMacraBreves(longShort);
  const reverseIndex = getNuclei(noLongShort)[1].index;
  const penultIndex = longShort.length - reverseIndex;
  if (
    ['ᾱ', 'ῑ', 'ῡ', 'Ᾱ', 'Ῑ', 'Ῡ', 'η', 'ω'].includes(
      longShort[penultIndex - 1]) || getNuclei(noLongShort)[1].nucleus.length > 1
  ) {
    return true;
  }
  if (['ᾰ', 'ῐ', 'ῠ', 'Ᾰ', 'Ῐ', 'Ῠ', 'ϊ'].includes(longShort[penultIndex - 1])) {
    return false;
  }
  return undefined;
}

function getUnaccentedStem(word: NominalForm, targetCase: Casus, targetNumber: Numerus): string {
  const bareStem = word.baseForm.endsWith('ς')
    ? removeMacraBreves(word.baseForm).slice(0, -1)
    : removeMacraBreves(word.baseForm);

  switch (targetNumber) {
    case Numerus.SINGULAR:
      switch (targetCase) {
        case Casus.NOMINATIVE:
          return removeMacraBreves(word.baseForm);
        case Casus.VOCATIVE:
          if (word.gender === Genus.MASCULINE) {
            if (bareStem.endsWith('τη')) {
              return bareStem.replace(/τη$/, 'τα');
            }
            return bareStem;
          }
          return word.baseForm;
        case Casus.GENITIVE:
          if (word.gender === Genus.MASCULINE) {
            return bareStem.slice(0, -1) + 'ου';
          }
          if (word.baseTone === TonePattern.PERISPOMENON) {
            return bareStem + 'ς';
          }
          if (bareStem.match(/[ρει]α$/)) {
            return bareStem.slice(0, -1) + 'ας';
          }
          return bareStem.slice(0, -1) + 'ης';
        case Casus.DATIVE:
          if (word.gender === Genus.MASCULINE) {
            if (bareStem.endsWith('α')) {
              return bareStem.replace(/α$/, 'ᾳ');
            }
            return bareStem.replace(/η$/, 'ῃ');
          }
          if (word.baseTone === TonePattern.PERISPOMENON) {
            if (bareStem.endsWith('α')) {
              return bareStem.replace(/α$/, 'ᾳ');
            }
            return bareStem.replace(/η$/, 'ῃ');
          }
          if (bareStem.match(/[ρει]α$/)) {
            return bareStem.replace(/α$/, 'ᾳ');
          }
          return bareStem.slice(0, -1) + 'ῃ';
        case Casus.ACCUSATIVE:
          return bareStem + 'ν';
        default:
          return '';
      }
    case Numerus.DUAL:
      switch (targetCase) {
        case Casus.NOMINATIVE:
        case Casus.VOCATIVE:
        case Casus.ACCUSATIVE:
          return bareStem.slice(0, -1) + 'α';
        case Casus.GENITIVE:
        case Casus.DATIVE:
          return bareStem.slice(0, -1) + 'αιν';
        default:
          return '';
      }
    case Numerus.PLURAL:
      switch (targetCase) {
        case Casus.NOMINATIVE:
        case Casus.VOCATIVE:
          return bareStem.slice(0, -1) + 'αι';
        case Casus.GENITIVE:
          return bareStem.slice(0, -1) + 'ων';
        case Casus.DATIVE:
          return bareStem.slice(0, -1) + 'αις';
        case Casus.ACCUSATIVE:
          return bareStem.slice(0, -1) + 'ας';
        default:
          return '';
      }
    default:
      return '';
  }
}

export function declineFirstDeclensionSubstantive(
  word: NominalForm,
  targetCase: Casus,
  targetNumber: Numerus
): string | void {
  const stem = getUnaccentedStem(word, targetCase, targetNumber);

  if (word.exception) {
    const exception = word.exception.find(exc =>
      (targetCase === exc.case ?? word.case)
      && (targetNumber === exc.gramNumber ?? word.gramNumber)
    );
    if (exception !== undefined) {
      const selectedForm = exception.baseForm ?? word.baseForm;
      const selectedTonePattern = exception.baseTone ?? word.baseTone;
      return applyTonePatternToWord(selectedForm, selectedTonePattern) ?? '';
    }
  }

  switch (targetNumber) {
    case Numerus.SINGULAR:
      switch (targetCase) {
        case Casus.NOMINATIVE:
        case Casus.ACCUSATIVE:
        case Casus.VOCATIVE:
          return applyTonePatternToWord(stem, word.baseTone) ?? '';
        case Casus.GENITIVE:
        case Casus.DATIVE:
          switch (word.baseTone) {
            case TonePattern.OXYTONE_ACUTE:
            case TonePattern.PERISPOMENON:
              return (
                applyTonePatternToWord(stem, TonePattern.PERISPOMENON) ?? ''
              );
            case TonePattern.PAROXYTONE:
            case TonePattern.PROPAROXYTONE:
            case TonePattern.PROPERISPOMENON:
              return applyTonePatternToWord(stem, TonePattern.PAROXYTONE) ?? '';
            default:
              return '';
          }
        default:
          return '';
      }
    case Numerus.DUAL:
      switch (targetCase) {
        case Casus.NOMINATIVE:
        case Casus.VOCATIVE:
        case Casus.ACCUSATIVE:
          switch (word.baseTone) {
            case TonePattern.PROPAROXYTONE:
            case TonePattern.PROPERISPOMENON:
              return applyTonePatternToWord(stem, TonePattern.PAROXYTONE) ?? '';
          }
          return applyTonePatternToWord(stem, word.baseTone) ?? '';
        case Casus.GENITIVE:
        case Casus.DATIVE:
          switch (word.baseTone) {
            case TonePattern.OXYTONE_ACUTE:
            case TonePattern.PERISPOMENON:
              return (
                applyTonePatternToWord(stem, TonePattern.PERISPOMENON) ?? ''
              );
            case TonePattern.PAROXYTONE:
            case TonePattern.PROPAROXYTONE:
            case TonePattern.PROPERISPOMENON:
              return applyTonePatternToWord(stem, TonePattern.PAROXYTONE) ?? '';
            default:
              return '';
          }
        default:
          return '';
      }
    case Numerus.PLURAL:
      switch (targetCase) {
        case Casus.NOMINATIVE:
        case Casus.VOCATIVE:
          if (word.baseTone === TonePattern.PAROXYTONE) {
            // If properispomenon is possible => penultimate is possibly long. If it is short: it must be paroxytone.
            if (
              applyTonePatternToWord(stem, TonePattern.PROPERISPOMENON) !== null
            ) {
              // Perispomenon or paroxytone depends on length of penultimate nucleus.
              if (isPenultimateLong(word.baseForm) === true) {
                return (
                  applyTonePatternToWord(stem, TonePattern.PROPERISPOMENON) ??
                  ''
                );
              } else if (isPenultimateLong(word.baseForm) === false) {
                return (
                  applyTonePatternToWord(stem, TonePattern.PAROXYTONE) ?? ''
                );
              } else {
                return `${
                  applyTonePatternToWord(stem, TonePattern.PROPERISPOMENON) ??
                  ''
                } // ${
                  applyTonePatternToWord(stem, TonePattern.PAROXYTONE) ?? ''
                }`;
              }
            }
          }
          return applyTonePatternToWord(stem, word.baseTone) ?? '';
        case Casus.GENITIVE:
          return applyTonePatternToWord(stem, TonePattern.PERISPOMENON) ?? '';
        case Casus.DATIVE:
          switch (word.baseTone) {
            case TonePattern.OXYTONE_ACUTE:
            case TonePattern.PERISPOMENON:
              return applyTonePatternToWord(stem, TonePattern.PERISPOMENON) ?? '';
            case TonePattern.PAROXYTONE:
            case TonePattern.PROPAROXYTONE:
            case TonePattern.PROPERISPOMENON:
              return applyTonePatternToWord(stem, TonePattern.PAROXYTONE) ?? '';
            default:
              return '';
          }
        case Casus.ACCUSATIVE:
          switch (word.baseTone) {
            case TonePattern.OXYTONE_ACUTE:
            case TonePattern.PERISPOMENON:
              return applyTonePatternToWord(stem, word.baseTone) ?? '';
            case TonePattern.PAROXYTONE:
            case TonePattern.PROPAROXYTONE:
            case TonePattern.PROPERISPOMENON:
              return applyTonePatternToWord(stem, TonePattern.PAROXYTONE) ?? '';
            default:
              return '';
          }
        default:
          return '';
      }
  }
}


// A generic solution will not work:
//
// generateAssignments<W extends WordClass>: Assignment<W>[]
//
// Source: https://stackoverflow.com/questions/69783310/type-is-assignable-to-the-constraint-of-type-t-but-t-could-be-instantiated
//
// I would like this to mean: if input = Article, output = Article.
// However, type identity between input and output is not enforced in TS right now.
export function generateNewArticleAssignments(amount = 20): Assignment<Article>[] {
  const newAssignments: Assignment<Article>[] = [];
  const shuffledArticles = [...articles].sort(() => 0.5 - Math.random());
  const randomArticles = shuffledArticles.slice(0, amount);
  randomArticles.forEach(art => {
    newAssignments.push({
      word: art,
      question: getRandomEnumValue(Question),
      finished: false
    });
  });
  return newAssignments;
}

export function generateNewFirstDeclensionAssignments(amount = 20): Assignment<Substantive>[] {
  const newAssignments: Assignment<Substantive>[] = [];
  const randomSubstantives: Substantive[] = [];
  let i = 0;
  const words: string[] = [];

  while (i < amount) {
    const randomLexeme = getRandomItem(firstDeclensionSubstantives);
    const randomCase = getRandomEnumValue(Casus);
    const randomNumber = getRandomEnumValue(Numerus);
    const word = declineFirstDeclensionSubstantive(randomLexeme, randomCase, randomNumber);

    // Try again if no word can be declined or if the word is already included.
    if (!word || words.includes(word)) {
      continue;
    }

    words.push(word);
    i = i + 1;

    const newSubstantive: Substantive = {
      type: 'substantive',
      inflectedForm: word,
      baseForm: randomLexeme.baseForm,
      baseTone: randomLexeme.baseTone,
      case: randomCase,
      gender: randomLexeme.gender,
      gramNumber: randomNumber,
      inflectedTone: determineTonePattern(getNuclei(word)),
      translation: randomLexeme.translation,
      exception: randomLexeme.exception
    };
    randomSubstantives.push(newSubstantive);
  }

  randomSubstantives.forEach(substantive => {
    newAssignments.push({
      finished: false,
      question: getRandomEnumValue(Question),
      word: substantive
    });
  });
  return newAssignments;
}

export function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}

export function getNominativeSg(word: WordClass): string {
  switch (word.type) {
    case 'article': {
      const nomSg = articles.find(art =>
        art.case === Casus.NOMINATIVE
        && art.gender === word.gender
        && art.gramNumber === Numerus.SINGULAR);
      if (nomSg === undefined) {
        console.warn('No nominative singular found!');
        return '';
      }
      return nomSg.baseForm;
    }
    case 'substantive':
      return word.baseForm;
    default:
      console.error('No nominative singular function implemented for non-nominals.');
      return '';
  }
}

export function shuffle(array: unknown[]): unknown[] {
  let currentIndex = array.length;
  let randomIndex = 0;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export function getTargetForm(wordClass: WordClass): string {
  if ('inflectedTone' in wordClass && wordClass.inflectedForm && wordClass.inflectedTone) {
    return applyTonePatternToWord(wordClass.inflectedForm, wordClass.inflectedTone) ?? '';
  }
  return wordClass.baseForm;    // With verbs, we want to apply recessive accentuation here etc.
}
