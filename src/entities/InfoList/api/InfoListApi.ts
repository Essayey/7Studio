import { emptyRow } from '../lib/emptyRow'
import { api } from '@/shared/api/api.common'
import {
    type CreateRowReqDto,
    type CreateRowResDto,
    type DeleteRowReqDto,
    type DeleteRowResDto,
    type GetInfoListReqDto,
    type GetInfoListResDto,
    type UpdateRowReqDto,
    type UpdateRowResDto
} from './infoListDto'
import { type InfoList } from '../model/types/infoListTypes'

export const infoListApi = api.injectEndpoints({
    endpoints: (builder) => ({
        deleteRow: builder.mutation<DeleteRowResDto, DeleteRowReqDto>({
            query: (body) => ({
                url: `/outlay-rows/entity/${body.listId}/row/${body.rowId}/delete`,
                method: 'DELETE'
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const patch = dispatch(
                    infoListApi.util.updateQueryData('getInfoList', { listId: arg.listId }, (draft) => {
                        const findRow = (list: InfoList) => {
                            for (const row of list) {
                                if (row.id === arg.rowId) {
                                    const index = list.findIndex((row) => row.id === arg.rowId)
                                    list.splice(index, 1)
                                    return
                                }
                                findRow(row.child)
                            }
                        }
                        findRow(draft)
                    })
                )
                try {
                    await queryFulfilled
                } catch {
                    patch.undo()
                }
            }
        }),
        updateRow: builder.mutation<UpdateRowResDto, UpdateRowReqDto>({
            query: (body) => ({
                url: `/outlay-rows/entity/${body.listId}/row/${body.rowId}/update`,
                method: 'POST',
                body: body.newRow
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const patch = dispatch(
                    infoListApi.util.updateQueryData('getInfoList', { listId: arg.listId }, (draft) => {
                        const findRow = (list: InfoList) => {
                            for (const row of list) {
                                if (row.id === arg.rowId) {
                                    Object.assign(row, arg.newRow)
                                    return
                                }
                                findRow(row.child)
                            }
                        }
                        findRow(draft)
                    })
                )
                try {
                    await queryFulfilled
                } catch {
                    patch.undo()
                }
            }
        }),
        createRow: builder.mutation<CreateRowResDto, CreateRowReqDto>({
            query: (body) => ({
                url: `/outlay-rows/entity/${body.listId}/row/create`,
                method: 'POST',
                body: { ...emptyRow, parentId: body.parentId }
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    dispatch(
                        infoListApi.util.updateQueryData('getInfoList', { listId: arg.listId }, (draft) => {
                            const findRow = (list: InfoList) => {
                                for (const row of list) {
                                    if (row.id === arg.parentId) {
                                        row.child.unshift({ ...data.current, child: [] })
                                        return
                                    }
                                    findRow(row.child)
                                }
                            }
                            findRow(draft)
                        })
                    )
                } catch { }
            }
        }),
        getInfoList: builder.query<GetInfoListResDto, GetInfoListReqDto>({
            query: (body) => ({
                url: `/outlay-rows/entity/${body.listId}/row/list`,
                method: 'GET'
            })
        })
    })
})

export const {
    useGetInfoListQuery,
    useCreateRowMutation,
    useUpdateRowMutation,
    useDeleteRowMutation
} = infoListApi
