import { InfoList } from "@/entities/InfoList"
import Xarrow from "react-xarrows"

type DrawLinesProps = {
    list: InfoList
}

export const DrawLines = (props: DrawLinesProps) => {
    const { list } = props

    const transformInfoListToPairs = (infoList: InfoList, parentId: number | null = null): [number, number | null][] => {
        const pairs: [number, number | null][] = []

        for (const infoRow of infoList) {
            pairs.push([infoRow.id, parentId])

            if (infoRow.child.length > 0) {
                pairs.push(...transformInfoListToPairs(infoRow.child, infoRow.id))
            }
        }
        return pairs
    }

    return (
        <>
            {
                transformInfoListToPairs(list, null).map(([end, start]) => {
                    if (start === null) return
                    return (
                        <Xarrow
                            color="#C6C6C6"
                            strokeWidth={1}
                            key={end}
                            start={String(start)}
                            end={String(end)}
                            path={"grid"}
                            startAnchor={"bottom"}
                            endAnchor={"left"}
                            showHead={false}
                            zIndex={-1}
                        />)
                }
                )
            }
        </>
    )
}