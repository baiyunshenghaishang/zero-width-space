import {
    ZERO_WIDTH_SPACE,
    ZERO_WIDTH_NON_JOINER,
    ZERO_WIDTH_JOINER,
    ZERO_WIDTH_NO_BREAK_SPACE
} from '../constant/index.js'

const textToBinary = text => {
    return text
        .split('')
        .map(char =>
            char
                .codePointAt(0)
                .toString(2)
                .padStart(8, '0')
        )
        .join(' ')
}

const binaryToZeroWidth = binary => {
    return binary
        .split('')
        .map(binaryNum => {
            const num = parseInt(binaryNum, 10)
            if (num === 1) {
                return ZERO_WIDTH_SPACE
            } else if (num === 0) {
                return ZERO_WIDTH_NON_JOINER
            }
            // 空格
            return ZERO_WIDTH_JOINER
        })
        .join(ZERO_WIDTH_NO_BREAK_SPACE)
}

const textToZeroWidth = username => {
    const binaryUserName = textToBinary(username)
    return binaryToZeroWidth(binaryUserName)
}

export default textToZeroWidth
