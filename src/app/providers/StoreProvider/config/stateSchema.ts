import { InfoListSchema } from "@/entities/InfoList";
import { api } from "@/shared/api/api.common";

export type StateSchema = {
    [api.reducerPath]: ReturnType<typeof api.reducer>
    infoList: InfoListSchema
}
