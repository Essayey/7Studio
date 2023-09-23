export type InfoRow = {
    id: number,
    rowName: string,
    total: number,
    salary: number,
    mimExploitation: number,
    machineOperatorSalary: number,
    materials: number,
    mainCosts: number,
    supportCosts: number,
    equipmentCosts: number,
    overheads: number,
    estimatedProfit: number,
    child: InfoRow[]
}

export type InfoList = Array<InfoRow>

export type InfoListSchema = {
    currentListId: number
}