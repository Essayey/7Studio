import { type InfoRow } from '../model/types/infoListTypes'

export const isDeepChild = (row: InfoRow, childId: number | null) => {
    if (!childId) return false
    if (row.id === childId) {
        return true
    }

    for (const child of row.child) {
        if (isDeepChild(child, childId)) {
            return true
        }
    }
    return false
}
