import { InfoList, InfoRow } from "../model/types/infoListTypes"

export type DeleteRowReqDto = {
    listId: number
    rowId: number
}

export type DeleteRowResDto = {
    changed: InfoList
    current: InfoRow
}

export type UpdateRowReqDto = {
    listId: number
    rowId: number
    newRow: InfoRow
}

export type UpdateRowResDto = {
    changed: InfoList
    current: InfoRow
}

export type CreateRowReqDto = {
    listId: number,
    parentId: number
}

export type CreateRowResDto = {
    changed: InfoList
    current: InfoRow
}

export type GetInfoListReqDto = {
    listId: number
}

export type GetInfoListResDto = InfoList