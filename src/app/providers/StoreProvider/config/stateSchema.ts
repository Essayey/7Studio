import { type InfoListSchema } from '@/entities/InfoList'
import { type api } from '@/shared/api/api.common'

export interface StateSchema {
    [api.reducerPath]: ReturnType<typeof api.reducer>
    infoList: InfoListSchema
}
