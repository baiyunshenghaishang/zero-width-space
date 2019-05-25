import {
    ZERO_WIDTH_SPACE,
    ZERO_WIDTH_NON_JOINER,
    ZERO_WIDTH_JOINER,
    ZERO_WIDTH_NO_BREAK_SPACE
} from './constant/index.js'

import textToZeroWidth from './util/text-to-zero-width.js'
import zeroWidthToText from './util/zero-width-to-text.js'
const SPLITER = ZERO_WIDTH_JOINER + ZERO_WIDTH_JOINER + ZERO_WIDTH_JOINER + ZERO_WIDTH_JOINER
export const composeText = (str, hiddenStr) => {
    return str + SPLITER + textToZeroWidth(hiddenStr)
}

export const splitText = composeStr => {
    let regex = new RegExp(
            `${SPLITER}([${ZERO_WIDTH_SPACE}${ZERO_WIDTH_NON_JOINER}${ZERO_WIDTH_JOINER}${ZERO_WIDTH_NO_BREAK_SPACE}]+)$`
        ),
        matchResult = regex.exec(composeStr),
        result = {
            source: composeStr
        }
    if (matchResult) {
        let index = matchResult.index
        result.source = composeStr.slice(0, index)
        result.hiddenText = zeroWidthToText(matchResult[1])
    }
    return result
}
