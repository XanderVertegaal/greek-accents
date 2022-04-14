import { allChars, allSemi, toneChars } from 'src/assets/models';
import {
  Character,
  CharProps,
  IndexWord,
  Tone,
  TonePattern,
} from 'src/assets/types';
import { NucleusIndex } from 'src/assets/types';

export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function areCharPropsEqual(char1: Character, char2: Character): boolean {
  const differences = Object.keys(char1.props).filter(
    (key) => char1.props[key] !== char2.props[key]
  );
  return differences.length === 0;
}

export function getAccChars(word: string): Character[] {
  const foundChars: Character[] = [];
  const letters = word.split('');
  letters.forEach((letter) => {
    for (let char of toneChars) {
      if (letter === char.glyph) {
        foundChars.push(char);
        continue;
      }
    }
  });
  return foundChars;
}

export function removeAcc(char: Character): Character | undefined {
  const constructedBaseChar: Character = {
    ...char,
    props: {
      ...char.props,
      tone: Tone.NONE,
    },
  };
  const foundBaseChar = getCharFromProps(constructedBaseChar);
  if (!foundBaseChar) return undefined;
  return foundBaseChar;
}

export function getCharFromProps(char: Character): Character | null {
  const foundChar = allChars.find((c) => areCharPropsEqual(c, char));
  return foundChar ? foundChar : null;
}

export function getCharFromLetter(letter: string): Character | undefined {
  return allChars.find((c) => c.glyph === letter);
}

export function isVowel(letter: string): boolean {
  return allChars.map((c) => c.glyph).includes(letter);
}

export function isSemivowel(letter: string): boolean {
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
        index: index,
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
        nuclei.push({ nucleus: letter, index: index });
        return;
      }
      skipNext = true;
      nuclei.push({
        nucleus: reversedLetters[index + 1] + letter,
        index: index,
      });
      return;
    } else {
      nuclei.push({ nucleus: letter, index: index });
    }
  });
  return nuclei;
}

export function removeWordAccents(word: string): string {
  let unaccentedWord = word.split('').map((letter) => {
    if (!isVowel(letter)) return letter;
    const char = getCharFromLetter(letter);
    if (char === undefined) return;
    return removeAcc(char)?.glyph;
  });
  return unaccentedWord.join('');
}

export function applyToneToNucleus(
  { nucleus, index }: NucleusIndex,
  tone: Tone
): NucleusIndex | null {
  let unaccChar: Character | undefined = undefined;
  if (nucleus.length === 1) {
    unaccChar = getCharFromLetter(nucleus);
  } else if (nucleus.length === 2) {
    unaccChar = getCharFromLetter(nucleus[1]);
  } else {
    console.error('Invalid nucleus length');
    return null;
  }

  if (unaccChar === undefined) return { nucleus, index };
  let accCharProps: Character = {
    ...unaccChar,
    props: {
      ...unaccChar.props,
      tone: tone,
    },
  };
  let accChar = getCharFromProps(accCharProps);

  if (!accChar) return null;
  return nucleus.length === 1
    ? { nucleus: accChar.glyph, index: index }
    : { nucleus: nucleus[0] + accChar.glyph, index: index };
}

export function replaceNucleus(
  word: string,
  { nucleus, index }: NucleusIndex
): string {
  let newWord = word.split('').reverse();
  newWord.splice(index, nucleus.length, nucleus);
  return newWord.reverse().join('');
}

export function applyTonePatternToWord(
  word: string,
  tonePattern: TonePattern
): string | null {
  const nuclei = getNuclei(word);
  let selectedNucleus: NucleusIndex | null = null;
  let accentedNucleus: NucleusIndex | null = null;
  if (nuclei.length === 0) return null;
  switch (tonePattern) {
    case TonePattern.TONELESS:
      return word;

    case TonePattern.OXYTONE_GRAVE:
      selectedNucleus = nuclei[0];
      accentedNucleus = applyToneToNucleus(selectedNucleus, Tone.GRAVE);
      if (!accentedNucleus) return null;
      return replaceNucleus(word, accentedNucleus);

    case TonePattern.OXYTONE_ACUTE:
      selectedNucleus = nuclei[0];
      accentedNucleus = applyToneToNucleus(selectedNucleus, Tone.ACUTE);
      if (!accentedNucleus) return null;
      return replaceNucleus(word, accentedNucleus);

    case TonePattern.PAROXYTONE:
      if (nuclei[1] === undefined) return null;
      selectedNucleus = nuclei[1];
      accentedNucleus = applyToneToNucleus(selectedNucleus, Tone.ACUTE);
      if (!accentedNucleus) return null;
      return replaceNucleus(word, accentedNucleus);

    case TonePattern.PROPAROXYTONE:
      if (nuclei[2] === undefined) return null;
      selectedNucleus = nuclei[2];
      accentedNucleus = applyToneToNucleus(selectedNucleus, Tone.ACUTE);
      if (!accentedNucleus) return null;
      return replaceNucleus(word, accentedNucleus);

    case TonePattern.PERISPOMENON:
      selectedNucleus = nuclei[0];
      accentedNucleus = applyToneToNucleus(selectedNucleus, Tone.CIRCUMFLEX);
      if (!accentedNucleus) return null;
      return replaceNucleus(word, accentedNucleus);

    case TonePattern.PROPERISPOMENON:
      if (nuclei[1] === undefined) return null;
      selectedNucleus = nuclei[1];
      accentedNucleus = applyToneToNucleus(selectedNucleus, Tone.CIRCUMFLEX);
      if (!accentedNucleus) return null;
      return replaceNucleus(word, accentedNucleus);

    case TonePattern.PROPAROXYTONE_AND_OXYTONE:
      if (nuclei[2] === undefined) return null;
      let ppoProparox = applyToneToNucleus(nuclei[2], Tone.ACUTE);
      let ppoOx = applyToneToNucleus(nuclei[0], Tone.ACUTE);
      if (!ppoProparox || !ppoOx) return null;
      return replaceNucleus(replaceNucleus(word, ppoProparox), ppoOx);

    case TonePattern.PROPERISPOMENON_AND_OXYTONE:
      if (nuclei[1] === undefined) return null;
      let prpPerisp = applyToneToNucleus(nuclei[1], Tone.CIRCUMFLEX);
      let prpOxy = applyToneToNucleus(nuclei[0], Tone.ACUTE);
      if (!prpPerisp || !prpOxy) return null;
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
  // console.log('Found nucleid tones:', nucleusTones)
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

export function getRandomWord(indexedText: IndexWord[]): IndexWord {
  return indexedText[randomInt(0, indexedText.length - 1)];
}