import { alpha, alphaLongShort, alphaToneless } from "./alpha";
import { epsilon, epsilonToneless } from "./epsilon";
import { eta, etaToneless } from "./eta";
import { omicron, omicronToneless } from "./omicron";
import { omega, omegaToneless } from "./omega";
import { iota, iotaLongShort, iotaToneless } from "./iota";
import { upsilon, upsilonLongShort, upsilonToneless } from "./upsilon";

export const longShortChars = [...alphaLongShort, ...iotaLongShort, upsilonLongShort];

export const toneChars = [...alpha, ...epsilon, ...eta, ...omicron, ...omega, ...iota, ...upsilon];
export const tonelessChars = [...alphaToneless, ...epsilonToneless, ...etaToneless, ...omicronToneless, ...omegaToneless, ...iotaToneless, ...upsilonToneless];
export const allChars = toneChars.concat(tonelessChars);

export const allSemi = [...iota, ...iotaToneless, ...upsilon, ...upsilonToneless];