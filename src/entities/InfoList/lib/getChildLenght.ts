import { type InfoRow } from '../model/types/infoListTypes'

export const getChildLength = (row: InfoRow) => {
    let result = row.child.length
    row.child.forEach((row) => { result += getChildLength(row) })
    return result
}
