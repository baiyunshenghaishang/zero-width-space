import { ZERO_WIDTH_SPACE, ZERO_WIDTH_NON_JOINER, ZERO_WIDTH_NO_BREAK_SPACE } from '../constant/index.js'

const zeroWidthToBinary = str => {
    return str
        .split(ZERO_WIDTH_NO_BREAK_SPACE)
        .map(zeroWidth => {
            if (zeroWidth === ZERO_WIDTH_SPACE) {
                return '1'
            } else if (zeroWidth === ZERO_WIDTH_NON_JOINER) {
                return '0'
            }
            return ' '
        })
        .join('')
}

const binaryToText = str => {
    return str
        .split(' ')
        .map(item => {
            return String.fromCodePoint(parseInt(item, 2))
        })
        .join('')
}

const zeroWidthToText = str => {
    const binaryStr = zeroWidthToBinary(str)
    return binaryToText(binaryStr)
}

export default zeroWidthToText
