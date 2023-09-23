import { InfoRow } from "../model/types/infoListTypes";

export const emptyRow: Omit<InfoRow, 'child' | 'id' | 'total'> & { parentId: number | null } = {
    equipmentCosts: 0,
    estimatedProfit: 0,
    machineOperatorSalary: 0,
    mainCosts: 0,
    materials: 0,
    parentId: null,
    mimExploitation: 0,
    overheads: 0,
    rowName: "string",
    salary: 0,
    supportCosts: 0,
} 