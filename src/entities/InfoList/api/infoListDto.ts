import { type InfoList, type InfoRow } from '../model/types/infoListTypes'

export interface DeleteRowReqDto {
    listId: number
    rowId: number
}

export interface DeleteRowResDto {
    changed: InfoList
    current: InfoRow
}

export interface UpdateRowReqDto {
    listId: number
    rowId: number
    newRow: InfoRow
}

export interface UpdateRowResDto {
    changed: InfoList
    current: InfoRow
}

export interface CreateRowReqDto {
    listId: number
    parentId: number | null
    row: InfoRow
}

export interface CreateRowResDto {
    changed: InfoList
    current: InfoRow
}

export interface GetInfoListReqDto {
    listId: number
}

export type GetInfoListResDto = InfoList
