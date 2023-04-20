import { useEffect, useState } from 'react'
import { useResolve } from '../../../../core/di/useResolve'
import { GetSpeakerQry } from '../../application/get-speakers-qry'
import { Speaker } from '../../domain/speaker'
import { UseCaseService } from '../../../../core/command/use-case-service'

export const useGetSpeakers = () => {
    const getSpeakers = useResolve(GetSpeakerQry)
    const useCaseService = new UseCaseService()
    const [selectOptions, setSelectOptions] = useState<Speaker[]>([])

    useEffect(() => {
        useCaseService.execute(getSpeakers).then(speakers => {
            setSelectOptions(speakers)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        selectOptions,
    }
}
